// Fails the build when src/app and the sitemap registry disagree.
//
// Every sitemap generates its static URLs from STATIC_PAGES in
// src/data/contentRevision.ts, so a page missing from that registry would
// ship unlisted and without a lastmod. This script compares the filesystem
// against the registry:
//   * every static page.tsx route needs a STATIC_PAGES entry
//   * every STATIC_PAGES entry needs a page.tsx (no stale URLs)

import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const APP_DIR = 'src/app';
const REVISIONS_FILE = 'src/data/contentRevision.ts';

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
const registryBody = revisionsSrc.match(/const STATIC_PAGES[^{]*\{([\s\S]*?)\n\};/)?.[1];
if (!registryBody) {
  console.error(`check-sitemap: could not find STATIC_PAGES in ${REVISIONS_FILE}`);
  process.exit(1);
}
const registered = new Set([...registryBody.matchAll(/^\s*'([^']*)':/gm)].map((m) => m[1]));

const errors = [];
for (const route of staticRoutes) {
  const label = route || '/';
  if (!registered.has(route)) errors.push(`${label}: page exists but has no STATIC_PAGES entry in ${REVISIONS_FILE}`);
}
for (const key of registered) {
  if (!routes.includes(key)) errors.push(`${key || '/'}: STATIC_PAGES entry has no matching page.tsx (stale — remove it)`);
}

if (errors.length) {
  console.error('check-sitemap: sitemap is out of sync with src/app\n');
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`check-sitemap: ${staticRoutes.length} static routes registered in STATIC_PAGES.`);
