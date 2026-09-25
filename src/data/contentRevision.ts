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
//   * PAGE_REVISIONS     — static routes whose own content changed later.
//                          When you ship a real content change to a page (or
//                          create a new one, e.g. a market hub), add or bump
//                          its entry here. Never bump on a build that changed
//                          nothing; an always-current lastmod is as useless
//                          as a frozen one.
//   * updatedDate        — optional per-record field on seoPages and
//                          blogPosts for edits to a single landing page/post.

export const BASELINE_REVISION = '2026-03-31';
export const CONTENT_REVISION = '2026-09-05';

// Dates taken from each route's last content commit in git history.
const PAGE_REVISIONS: Record<string, string> = {
  '': CONTENT_REVISION,               // homepage: FAQ + schema + LCP work
  '/how-to-store-tortillas': CONTENT_REVISION,
  '/tortilla-supplier-usa': CONTENT_REVISION,
  '/blog': '2026-04-04',              // new post + listing changes
  '/contact': '2026-04-02',           // title rewrites
  '/export-program': '2026-04-02',
  '/frozen-tortilla-supplier': '2026-04-02',
  '/our-factory': '2026-04-02',
  '/tortilla-calories': '2026-04-02',
  '/tortilla-guide': '2026-04-02',
};

/** lastmod for a static route, e.g. '' (homepage) or '/about'. */
export function lastModFor(path: string): string {
  return PAGE_REVISIONS[path] ?? BASELINE_REVISION;
}

/** lastmod for a /[slug] landing page rendered by SEOLandingPage. */
export function landingPageLastMod(page: { updatedDate?: string }): string {
  return page.updatedDate ?? CONTENT_REVISION;
}

/** lastmod for a /blog/[slug] post: its last real edit, else publish date. */
export function blogPostLastMod(post: { publishDate: string; updatedDate?: string }): string {
  return (post.updatedDate ?? post.publishDate).slice(0, 10);
}
