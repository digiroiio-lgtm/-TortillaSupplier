import { NextResponse } from 'next/server';
import blogPosts from '@/data/blogPosts';
import authors from '@/data/authors';
import { authorPageLastMod, blogPostLastMod, staticPagesIn } from '@/data/contentRevision';

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
  const blogIndexEntries = staticPagesIn('blog').map(([path, page]) =>
    urlEntry(`${BASE_URL}${path}`, page.lastmod, page.priority.toFixed(1), page.changefreq),
  );

  const postEntries = blogPosts.map((post) =>
    urlEntry(
      `${BASE_URL}/blog/${post.slug}`,
      blogPostLastMod(post),
      '0.7'
    )
  );

  const authorEntries = authors.map((author) =>
    urlEntry(`${BASE_URL}/author/${author.slug}`, authorPageLastMod(), '0.6')
  );

  const allEntries = [...blogIndexEntries, ...postEntries, ...authorEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
