import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MAX_URLS_PER_REQUEST, prepareUrls, resolveSiteUrl, submitIndexNow, type IndexNowLogger } from './indexnow';

const SITE = 'https://example.com';
const KEY = 'a1b2c3d4e5f6a7b8c9d0';

function recorder() {
  const lines: string[] = [];
  const logger: IndexNowLogger = {
    info: (m) => lines.push(`info ${m}`),
    warn: (m) => lines.push(`warn ${m}`),
    error: (m) => lines.push(`error ${m}`),
  };
  return { lines, logger };
}

function mockFetch(status: number, body = '') {
  const calls: Array<{ url: string; payload: { host: string; key: string; keyLocation: string; urlList: string[] } }> = [];
  const fetchImpl = (async (url: string, init: RequestInit) => {
    calls.push({ url, payload: JSON.parse(String(init.body)) });
    return new Response(body, { status });
  }) as unknown as typeof fetch;
  return { calls, fetchImpl };
}

const opts = (fetchImpl: typeof fetch, logger: IndexNowLogger) => ({ siteUrl: SITE, key: KEY, endpoint: 'https://indexnow.test/indexnow', fetchImpl, logger });

test('submits a single URL with host, key and keyLocation', async () => {
  const { calls, fetchImpl } = mockFetch(200);
  const { logger } = recorder();
  const result = await submitIndexNow([`${SITE}/a`], opts(fetchImpl, logger));
  assert.equal(result.ok, true);
  assert.equal(result.submitted, 1);
  assert.equal(calls.length, 1);
  assert.deepEqual(calls[0].payload, { host: 'example.com', key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: [`${SITE}/a`] });
});

test('submits multiple URLs and treats 202 as success', async () => {
  const { calls, fetchImpl } = mockFetch(202);
  const { logger } = recorder();
  const result = await submitIndexNow([`${SITE}/a`, `${SITE}/b`, `${SITE}/c`], opts(fetchImpl, logger));
  assert.equal(result.ok, true);
  assert.equal(result.submitted, 3);
  assert.deepEqual(calls[0].payload.urlList, [`${SITE}/a`, `${SITE}/b`, `${SITE}/c`]);
});

test('dedupes URLs, including ones differing only by fragment', () => {
  const { accepted } = prepareUrls([`${SITE}/a`, `${SITE}/a`, `${SITE}/a#faq`, ` ${SITE}/b `], SITE);
  assert.deepEqual(accepted, [`${SITE}/a`, `${SITE}/b`]);
});

test('accepts only URLs on the production host', () => {
  const { accepted, rejected } = prepareUrls(
    [`${SITE}/ok`, 'https://www.example.com/x', 'https://evil.test/example.com', 'ftp://example.com/f', 'not a url', '/relative'],
    SITE,
  );
  assert.deepEqual(accepted, [`${SITE}/ok`]);
  assert.equal(rejected.length, 5);
});

test('reports removed (deleted) URLs like any other change', async () => {
  const { calls, fetchImpl } = mockFetch(200);
  const { logger } = recorder();
  const result = await submitIndexNow([`${SITE}/deleted-page`], opts(fetchImpl, logger));
  assert.equal(result.submitted, 1);
  assert.deepEqual(calls[0].payload.urlList, [`${SITE}/deleted-page`]);
});

test('empty list makes no request', async () => {
  const { calls, fetchImpl } = mockFetch(200);
  const { logger } = recorder();
  const result = await submitIndexNow([], opts(fetchImpl, logger));
  assert.equal(result.ok, true);
  assert.equal(calls.length, 0);
});

test('only foreign URLs makes no request', async () => {
  const { calls, fetchImpl } = mockFetch(200);
  const { logger } = recorder();
  const result = await submitIndexNow(['https://other.test/a'], opts(fetchImpl, logger));
  assert.equal(calls.length, 0);
  assert.equal(result.rejected.length, 1);
});

test(`splits more than ${MAX_URLS_PER_REQUEST} URLs into batches`, async () => {
  const { calls, fetchImpl } = mockFetch(200);
  const { logger } = recorder();
  const urls = Array.from({ length: MAX_URLS_PER_REQUEST + 5 }, (_, i) => `${SITE}/p${i}`);
  const result = await submitIndexNow(urls, opts(fetchImpl, logger));
  assert.equal(calls.length, 2);
  assert.equal(calls[0].payload.urlList.length, MAX_URLS_PER_REQUEST);
  assert.equal(calls[1].payload.urlList.length, 5);
  assert.equal(result.submitted, urls.length);
});

for (const [status, phrase] of [[400, 'bad request'], [403, 'key not valid'], [422, 'do not belong'], [429, 'rate limited']] as const) {
  test(`HTTP ${status} is logged meaningfully, never throws, and never logs the key`, async () => {
    const { fetchImpl } = mockFetch(status, `error for key ${KEY}`);
    const { lines, logger } = recorder();
    const result = await submitIndexNow([`${SITE}/a`], opts(fetchImpl, logger));
    assert.equal(result.ok, false);
    assert.equal(result.submitted, 0);
    const log = lines.join('\n');
    assert.match(log, new RegExp(`HTTP ${status}`));
    assert.match(log, new RegExp(phrase));
    assert.doesNotMatch(log, new RegExp(KEY));
  });
}

test('429 stops the remaining batches', async () => {
  const { calls, fetchImpl } = mockFetch(429);
  const { logger } = recorder();
  const urls = Array.from({ length: MAX_URLS_PER_REQUEST + 1 }, (_, i) => `${SITE}/p${i}`);
  const result = await submitIndexNow(urls, opts(fetchImpl, logger));
  assert.equal(calls.length, 1);
  assert.equal(result.ok, false);
});

test('network errors resolve instead of throwing, without leaking the key', async () => {
  const fetchImpl = (async () => { throw new Error(`connect failed ${KEY}`); }) as unknown as typeof fetch;
  const { lines, logger } = recorder();
  const result = await submitIndexNow([`${SITE}/a`], opts(fetchImpl, logger));
  assert.equal(result.ok, false);
  assert.doesNotMatch(lines.join('\n'), new RegExp(KEY));
});

test('missing or invalid key skips without a request', async () => {
  const { calls, fetchImpl } = mockFetch(200);
  const { logger } = recorder();
  for (const key of ['', 'short', 'has spaces in it!']) {
    const result = await submitIndexNow([`${SITE}/a`], { ...opts(fetchImpl, logger), key });
    assert.equal(result.ok, false);
    assert.ok(result.skippedReason);
  }
  assert.equal(calls.length, 0);
});

test('site URL comes from configuration, not a hardcoded domain', () => {
  assert.equal(resolveSiteUrl({ INDEXNOW_SITE_URL: 'https://a.test' }), 'https://a.test');
  assert.equal(resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: 'https://b.test' }), 'https://b.test');
  assert.equal(resolveSiteUrl({ VERCEL_PROJECT_PRODUCTION_URL: 'c.test' }), 'https://c.test');
  assert.equal(resolveSiteUrl({}), undefined);
});
