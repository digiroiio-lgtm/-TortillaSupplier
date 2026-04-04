import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogPosts from '@/data/blogPosts';
import { getAuthorByName } from '@/data/authors';

const BASE_URL = 'https://tortillasupplier.com';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${BASE_URL}/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishDate,
    },
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const authorProfile = getAuthorByName(post.author.name);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: { '@type': 'Organization', name: 'TortillaSupplier', url: BASE_URL },
      ...(authorProfile ? { url: `${BASE_URL}/author/${authorProfile.slug}`, sameAs: [authorProfile.linkedIn] } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: 'TortillaSupplier',
      url: BASE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${slug}` },
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="bg-white">
        {/* Article header */}
        <div className="border-b border-gray-100 py-14 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
              <span>›</span>
              <span className="text-gray-500 truncate max-w-[200px]">{post.title}</span>
            </nav>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime} min read
              </div>
              <span className="text-gray-200">·</span>
              <time dateTime={post.publishDate} className="text-xs text-gray-500">
                {formatDate(post.publishDate)}
              </time>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-6">{post.excerpt}</p>

            {/* Author chip */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#2d7a3a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  {authorProfile ? (
                    <Link
                      href={`/author/${authorProfile.slug}`}
                      className="text-xs font-semibold text-gray-900 leading-tight hover:text-[#2d7a3a] transition-colors"
                    >
                      {post.author.name}
                    </Link>
                  ) : (
                    <p className="text-xs font-semibold text-gray-900 leading-tight">{post.author.name}</p>
                  )}
                  <p className="text-xs text-gray-400 leading-tight">{post.author.role}</p>
                </div>
              </div>
              {post.reviewer && (
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold flex-shrink-0">
                    {post.reviewer.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900 leading-tight">
                      Reviewed by {post.reviewer.name}
                    </p>
                    <p className="text-xs text-gray-400 leading-tight">{post.reviewer.role}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="prose prose-gray max-w-none">
            {/* Introduction preamble */}
            <p className="text-base text-gray-600 leading-relaxed mb-10">
              {post.excerpt}
            </p>

            {post.sections.map((section, i) => (
              <section key={i} className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-3">{section.body}</p>
                {section.listItems && section.listItems.length > 0 && (
                  <ul className="space-y-2 mt-3">
                    {section.listItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-[#2d7a3a] mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.tableData && (
                  <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          {section.tableData.headers.map((header) => (
                            <th key={header} scope="col" className="text-left px-4 py-3 font-semibold text-gray-700 text-xs whitespace-nowrap">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {section.tableData.rows.map((row, rowIdx) => (
                          <tr key={rowIdx} className="bg-white hover:bg-gray-50 transition-colors">
                            {row.map((cell, cellIdx) => (
                              <td key={cellIdx} className={`px-4 py-3 text-xs ${cellIdx === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="mt-10 p-6 bg-gray-50 border border-gray-100 rounded-2xl">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Conclusion</h2>
              <p className="text-base text-gray-600 leading-relaxed">{post.conclusion}</p>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-xs text-gray-600 rounded-full capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* In-article CTA */}
          <div className="mt-12 p-8 bg-[#0a0a0a] rounded-2xl text-center">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">
              Get Started
            </p>
            <h3 className="text-xl font-bold text-white mb-2">
              Import Tortillas Directly from a Certified Manufacturer
            </h3>
            <p className="text-sm text-gray-400 mb-4 max-w-md mx-auto leading-relaxed">
              Our export team responds within 1–2 business days with pricing and sample availability.
            </p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-gray-500 mb-6">
              <li>✓ MOQ: 1 container</li>
              <li>✓ Private label available</li>
              <li>✓ Frozen or fresh supply</li>
              <li>✓ BRCGS · IFS · Halal certified</li>
            </ul>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                Request Distributor Pricing →
              </Link>
              <a
                href="https://wa.me/905531229372?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20tortilla%20supply.%20Could%20you%20send%20container%20pricing%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                WhatsApp Sales
              </a>
            </div>
          </div>

          {/* Related resources — internal links per post */}
          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Related Resources</h3>
              <div className="flex flex-wrap gap-2">
                {post.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-100 py-14">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <time dateTime={related.publishDate}>{formatDate(related.publishDate)}</time>
                      <span>·</span>
                      <span>{related.readTime} min read</span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2 group-hover:text-[#2d7a3a] transition-colors">
                      {related.title}
                    </h3>
                    <span className="mt-auto text-xs font-semibold text-[#2d7a3a] group-hover:underline">
                      Read article →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
