import { MetadataRoute } from 'next';
import seoPages from '@/data/seoPages';
import blogPosts from '@/data/blogPosts';

const BASE_URL = 'https://www.tortillasupplier.com';
const LAST_MODIFIED = new Date('2025-01-01');

// Pillar pages get boosted priority; long-tail support/intent pages get 0.7
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
    priority: PILLAR_SLUGS.has(page.slug) ? 0.9 : SUPPORT_SLUGS.has(page.slug) ? 0.7 : 0.8,
    changeFrequency: 'monthly',
  }));

  return [...staticPages, ...blogPages, ...dynamicPages];
}
