import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import authors from '@/data/authors';
import blogPosts from '@/data/blogPosts';

const BASE_URL = 'https://tortillasupplier.com';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) return {};
  return {
    title: `${author.name} — ${author.jobTitle} | TortillaSupplier`,
    description: author.bio,
    alternates: { canonical: `${BASE_URL}/author/${slug}` },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) notFound();

  const authorPosts = blogPosts.filter((p) => p.author.name === author.name);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: 'TortillaSupplier',
      url: BASE_URL,
    },
    url: `${BASE_URL}/author/${author.slug}`,
    sameAs: [author.linkedIn],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="bg-white">
        {/* Author header */}
        <div className="border-b border-gray-100 py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
              <span>›</span>
              <span className="text-gray-500">{author.name}</span>
            </nav>

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-[#2d7a3a] flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                {author.initials}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
                  {author.name}
                </h1>
                <p className="text-sm text-[#2d7a3a] font-semibold mt-1">{author.jobTitle}</p>
              </div>
            </div>

            <p className="mt-6 text-base text-gray-600 leading-relaxed">{author.bio}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {author.expertise.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-white border border-gray-200 text-xs text-gray-600 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Articles by this author */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Articles by {author.name}
          </h2>

          {authorPosts.length === 0 ? (
            <p className="text-sm text-gray-500">No articles yet.</p>
          ) : (
            <div className="space-y-4">
              {authorPosts
                .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
                .map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
                        <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
                        <span>·</span>
                        <span>{post.readTime} min read</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-[#2d7a3a] transition-colors mb-1">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    </div>
                    <span className="text-xs font-semibold text-[#2d7a3a] flex-shrink-0 self-end sm:self-center group-hover:underline">
                      Read →
                    </span>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
