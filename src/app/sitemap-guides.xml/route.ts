import { NextResponse } from 'next/server';
import { staticPagesIn } from '@/data/contentRevision';

const BASE_URL = 'https://tortillasupplier.com';

function urlEntry(loc: string, lastmod: string, priority: string, changefreq = 'monthly') {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function GET() {
  const entries = staticPagesIn('guides').map(([path, page]) =>
    urlEntry(`${BASE_URL}${path}`, page.lastmod, page.priority.toFixed(1), page.changefreq),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
