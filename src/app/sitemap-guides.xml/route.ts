import { NextResponse } from 'next/server';
import { BASELINE_REVISION, CONTENT_REVISION } from '@/data/contentRevision';

const BASE_URL = 'https://tortillasupplier.com';

function urlEntry(loc: string, lastmod: string, priority: string, changefreq = 'monthly') {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// Only the storage guide was rewritten in this cycle; the rest are unchanged
// since March and keep their real date rather than a blanket bump.
const guidePages = [
  { path: '/tortilla-guide', priority: '0.9', lastmod: BASELINE_REVISION },
  { path: '/tortilla-size-chart', priority: '0.9', lastmod: BASELINE_REVISION },
  { path: '/tortilla-manufacturing-process', priority: '0.8', lastmod: BASELINE_REVISION },
  { path: '/tortilla-shelf-life', priority: '0.8', lastmod: BASELINE_REVISION },
  { path: '/tortilla-calories', priority: '0.8', lastmod: BASELINE_REVISION },
  { path: '/how-to-store-tortillas', priority: '0.8', lastmod: CONTENT_REVISION },
  { path: '/our-factory', priority: '0.7', lastmod: BASELINE_REVISION },
  { path: '/certifications', priority: '0.8', lastmod: BASELINE_REVISION },
  { path: '/export-program', priority: '0.8', lastmod: BASELINE_REVISION },
  { path: '/about', priority: '0.7', lastmod: BASELINE_REVISION },
];

export function GET() {
  const entries = guidePages.map(({ path, priority, lastmod }) =>
    urlEntry(`${BASE_URL}${path}`, lastmod, priority)
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
