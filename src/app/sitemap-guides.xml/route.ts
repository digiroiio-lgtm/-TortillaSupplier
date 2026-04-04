import { NextResponse } from 'next/server';

const BASE_URL = 'https://tortillasupplier.com';
const LAST_MODIFIED = '2026-03-31';

function urlEntry(loc: string, priority: string, changefreq = 'monthly') {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const guidePages = [
  { path: '/tortilla-guide', priority: '0.9' },
  { path: '/tortilla-size-chart', priority: '0.9' },
  { path: '/tortilla-manufacturing-process', priority: '0.8' },
  { path: '/tortilla-shelf-life', priority: '0.8' },
  { path: '/tortilla-calories', priority: '0.8' },
  { path: '/how-to-store-tortillas', priority: '0.8' },
  { path: '/our-factory', priority: '0.7' },
  { path: '/certifications', priority: '0.8' },
  { path: '/export-program', priority: '0.8' },
  { path: '/about', priority: '0.7' },
];

export function GET() {
  const entries = guidePages.map(({ path, priority }) =>
    urlEntry(`${BASE_URL}${path}`, priority)
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
