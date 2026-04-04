import { NextResponse } from 'next/server';
import blogPosts from '@/data/blogPosts';
import authors from '@/data/authors';

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
  const blogIndexEntry = urlEntry(`${BASE_URL}/blog`, '2026-03-31', '0.8', 'weekly');

  const postEntries = blogPosts.map((post) =>
    urlEntry(
      `${BASE_URL}/blog/${post.slug}`,
      post.publishDate.slice(0, 10),
      '0.7'
    )
  );

  const authorEntries = authors.map((author) =>
    urlEntry(`${BASE_URL}/author/${author.slug}`, '2026-03-31', '0.6')
  );

  const allEntries = [blogIndexEntry, ...postEntries, ...authorEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
