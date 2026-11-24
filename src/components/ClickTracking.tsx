'use client';

import { useEffect } from 'react';

// Sends GA4 events for the actions that matter to a B2B enquiry funnel but
// are not form submissions: WhatsApp, email and phone clicks, and clicks on
// links that lead to the contact page. One delegated listener on the
// document covers every link on every page (including the footer, floating
// WhatsApp button and links added later), so no per-link wiring is needed.
//
// Events: whatsapp_click, email_click, phone_click, cta_click, plus the
// named groups below (buyer_pathway_click, guide_link_click, article_link_click)
// for any block marked with a data-track attribute.
// Mark the ones you care about as key events in GA4 (Admin > Events).
// No personal data is sent: the email address or phone number itself is
// never included, only the page, the link text and where on the page it sat.

function locationOf(el: Element): string {
  if (el.closest('footer')) return 'footer';
  if (el.closest('nav') || el.closest('header')) return 'header';
  if (el.closest('main')) return 'content';
  return 'other';
}

export default function ClickTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (typeof window.gtag !== 'function') return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a');
      if (!anchor) return;
      const raw = anchor.getAttribute('href');
      if (!raw) return;

      const params = {
        page_path: window.location.pathname,
        link_text: (anchor.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 60),
        link_location: locationOf(anchor),
      };

      let eventName: string | null = null;
      if (raw.startsWith('mailto:')) {
        eventName = 'email_click';
      } else if (raw.startsWith('tel:')) {
        eventName = 'phone_click';
      } else {
        let url: URL;
        try {
          url = new URL(raw, window.location.origin);
        } catch {
          return;
        }
        const group = anchor.closest('[data-track]')?.getAttribute('data-track');
        if (url.hostname === 'wa.me' || url.hostname.endsWith('whatsapp.com')) {
          eventName = 'whatsapp_click';
        } else if (url.origin === window.location.origin && url.pathname === '/contact') {
          eventName = 'cta_click';
        } else if (group && url.origin === window.location.origin) {
          // Marked link groups (buyer pathways, guides, related articles):
          // lets GA4 show which pages and blocks actually send buyers onward.
          eventName = group;
          Object.assign(params, { link_url: url.pathname });
        }
      }
      if (eventName) window.gtag('event', eventName, params);
    }

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
