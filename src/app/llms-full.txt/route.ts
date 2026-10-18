import { NextResponse } from 'next/server';
import { products } from '@/data/products';
import seoPages from '@/data/seoPages';
import blogPosts from '@/data/blogPosts';

// /llms-full.txt — the long-form companion to /llms.txt: the full text of the
// site's commercial pages, product specifications and articles in one
// plain-text file, so answer engines can quote us without crawling each page.
const BASE_URL = 'https://tortillasupplier.com';

function buildBody(): string {
  const out: string[] = [
    '# TortillaSupplier — full content',
    '',
    '> BRCGS-certified wholesale tortilla manufacturer supplying flour, corn and frozen tortillas to distributors, importers and foodservice operators. Private label production available. Container supply (20ft and 40ft). Short index: ' + BASE_URL + '/llms.txt',
    '',
    '## Product specifications',
    '',
    ...products.map(
      (p) =>
        `- ${p.name}: ${p.description} ${p.weightG}g, ${p.packCount} per case, ${p.palletCases} cases per pallet, ${p.storageType}, shelf life ${p.shelfLife}, private label ${p.privateLabelAvailable ? 'available' : 'not available'}.`,
    ),
    '',
    '## Pages',
  ];

  for (const page of seoPages) {
    out.push('', `### ${page.heroTitle}`, `URL: ${BASE_URL}/${page.slug}`, '', page.heroSubtitle, '', `#### ${page.introHeading}`, '', ...page.introParagraphs.flatMap((t) => [t, '']));
    if (page.features.length) out.push(...page.features.map((f) => `- ${f.title}: ${f.description}`), '');
    if (page.faqs.length) out.push('Frequently asked questions', '', ...page.faqs.flatMap((f) => [`Q: ${f.question}`, `A: ${f.answer}`, '']));
  }

  out.push('## Articles');
  for (const post of blogPosts) {
    out.push('', `### ${post.title}`, `URL: ${BASE_URL}/blog/${post.slug}`, `Published: ${post.publishDate}${post.updatedDate ? ` · Updated: ${post.updatedDate}` : ''}`, '', post.excerpt, '');
    for (const s of post.sections) {
      out.push(`#### ${s.heading}`, '', s.body, '');
      if (s.listItems?.length) out.push(...s.listItems.map((i) => `- ${i}`), '');
      if (s.tableData) out.push(s.tableData.headers.join(' | '), ...s.tableData.rows.map((r) => r.join(' | ')), '');
    }
    out.push(post.conclusion, '');
  }
  return out.join('\n');
}

const body = buildBody();

export const dynamic = 'force-static';

export function GET() {
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
