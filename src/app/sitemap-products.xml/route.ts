import { NextResponse } from 'next/server';
import seoPages from '@/data/seoPages';
import { landingPageLastMod, staticPagesIn } from '@/data/contentRevision';

const BASE_URL = 'https://tortillasupplier.com';

// Product size pages from seoPages
const PRODUCT_SLUGS = new Set([
  'flour-tortilla-30cm-12-inch',
  'flour-tortilla-25cm-10-inch',
  'flour-tortilla-20cm-8-inch',
  'corn-tortilla-15cm-6-inch',
  'corn-tortilla-20cm-8-inch',
  'tortilla-wrap-30cm-12-inch',
  'tortilla-wrap-25cm-10-inch',
  'flatbread-25cm-10-inch',
  'flatbread-30cm-12-inch',
]);

function urlEntry(loc: string, lastmod: string, priority: string, changefreq = 'monthly') {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function GET() {
  const staticProductPages = staticPagesIn('products').map(([path, page]) =>
    urlEntry(`${BASE_URL}${path}`, page.lastmod, page.priority.toFixed(1), page.changefreq),
  );

  const dynamicProductPages = seoPages
    .filter((p) => PRODUCT_SLUGS.has(p.slug))
    .map((p) => urlEntry(`${BASE_URL}/${p.slug}`, landingPageLastMod(p), '0.8'));

  const allEntries = [...staticProductPages, ...dynamicProductPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
