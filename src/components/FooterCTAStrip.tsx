'use client';

import Link from 'next/link';

function trackCta(label: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', {
      event_category: 'footer_cta',
      event_label: label,
    });
  }
}

export default function FooterCTAStrip() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/contact"
        onClick={() => trackCta('footer_distributor_pricing')}
        className="px-4 py-2 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm"
      >
        Request Distributor Pricing
      </Link>
      <Link
        href="/contact"
        onClick={() => trackCta('footer_request_samples')}
        className="px-4 py-2 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
      >
        Request Samples
      </Link>
      <Link
        href="/contact"
        onClick={() => trackCta('footer_contact_export')}
        className="px-4 py-2 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
      >
        Contact Export Team
      </Link>
    </div>
  );
}
