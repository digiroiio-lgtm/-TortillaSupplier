import { MetadataRoute } from 'next';
import seoPages from '@/data/seoPages';

const BASE_URL = 'https://www.tortillasupplier.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/products`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/tortilla-supplier-uk`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/tortilla-supplier-usa`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/tortilla-supplier-europe`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/frozen-tortilla-supplier`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
  ];

  const dynamicPages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: 'monthly',
  }));

  return [...staticPages, ...dynamicPages];
}
