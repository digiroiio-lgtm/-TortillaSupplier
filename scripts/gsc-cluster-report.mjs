// Turns a Google Search Console "Pages" export into merge/redirect decisions
// for the landing-page clusters that compete for the same search intent.
//
// Usage:
//   node scripts/gsc-cluster-report.mjs <Pages.csv> --days <N>
//
// Export: Search Console → Performance → Search results → pick the date
// range → Pages tab → Export → "Download CSV" (the zip holds Pages.csv with
// columns Top pages, Clicks, Impressions, CTR, Position). Pass the number of
// days the range covered; under 56 days the report warns that zero
// impressions may just mean "not crawled yet".
//
// The report only proposes. A page-level export cannot show which queries a
// page ranks for, so any sibling with impressions is marked REVIEW, not
// redirected: check its queries in Search Console before merging it.

import { readFileSync } from 'node:fs';

const MIN_DAYS = 56;

// Pages that serve one search intent. The first slug is the intended hub.
const CLUSTERS = {
  'Generic supplier': ['tortilla-supplier', 'tortilla-wholesale', 'tortilla-wholesale-supplier', 'bulk-tortilla-supplier', 'tortilla-distributor'],
  'Flour tortillas': ['flour-tortilla-supplier', 'flour-tortilla-wholesale', 'flour-tortilla-distributor'],
  'Corn tortillas': ['corn-tortilla-supplier', 'corn-tortilla-wholesale', 'corn-tortilla-distributor'],
  'Wraps': ['wrap-tortilla-supplier', 'wrap-bread-supplier', 'wrap-flatbread-supplier', 'wrap-bread-wholesale', 'bulk-tortilla-wraps'],
  'Flatbread / lavash': ['flatbread-supplier', 'lavash-flatbread-supplier', 'lavash-flatbread-wholesale'],
  'Import / export': ['tortilla-export-supplier', 'tortilla-importer-supply', 'tortilla-import-distributor', 'frozen-tortilla-export', 'container-tortilla-supply'],
};

const args = process.argv.slice(2);
const csvPath = args.find((a) => !a.startsWith('--'));
const daysArg = args.indexOf('--days');
const days = daysArg >= 0 ? Number(args[daysArg + 1]) : NaN;
if (!csvPath || !Number.isFinite(days)) {
  console.error('Usage: node scripts/gsc-cluster-report.mjs <Pages.csv> --days <N>');
  process.exit(1);
}

// Fail loudly if a cluster names a slug that no longer exists.
const seoSrc = readFileSync('src/data/seoPages.ts', 'utf8');
const missing = Object.values(CLUSTERS).flat().filter((s) => !seoSrc.includes(`slug: '${s}'`));
if (missing.length) {
  console.error(`Unknown slugs in CLUSTERS (update this script): ${missing.join(', ')}`);
  process.exit(1);
}

// Minimal CSV parser: GSC exports quote fields that contain commas.
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((f) => f.trim()));
}

const [header, ...data] = parseCsv(readFileSync(csvPath, 'utf8').replace(/^﻿/, ''));
const col = (name) => header.findIndex((h) => h.trim().toLowerCase() === name);
const iPage = col('top pages') >= 0 ? col('top pages') : col('page');
const iClicks = col('clicks');
const iImpr = col('impressions');
const iPos = col('position');
if ([iPage, iClicks, iImpr, iPos].some((i) => i < 0)) {
  console.error(`Unexpected columns: ${header.join(', ')} (need Top pages, Clicks, Impressions, Position)`);
  process.exit(1);
}

const stats = new Map();
for (const r of data) {
  const path = new URL(r[iPage]).pathname.replace(/\/$/, '').replace(/^\//, '');
  stats.set(path, { clicks: Number(r[iClicks]) || 0, impressions: Number(r[iImpr]) || 0, position: Number(r[iPos]) || null });
}
const get = (slug) => stats.get(slug) ?? { clicks: 0, impressions: 0, position: null };

console.log(`# Cluster consolidation report (${days}-day window)\n`);
if (days < MIN_DAYS) {
  console.log(`> WARNING: under ${MIN_DAYS} days of data. Zero impressions may mean "not crawled yet"; do not redirect on this report.\n`);
}

for (const [name, slugs] of Object.entries(CLUSTERS)) {
  const ranked = [...slugs].sort((a, b) => get(b).clicks - get(a).clicks || get(b).impressions - get(a).impressions);
  const hub = get(ranked[0]).impressions > 0 ? ranked[0] : slugs[0];
  console.log(`## ${name}\n`);
  if (hub !== slugs[0]) {
    console.log(`Data favours /${hub} over the intended hub /${slugs[0]}; consolidate into the page Google already prefers.\n`);
  }
  console.log('| URL | Clicks | Impressions | Avg pos | Action |');
  console.log('|---|---|---|---|---|');
  for (const slug of ranked) {
    const s = get(slug);
    const action = slug === hub
      ? 'HUB: keep, enrich, receive redirects'
      : s.impressions === 0
        ? `301 → /${hub}`
        : 'REVIEW: check its queries before merging';
    console.log(`| /${slug} | ${s.clicks} | ${s.impressions} | ${s.position ?? '–'} | ${action} |`);
  }
  console.log('');
}
