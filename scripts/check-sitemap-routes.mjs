// Fails the build when a static page is missing from the sitemap setup.
//
// lastModFor() in src/data/contentRevision.ts throws for an unregistered
// path, but only for paths the sitemap actually asks about. A new page.tsx
// that nobody added to src/app/sitemap.ts is never looked up, so it would
// ship unlisted. This script closes that gap by comparing the filesystem
// against both files:
//   * every static page.tsx route needs a PAGE_REVISIONS entry
//   * every static page.tsx route needs a URL in src/app/sitemap.ts
//   * every PAGE_REVISIONS entry needs a page.tsx (no stale dates)

import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const APP_DIR = 'src/app';
const REVISIONS_FILE = 'src/data/contentRevision.ts';
const SITEMAP_FILE = 'src/app/sitemap.ts';

function findPages(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === 'api' ? [] : findPages(full);
    return entry.name === 'page.tsx' ? [full] : [];
  });
}

// src/app/page.tsx → '', src/app/about/page.tsx → '/about'
const toRoute = (file) => {
  const dir = relative(APP_DIR, file).split(sep).slice(0, -1);
  return dir.length ? `/${dir.join('/')}` : '';
};

const routes = findPages(APP_DIR).map(toRoute);
const staticRoutes = routes.filter((r) => !r.includes('['));

const revisionsSrc = readFileSync(REVISIONS_FILE, 'utf8');
const registryBody = revisionsSrc.match(/const PAGE_REVISIONS[^{]*\{([\s\S]*?)\n\};/)?.[1];
if (!registryBody) {
  console.error(`check-sitemap: could not find PAGE_REVISIONS in ${REVISIONS_FILE}`);
  process.exit(1);
}
const registered = new Set([...registryBody.matchAll(/^\s*'([^']*)':/gm)].map((m) => m[1]));

const sitemapSrc = readFileSync(SITEMAP_FILE, 'utf8');
const inSitemap = (route) =>
  route === ''
    ? /url: BASE_URL,/.test(sitemapSrc)
    : sitemapSrc.includes('`${BASE_URL}' + route + '`');

const errors = [];
for (const route of staticRoutes) {
  const label = route || '/';
  if (!registered.has(route)) errors.push(`${label}: page exists but has no PAGE_REVISIONS entry in ${REVISIONS_FILE}`);
  if (!inSitemap(route)) errors.push(`${label}: page exists but is not listed in ${SITEMAP_FILE}`);
}
for (const key of registered) {
  if (!routes.includes(key)) errors.push(`${key || '/'}: PAGE_REVISIONS entry has no matching page.tsx (stale — remove it)`);
}

if (errors.length) {
  console.error('check-sitemap: sitemap is out of sync with src/app\n');
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`check-sitemap: ${staticRoutes.length} static routes registered and listed in the sitemap.`);
