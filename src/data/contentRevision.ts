// Single source of truth for sitemap <lastmod> values.
//
// The site publishes five sitemaps (sitemap.xml plus the products, guides,
// categories and blog sitemaps) and each of them previously hard-coded its
// own '2026-03-31' string. They drifted out of date together: content shipped
// through August and September 2026 while every sitemap kept telling Google
// nothing had been touched since March, which is a wasted crawl signal on a
// property this new. They also disagreed with each other: /products was
// 2026-03-31 in sitemap.xml and 2026-09-05 in sitemap-products.xml.
//
// Google only uses <lastmod> when it is "consistently and verifiably
// accurate", so every sitemap must resolve dates through the helpers below
// and never declare its own.
//
// Keep the dates honest:
//   * BASELINE_REVISION  — pages that really have not changed since March.
//   * CONTENT_REVISION   — the last change to the shared SEOLandingPage
//                          template, which every /[slug] page inherits.
//   * STATIC_PAGES       — one line per static route. When you ship a real
//                          content change to a page, bump its lastmod; when
//                          you create one (e.g. a market hub), add its line
//                          or the build fails. Never bump on a build that changed
//                          nothing; an always-current lastmod is as useless
//                          as a frozen one.
//   * updatedDate        — optional per-record field on seoPages and
//                          blogPosts for edits to a single landing page/post.

export const BASELINE_REVISION = '2026-03-31';
export const CONTENT_REVISION = '2026-09-05';

// One line per static route. The sitemaps are generated from this registry,
// so adding a page (e.g. a market hub) means adding exactly one line here:
// sitemap.xml lists it, and `group` also puts it in that sub-sitemap.
// scripts/check-sitemap-routes.mjs (run on prebuild) fails the build when a
// page.tsx has no entry here, or an entry has no page.tsx.
//
// lastmod values come from each route's last content commit in git history.
export type SitemapGroup = 'products' | 'guides' | 'categories' | 'blog';

export interface StaticPage {
  lastmod: string;
  priority: number;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  /** Sub-sitemap this page is also listed in, besides sitemap.xml. */
  group?: SitemapGroup;
}

export const STATIC_PAGES: Record<string, StaticPage> = {
  '': { lastmod: CONTENT_REVISION, priority: 1.0, changefreq: 'weekly' }, // FAQ + schema + LCP work
  '/products': { lastmod: BASELINE_REVISION, priority: 0.8, changefreq: 'weekly', group: 'products' },
  '/frozen-tortilla-supplier': { lastmod: '2026-04-02', priority: 0.9, changefreq: 'monthly', group: 'products' },
  '/contact': { lastmod: '2026-04-02', priority: 0.8, changefreq: 'monthly' },
  '/blog': { lastmod: '2026-04-04', priority: 0.8, changefreq: 'weekly', group: 'blog' },
  // Market pages
  '/tortilla-supplier-uk': { lastmod: BASELINE_REVISION, priority: 0.9, changefreq: 'monthly', group: 'categories' },
  '/tortilla-supplier-usa': { lastmod: CONTENT_REVISION, priority: 0.9, changefreq: 'monthly', group: 'categories' },
  '/tortilla-supplier-europe': { lastmod: BASELINE_REVISION, priority: 0.9, changefreq: 'monthly', group: 'categories' },
  // Company pages
  '/about': { lastmod: BASELINE_REVISION, priority: 0.8, changefreq: 'monthly', group: 'guides' },
  '/our-factory': { lastmod: '2026-04-02', priority: 0.7, changefreq: 'monthly', group: 'guides' },
  '/certifications': { lastmod: BASELINE_REVISION, priority: 0.8, changefreq: 'monthly', group: 'guides' },
  '/export-program': { lastmod: '2026-04-02', priority: 0.8, changefreq: 'monthly', group: 'guides' },
  // Authority and guide content
  '/tortilla-size-chart': { lastmod: BASELINE_REVISION, priority: 0.9, changefreq: 'monthly', group: 'guides' },
  '/tortilla-manufacturing-process': { lastmod: BASELINE_REVISION, priority: 0.8, changefreq: 'monthly', group: 'guides' },
  '/tortilla-guide': { lastmod: '2026-04-02', priority: 0.9, changefreq: 'monthly', group: 'guides' },
  '/tortilla-shelf-life': { lastmod: BASELINE_REVISION, priority: 0.8, changefreq: 'monthly', group: 'guides' },
  '/tortilla-calories': { lastmod: '2026-04-02', priority: 0.8, changefreq: 'monthly', group: 'guides' },
  '/how-to-store-tortillas': { lastmod: CONTENT_REVISION, priority: 0.8, changefreq: 'monthly', group: 'guides' },
  // Legal pages
  '/privacy-policy': { lastmod: BASELINE_REVISION, priority: 0.3, changefreq: 'yearly' },
  '/terms-of-service': { lastmod: BASELINE_REVISION, priority: 0.3, changefreq: 'yearly' },
  '/cookie-policy': { lastmod: BASELINE_REVISION, priority: 0.3, changefreq: 'yearly' },
};

/** Static pages that also belong in the given sub-sitemap, as [path, page]. */
export function staticPagesIn(group: SitemapGroup): Array<[string, StaticPage]> {
  return Object.entries(STATIC_PAGES).filter(([, page]) => page.group === group);
}

// Last change to the /author/[slug] template.
const AUTHOR_TEMPLATE_REVISION = BASELINE_REVISION;

/** lastmod for an /author/[slug] page. */
export function authorPageLastMod(): string {
  return AUTHOR_TEMPLATE_REVISION;
}

/** lastmod for a /[slug] landing page rendered by SEOLandingPage. */
export function landingPageLastMod(page: { updatedDate?: string }): string {
  return page.updatedDate ?? CONTENT_REVISION;
}

/** lastmod for a /blog/[slug] post: its last real edit, else publish date. */
export function blogPostLastMod(post: { publishDate: string; updatedDate?: string }): string {
  return (post.updatedDate ?? post.publishDate).slice(0, 10);
}
