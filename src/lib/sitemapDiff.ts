// Compares two sitemaps (url → lastmod) to find what actually changed
// between deployments. Because every sitemap lastmod comes from the
// contentRevision.ts registry and only moves on a real content change, this
// diff is the change signal IndexNow is fed with.

export type SitemapMap = Record<string, string>;

export interface SitemapDiff {
  added: string[];
  updated: string[];
  removed: string[];
}

export function diffSitemaps(prev: SitemapMap, next: SitemapMap): SitemapDiff {
  const added: string[] = [];
  const updated: string[] = [];
  const removed: string[] = [];
  for (const [url, lastmod] of Object.entries(next)) {
    if (!(url in prev)) added.push(url);
    else if (prev[url] !== lastmod) updated.push(url);
  }
  for (const url of Object.keys(prev)) {
    if (!(url in next)) removed.push(url);
  }
  return { added: added.sort(), updated: updated.sort(), removed: removed.sort() };
}

/** Normalizes Next's MetadataRoute.Sitemap entries into url → YYYY-MM-DD. */
export function toSitemapMap(entries: ReadonlyArray<{ url: string; lastModified?: string | Date }>): SitemapMap {
  const map: SitemapMap = {};
  for (const { url, lastModified } of entries) {
    const date = lastModified instanceof Date ? lastModified.toISOString() : String(lastModified ?? '');
    map[url] = date.slice(0, 10);
  }
  return map;
}
