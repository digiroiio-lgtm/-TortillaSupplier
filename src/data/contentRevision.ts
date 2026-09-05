// Single source of truth for sitemap <lastmod> values.
//
// The site publishes five sitemaps (sitemap.xml plus the products, guides,
// categories and blog sitemaps) and each of them previously hard-coded its
// own '2026-03-31' string. They drifted out of date together: content shipped
// through August and September 2026 while every sitemap kept telling Google
// nothing had been touched since March, which is a wasted crawl signal on a
// property this new.
//
// Keep both dates honest:
//   * BASELINE_REVISION  — pages that really have not changed since March.
//   * CONTENT_REVISION   — bump when you ship a real content or template
//                          change, and never on a build that changed nothing.
//     An always-current lastmod is as useless as a frozen one.

export const BASELINE_REVISION = '2026-03-31';
export const CONTENT_REVISION = '2026-09-05';
