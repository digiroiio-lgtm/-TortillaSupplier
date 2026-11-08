/**
 * Thin wrapper around GA4 gtag so components can fire events safely
 * (no-op during SSR or when gtag has not loaded / is blocked).
 *
 * Never pass personal data (names, emails, phone numbers) as params —
 * Google Analytics terms prohibit PII.
 */
export function trackEvent(name: string, params: Record<string, string | number> = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

export type ContactLinkType = 'whatsapp' | 'email' | 'phone';

/** Classify an href as a direct-contact link, or null if it is not one. */
export function classifyContactHref(href: string): ContactLinkType | null {
  const h = href.trim().toLowerCase();
  if (h.startsWith('mailto:')) return 'email';
  if (h.startsWith('tel:')) return 'phone';
  if (
    h.startsWith('https://wa.me/') ||
    h.startsWith('https://api.whatsapp.com/') ||
    h.startsWith('whatsapp:')
  ) {
    return 'whatsapp';
  }
  return null;
}
