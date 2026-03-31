import { MetadataRoute } from 'next';
import seoPages from '@/data/seoPages';
import blogPosts from '@/data/blogPosts';
import authors from '@/data/authors';

const BASE_URL = 'https://tortillasupplier.com';
const LAST_MODIFIED = new Date('2026-03-31');

// Pillar pages: highest-value commercial landing pages
const PILLAR_SLUGS = new Set([
  'tortilla-supplier',
  'flour-tortilla-supplier',
  'corn-tortilla-supplier',
  'flatbread-supplier',
  'wrap-bread-supplier',
  'tortilla-wholesale',
  'frozen-flour-tortilla-supplier',
  'frozen-corn-tortilla-supplier',
]);

// Regional pages: dedicated pages for key geographic markets
const REGIONAL_SLUGS = new Set([
  'tortilla-supplier-spain',
  'tortilla-supplier-germany',
  'tortilla-supplier-france',
  'tortilla-supplier-netherlands',
  'tortilla-supplier-italy',
]);

// Support / long-tail pages: intent and distribution cluster pages
const SUPPORT_SLUGS = new Set([
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
  // Import / export cluster
  'tortilla-import-distributor',
  'frozen-tortilla-export',
  'tortilla-export-supplier',
  'container-tortilla-supply',
  // Foodservice cluster
  'restaurant-tortilla-supply',
  'qsr-tortilla-supplier',
  'catering-tortilla-supply',
  'bulk-tortilla-wraps',
  // Product type cluster
  'mexican-tortilla-supplier',
  'burrito-tortilla-supplier',
  'wrap-tortilla-supplier',
  'street-taco-tortilla-wholesale',
  'frying-tortilla-supplier',
  // Product size pages
  'flour-tortilla-30cm-12-inch',
  'flour-tortilla-25cm-10-inch',
  'flour-tortilla-20cm-8-inch',
  'corn-tortilla-15cm-6-inch',
  'corn-tortilla-20cm-8-inch',
  'tortilla-wrap-30cm-12-inch',
  'tortilla-wrap-25cm-10-inch',
  'flatbread-25cm-10-inch',
  'flatbread-30cm-12-inch',
  // Region expansion
  'tortilla-supplier-canada',
  'tortilla-supplier-australia',
  'tortilla-supplier-middle-east',
  'tortilla-supplier-uae',
  'tortilla-supplier-saudi-arabia',
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: LAST_MODIFIED, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/products`, lastModified: LAST_MODIFIED, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/contact`, lastModified: LAST_MODIFIED, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/blog`, lastModified: LAST_MODIFIED, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/tortilla-supplier-uk`, lastModified: LAST_MODIFIED, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/tortilla-supplier-usa`, lastModified: LAST_MODIFIED, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/tortilla-supplier-europe`, lastModified: LAST_MODIFIED, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/frozen-tortilla-supplier`, lastModified: LAST_MODIFIED, priority: 0.9, changeFrequency: 'monthly' },
    // Company pages
    { url: `${BASE_URL}/about`, lastModified: LAST_MODIFIED, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/our-factory`, lastModified: LAST_MODIFIED, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/certifications`, lastModified: LAST_MODIFIED, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/export-program`, lastModified: LAST_MODIFIED, priority: 0.8, changeFrequency: 'monthly' },
    // Legal pages
    { url: `${BASE_URL}/privacy-policy`, lastModified: LAST_MODIFIED, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/terms-of-service`, lastModified: LAST_MODIFIED, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/cookie-policy`, lastModified: LAST_MODIFIED, priority: 0.3, changeFrequency: 'yearly' },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  const dynamicPages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified: LAST_MODIFIED,
    priority: PILLAR_SLUGS.has(page.slug)
      ? 0.9
      : REGIONAL_SLUGS.has(page.slug)
        ? 0.8
        : SUPPORT_SLUGS.has(page.slug)
          ? 0.7
          : 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const authorPages: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${BASE_URL}/author/${author.slug}`,
    lastModified: LAST_MODIFIED,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...blogPages, ...authorPages, ...dynamicPages];
}
