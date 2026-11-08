'use client';
import { useEffect } from 'react';
import { classifyContactHref, trackEvent } from '@/lib/analytics';

const EVENT_NAMES = {
  whatsapp: 'whatsapp_click',
  email: 'email_click',
  phone: 'phone_click',
} as const;

/**
 * Site-wide listener that sends a GA4 event whenever a visitor clicks a
 * WhatsApp, mailto: or tel: link — anywhere on the site, including links
 * added later. Mark these events as Key events in GA4 to count them as leads.
 *
 * Optional: add `data-cta="hero"` (etc.) to a link to report where it sits.
 */
export default function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const type = classifyContactHref(link.getAttribute('href') ?? '');
      if (!type) return;
      trackEvent(EVENT_NAMES[type], {
        page_path: window.location.pathname,
        link_location: link.dataset.cta ?? (link.closest('footer') ? 'footer' : 'page'),
      });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
