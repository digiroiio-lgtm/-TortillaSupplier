import type { Metadata } from 'next';
import Link from 'next/link';
import blogPosts from '@/data/blogPosts';

const BASE_URL = 'https://www.tortillasupplier.com';

export const metadata: Metadata = {
  title: 'Tortilla Supplier Blog | Wholesale & Import Guides',
  description:
    'Guides and insights for wholesale tortilla buyers, food importers and distributors. Topics include certifications, cold chain, private label and B2B sourcing.',
  openGraph: {
    title: 'Tortilla Supplier Blog | Wholesale & Import Guides',
    description:
      'Guides and insights for wholesale tortilla buyers, food importers and distributors.',
    url: `${BASE_URL}/blog`,
  },
  alternates: { canonical: `${BASE_URL}/blog` },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
  const [featured, ...rest] = sorted;

  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="border-b border-gray-100 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">
            Tortilla Supplier Blog
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3 max-w-2xl">
            Wholesale &amp; Import Guides for Distributors
          </h1>
          <p className="text-base text-gray-500 max-w-xl leading-relaxed">
            Practical guides on sourcing tortillas internationally — certifications, cold chain,
            private label, and distribution formats.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block mb-14"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
            {/* Placeholder visual */}
            <div className="bg-[#2d7a3a]/8 rounded-xl aspect-[16/9] flex items-center justify-center text-5xl">
              🌮
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest">
                  Featured
                </span>
                <span className="text-gray-200">·</span>
                <span className="text-xs text-gray-400">{featured.readTime} min read</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-3 group-hover:text-[#2d7a3a] transition-colors leading-snug">
                {featured.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{featured.author.name}</span>
                <span>·</span>
                <time dateTime={featured.publishDate}>{formatDate(featured.publishDate)}</time>
              </div>
            </div>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="bg-gray-50 rounded-xl aspect-[16/9] flex items-center justify-center text-4xl mb-5">
                🌯
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
                <span>·</span>
                <span>{post.readTime} min read</span>
              </div>
              <h2 className="text-base font-semibold text-gray-900 leading-snug mb-2 flex-1 group-hover:text-[#2d7a3a] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
              <span className="text-xs font-semibold text-[#2d7a3a] group-hover:underline">
                Read article →
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Looking to source tortillas for your distribution network?
          </p>
          <Link
            href="/contact"
            className="inline-flex px-6 py-3 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm"
          >
            Request Distributor Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
