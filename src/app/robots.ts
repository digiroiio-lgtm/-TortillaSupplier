import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: [
      'https://tortillasupplier.com/sitemap.xml',
      'https://tortillasupplier.com/sitemap-products.xml',
      'https://tortillasupplier.com/sitemap-guides.xml',
      'https://tortillasupplier.com/sitemap-categories.xml',
      'https://tortillasupplier.com/sitemap-blog.xml',
    ],
  };
}
