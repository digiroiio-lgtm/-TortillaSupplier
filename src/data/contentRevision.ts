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
//   * PAGE_REVISIONS     — one entry per static route. When you ship a real
//                          content change to a page, bump its entry; when you
//                          create one (e.g. a market hub), add it or the
//                          build fails. Never bump on a build that changed
//                          nothing; an always-current lastmod is as useless
//                          as a frozen one.
//   * updatedDate        — optional per-record field on seoPages and
//                          blogPosts for edits to a single landing page/post.

export const BASELINE_REVISION = '2026-03-31';
export const CONTENT_REVISION = '2026-09-05';

// Every static route must be listed here, even if it is unchanged since
// March. There is deliberately no fallback: an unlisted path throws, so a new
// page (e.g. a market hub) fails the build instead of silently shipping with
// a false "unchanged since March" date. scripts/check-sitemap-routes.mjs
// (run on prebuild) also fails when a page.tsx exists without an entry here
// or without a URL in src/app/sitemap.ts, and when an entry has no page.
//
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
  // Unchanged since the March baseline.
  '/about': BASELINE_REVISION,
  '/certifications': BASELINE_REVISION,
  '/cookie-policy': BASELINE_REVISION,
  '/privacy-policy': BASELINE_REVISION,
  '/products': BASELINE_REVISION,
  '/terms-of-service': BASELINE_REVISION,
  '/tortilla-manufacturing-process': BASELINE_REVISION,
  '/tortilla-shelf-life': BASELINE_REVISION,
  '/tortilla-size-chart': BASELINE_REVISION,
  '/tortilla-supplier-europe': BASELINE_REVISION,
  '/tortilla-supplier-uk': BASELINE_REVISION,
  // Dynamic templates.
  '/author/[slug]': BASELINE_REVISION,
};

/** lastmod for a static route, e.g. '' (homepage) or '/about'. */
export function lastModFor(path: string): string {
  const date = PAGE_REVISIONS[path];
  if (!date) {
    throw new Error(
      `No lastmod registered for "${path}" — add it to PAGE_REVISIONS in src/data/contentRevision.ts`,
    );
  }
  return date;
}

/** lastmod for an /author/[slug] page. */
export function authorPageLastMod(): string {
  return lastModFor('/author/[slug]');
}

/** lastmod for a /[slug] landing page rendered by SEOLandingPage. */
export function landingPageLastMod(page: { updatedDate?: string }): string {
  return page.updatedDate ?? CONTENT_REVISION;
}

/** lastmod for a /blog/[slug] post: its last real edit, else publish date. */
export function blogPostLastMod(post: { publishDate: string; updatedDate?: string }): string {
  return (post.updatedDate ?? post.publishDate).slice(0, 10);
}
