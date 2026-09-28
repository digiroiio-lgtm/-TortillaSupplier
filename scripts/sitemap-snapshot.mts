// Prints src/app/sitemap.ts of a checkout as JSON (url → YYYY-MM-DD).
// Run by indexnow-deploy.mts inside a git worktree of an older commit:
//   node --import tsx scripts/sitemap-snapshot.mts <checkout-dir>

import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { toSitemapMap } from '../src/lib/sitemapDiff';

const dir = process.argv[2];
if (!dir) {
  console.error('Usage: sitemap-snapshot.mts <checkout-dir>');
  process.exit(2);
}

const mod = await import(pathToFileURL(join(dir, 'src/app/sitemap.ts')).href);
const sitemap = mod.default?.default ?? mod.default;
process.stdout.write(JSON.stringify(toSitemapMap(await sitemap())));
