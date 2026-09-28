// IndexNow client: tells participating search engines (Bing, Yandex, Seznam,
// Naver, ...) that URLs were added, changed or removed, so they recrawl them
// without waiting for the sitemap. It complements the sitemap and never
// replaces it.
//
// Contract: submitIndexNow() never throws. IndexNow is a best-effort hint,
// so a failure here must never break a build, deploy or publish flow.
// The key is never written to logs; response bodies are redacted.
//
// Protocol: https://www.indexnow.org/documentation

const DEFAULT_ENDPOINT = 'https://api.indexnow.org/indexnow';
/** Protocol limit per request. */
export const MAX_URLS_PER_REQUEST = 10_000;
const KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;

export interface IndexNowLogger {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

export interface IndexNowOptions {
  /** Site origin, e.g. https://example.com. Defaults to env (see resolveSiteUrl). */
  siteUrl?: string;
  /** Defaults to process.env.INDEXNOW_KEY. */
  key?: string;
  /** Defaults to process.env.INDEXNOW_ENDPOINT, else api.indexnow.org. */
  endpoint?: string;
  fetchImpl?: typeof fetch;
  logger?: IndexNowLogger;
}

export interface RejectedUrl {
  url: string;
  reason: string;
}

export interface BatchResult {
  count: number;
  status: number | null;
  ok: boolean;
}

export interface IndexNowResult {
  /** True when every batch was accepted (or there was nothing to send). */
  ok: boolean;
  /** URLs accepted by the endpoint. */
  submitted: number;
  rejected: RejectedUrl[];
  batches: BatchResult[];
  /** Set when nothing was sent because configuration was missing or invalid. */
  skippedReason?: string;
}

const consoleLogger: IndexNowLogger = {
  info: (m) => console.log(`[indexnow] ${m}`),
  warn: (m) => console.warn(`[indexnow] ${m}`),
  error: (m) => console.error(`[indexnow] ${m}`),
};

/**
 * Production site origin, taken from configuration rather than hardcoded:
 * INDEXNOW_SITE_URL, then NEXT_PUBLIC_SITE_URL, then Vercel's
 * VERCEL_PROJECT_PRODUCTION_URL (the project's production domain).
 */
export function resolveSiteUrl(env: Record<string, string | undefined> = process.env): string | undefined {
  const explicit = env.INDEXNOW_SITE_URL || env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return undefined;
}

export function isValidKey(key: string | undefined): key is string {
  return typeof key === 'string' && KEY_PATTERN.test(key);
}

/**
 * Validates, normalizes and dedupes URLs, keeping only those on the site's
 * exact host (IndexNow rejects the whole request with 422 otherwise).
 */
export function prepareUrls(urls: readonly string[], siteUrl: string): { accepted: string[]; rejected: RejectedUrl[] } {
  const host = new URL(siteUrl).host;
  const accepted: string[] = [];
  const seen = new Set<string>();
  const rejected: RejectedUrl[] = [];

  for (const raw of urls) {
    let parsed: URL;
    try {
      parsed = new URL(String(raw).trim());
    } catch {
      rejected.push({ url: String(raw), reason: 'not a valid absolute URL' });
      continue;
    }
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      rejected.push({ url: String(raw), reason: `unsupported protocol ${parsed.protocol}` });
      continue;
    }
    if (parsed.host !== host) {
      rejected.push({ url: String(raw), reason: `host ${parsed.host} is not ${host}` });
      continue;
    }
    parsed.hash = '';
    const href = parsed.href;
    if (seen.has(href)) continue;
    seen.add(href);
    accepted.push(href);
  }
  return { accepted, rejected };
}

export function chunk<T>(items: readonly T[], size = MAX_URLS_PER_REQUEST): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

function describeStatus(status: number): string {
  switch (status) {
    case 400: return 'bad request: invalid format';
    case 403: return 'forbidden: key not valid (key file missing or its content does not match)';
    case 422: return 'unprocessable: URLs do not belong to the host, or the key does not match the schema';
    case 429: return 'too many requests: rate limited, remaining batches skipped';
    default: return 'unexpected response';
  }
}

function redact(text: string, key: string): string {
  return text.split(key).join('[redacted]').slice(0, 300);
}

/**
 * Submits URLs to IndexNow in batches of up to 10,000. Never throws.
 * Returns what was sent and how each batch was answered.
 */
export async function submitIndexNow(urls: readonly string[], options: IndexNowOptions = {}): Promise<IndexNowResult> {
  const logger = options.logger ?? consoleLogger;
  const key = options.key ?? process.env.INDEXNOW_KEY;
  const siteUrl = options.siteUrl ?? resolveSiteUrl();
  const endpoint = options.endpoint ?? process.env.INDEXNOW_ENDPOINT ?? DEFAULT_ENDPOINT;
  const fetchImpl = options.fetchImpl ?? fetch;
  const skip = (reason: string): IndexNowResult => {
    logger.warn(`skipped: ${reason}`);
    return { ok: false, submitted: 0, rejected: [], batches: [], skippedReason: reason };
  };

  if (!isValidKey(key)) return skip('INDEXNOW_KEY is missing or invalid (8-128 chars of a-z, A-Z, 0-9, -)');
  if (!siteUrl) return skip('site URL is not configured (INDEXNOW_SITE_URL, NEXT_PUBLIC_SITE_URL or VERCEL_PROJECT_PRODUCTION_URL)');

  let origin: string;
  let host: string;
  try {
    ({ origin, host } = new URL(siteUrl));
  } catch {
    return skip(`site URL "${siteUrl}" is not a valid URL`);
  }

  const { accepted, rejected } = prepareUrls(urls, origin);
  for (const r of rejected) logger.warn(`rejected ${r.url}: ${r.reason}`);
  if (accepted.length === 0) {
    logger.info('nothing to submit');
    return { ok: true, submitted: 0, rejected, batches: [] };
  }

  const planned = chunk(accepted);
  const batches: BatchResult[] = [];
  let submitted = 0;
  for (const urlList of planned) {
    let status: number | null = null;
    try {
      const response = await fetchImpl(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host, key, keyLocation: `${origin}/${key}.txt`, urlList }),
      });
      status = response.status;
      if (status === 200 || status === 202) {
        submitted += urlList.length;
        batches.push({ count: urlList.length, status, ok: true });
        logger.info(`submitted ${urlList.length} URL(s) to ${new URL(endpoint).host}: HTTP ${status}`);
        continue;
      }
      const body = await response.text().catch(() => '');
      logger.error(`HTTP ${status} ${describeStatus(status)}${body ? ` — ${redact(body, key)}` : ''}`);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      logger.error(`request failed: ${redact(message, key)}`);
    }
    batches.push({ count: urlList.length, status, ok: false });
    if (status === 429) break;
  }

  // A 429 stops early, so unsent batches also count as failure.
  const ok = batches.length === planned.length && batches.every((b) => b.ok);
  return { ok, submitted, rejected, batches };
}
