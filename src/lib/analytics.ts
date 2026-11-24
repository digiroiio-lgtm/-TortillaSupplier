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

