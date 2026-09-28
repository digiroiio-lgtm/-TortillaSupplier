// Notifies IndexNow about the URLs a production deployment actually changed.
//
// Content lives in git, so "page created / updated / deleted" is detected by
// diffing src/app/sitemap.ts between the previously deployed commit and the
// new one: a new URL was created, a moved lastmod means a real content
// update (contentRevision.ts only moves it on real changes), and a URL that
// left the sitemap was removed or redirected. Only those URLs are sent; the
// full sitemap is never resubmitted.
//
// Usage:
//   npm run indexnow                          # CI: DEPLOY_SHA + GitHub API
//   npm run indexnow -- --from <sha> --to <sha>
//   npm run indexnow -- --url <url> [--url <url> ...]
//   add --dry-run to print what would be sent without calling IndexNow
//
// Env: INDEXNOW_KEY (required to submit), INDEXNOW_SITE_URL (optional, else
// the origin of the sitemap URLs), INDEXNOW_ENDPOINT (optional). CI mode also
// reads DEPLOY_SHA, DEPLOY_ID, DEPLOY_ENVIRONMENT, GITHUB_REPOSITORY and
// GITHUB_TOKEN.
//
// Exit code is 0 whenever IndexNow itself fails: it is a best-effort hint
// and must never fail a deployment. Only CLI misuse exits non-zero.

import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { isValidKey, submitIndexNow } from '../src/lib/indexnow';
import { diffSitemaps, type SitemapMap } from '../src/lib/sitemapDiff';

const log = (m: string) => console.log(`[indexnow] ${m}`);
const REPO = resolve(import.meta.dirname, '..');
const require = createRequire(import.meta.url);

function parseArgs(argv: string[]) {
  const out = { from: '', to: '', urls: [] as string[], dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--from') out.from = argv[++i] ?? '';
    else if (a === '--to') out.to = argv[++i] ?? '';
    else if (a === '--url') out.urls.push(argv[++i] ?? '');
    else if (a === '--dry-run') out.dryRun = true;
    else {
      console.error(`Unknown argument: ${a}`);
      process.exit(2);
    }
  }
  return out;
}

function git(...args: string[]): string {
  return execFileSync('git', args, { cwd: REPO, encoding: 'utf8' }).trim();
}

/** url → lastmod of src/app/sitemap.ts as it was at `sha`. */
function sitemapAt(sha: string): SitemapMap {
  const dir = mkdtempSync(join(tmpdir(), 'indexnow-'));
  try {
    git('worktree', 'add', '--detach', '--force', dir, sha);
    const tsx = require.resolve('tsx');
    const loader = join(REPO, 'scripts', 'sitemap-snapshot.mts');
    const json = execFileSync(process.execPath, ['--import', tsx, loader, dir], {
      cwd: dir,
      encoding: 'utf8',
      env: { ...process.env, TSX_TSCONFIG_PATH: join(dir, 'tsconfig.json') },
    });
    return JSON.parse(json) as SitemapMap;
  } finally {
    try { git('worktree', 'remove', '--force', dir); } catch { rmSync(dir, { recursive: true, force: true }); }
  }
}

/** SHA of the last successful deployment to the same environment before this one. */
async function previousDeployedSha(): Promise<string | undefined> {
  const { GITHUB_REPOSITORY: repo, GITHUB_TOKEN: token, DEPLOY_ENVIRONMENT: environment, DEPLOY_ID: currentId } = process.env;
  if (!repo || !token || !environment) return undefined;
  const api = `https://api.github.com/repos/${repo}`;
  const headers = { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' };

  const res = await fetch(`${api}/deployments?environment=${encodeURIComponent(environment)}&per_page=30`, { headers });
  if (!res.ok) throw new Error(`GitHub deployments API: HTTP ${res.status}`);
  const deployments = (await res.json()) as Array<{ id: number; sha: string }>;

  for (const d of deployments) {
    if (String(d.id) === currentId) continue;
    const s = await fetch(`${api}/deployments/${d.id}/statuses?per_page=1`, { headers });
    if (!s.ok) continue;
    const [latest] = (await s.json()) as Array<{ state: string }>;
    if (latest?.state === 'success') return d.sha;
  }
  return undefined;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  let urls: string[] = args.urls;
  let siteUrl = process.env.INDEXNOW_SITE_URL || undefined;

  if (urls.length === 0) {
    const to = args.to || process.env.DEPLOY_SHA || 'HEAD';
    const from = args.from || (await previousDeployedSha());
    if (!from) {
      log('no previous successful deployment found; nothing submitted.');
      log('To seed IndexNow once, run: npm run indexnow -- --from <older-sha> --to <sha>');
      return;
    }
    const [prev, next] = [sitemapAt(from), sitemapAt(to)];
    const { added, updated, removed } = diffSitemaps(prev, next);
    log(`${from.slice(0, 7)} → ${to.slice(0, 7)}: ${added.length} added, ${updated.length} updated, ${removed.length} removed`);
    urls = [...added, ...updated, ...removed];
    // The sitemap's own URLs carry the canonical production origin.
    siteUrl ??= Object.keys(next).length ? new URL(Object.keys(next)[0]).origin : undefined;
  }

  if (urls.length === 0) {
    log('no changed URLs; nothing submitted.');
    return;
  }

  if (args.dryRun) {
    log(`dry run: would submit ${urls.length} URL(s) for ${siteUrl ?? '(site URL not configured)'}`);
    for (const u of urls) log(`  ${u}`);
    return;
  }

  // Engines verify the key by fetching it; submitting before the key file
  // is live only earns a 403, so check it first.
  const key = process.env.INDEXNOW_KEY;
  if (isValidKey(key) && siteUrl) {
    const origin = new URL(siteUrl).origin;
    const probe = await fetch(`${origin}/${key}.txt`).catch(() => undefined);
    const body = probe?.ok ? (await probe.text()).trim() : '';
    if (body !== key) {
      log(`key file ${origin}/<key>.txt is not live (HTTP ${probe?.status ?? 'error'}); nothing submitted. Set INDEXNOW_KEY in the hosting environment.`);
      return;
    }
  }

  const result = await submitIndexNow(urls, { siteUrl });
  log(`done: ${result.submitted} URL(s) accepted, ${result.rejected.length} rejected, ${result.ok ? 'ok' : 'not ok'}`);
}

main().catch((err) => {
  // Never fail the deployment pipeline because of IndexNow.
  console.error(`[indexnow] unexpected error: ${err instanceof Error ? err.message : String(err)}`);
});
