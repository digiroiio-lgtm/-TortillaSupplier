import { NextResponse } from 'next/server';
import seoPages from '@/data/seoPages';

const BASE_URL = 'https://tortillasupplier.com';
const LAST_MODIFIED = '2026-03-31';

// Pillar and category-level commercial pages (not individual product size pages)
const CATEGORY_SLUGS = new Set([
  'tortilla-supplier',
  'flour-tortilla-supplier',
  'corn-tortilla-supplier',
  'flatbread-supplier',
  'wrap-bread-supplier',
  'tortilla-wholesale',
  'frozen-flour-tortilla-supplier',
  'frozen-corn-tortilla-supplier',
  'tortilla-distributor',
  'flour-tortilla-distributor',
  'corn-tortilla-distributor',
  'flour-tortilla-wholesale',
  'corn-tortilla-wholesale',
  'wrap-bread-wholesale',
  'lavash-flatbread-wholesale',
  'wrap-flatbread-supplier',
  'lavash-flatbread-supplier',
  'bulk-tortilla-supplier',
  'tortilla-wholesale-supplier',
  'private-label-tortilla-manufacturer',
  'tortilla-importer-supply',
  'tortilla-foodservice-supplier',
  'tortilla-import-distributor',
  'frozen-tortilla-export',
  'tortilla-export-supplier',
  'container-tortilla-supply',
  'restaurant-tortilla-supply',
  'qsr-tortilla-supplier',
  'catering-tortilla-supply',
  'bulk-tortilla-wraps',
  'mexican-tortilla-supplier',
  'burrito-tortilla-supplier',
  'wrap-tortilla-supplier',
  'street-taco-tortilla-wholesale',
  'frying-tortilla-supplier',
]);

// Regional pages
const REGIONAL_SLUGS = new Set([
  'tortilla-supplier-spain',
  'tortilla-supplier-germany',
  'tortilla-supplier-france',
  'tortilla-supplier-netherlands',
  'tortilla-supplier-italy',
  'tortilla-supplier-canada',
  'tortilla-supplier-australia',
  'tortilla-supplier-middle-east',
  'tortilla-supplier-uae',
  'tortilla-supplier-saudi-arabia',
]);

function urlEntry(loc: string, priority: string, changefreq = 'monthly') {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function GET() {
  // Static high-priority landing pages
  const staticEntries = [
    urlEntry(`${BASE_URL}/tortilla-supplier-uk`, '0.9'),
    urlEntry(`${BASE_URL}/tortilla-supplier-usa`, '0.9'),
    urlEntry(`${BASE_URL}/tortilla-supplier-europe`, '0.9'),
  ];

  const categoryEntries = seoPages
    .filter((p) => CATEGORY_SLUGS.has(p.slug))
    .map((p) => urlEntry(`${BASE_URL}/${p.slug}`, '0.9'));

  const regionalEntries = seoPages
    .filter((p) => REGIONAL_SLUGS.has(p.slug))
    .map((p) => urlEntry(`${BASE_URL}/${p.slug}`, '0.8'));

  const allEntries = [...staticEntries, ...categoryEntries, ...regionalEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
