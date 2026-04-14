'use client';

import Link from 'next/link';

const certifications = [
  {
    abbr: 'BRCGS',
    name: 'BRCGS Global Food Safety',
    description: 'Grade A certification — required by major UK and EU supermarket chains for supply chain approval.',
  },
  {
    abbr: 'IFS',
    name: 'IFS Food Standard',
    description: 'International Featured Standard accepted by major European retailers and foodservice operators.',
  },
  {
    abbr: 'ISO',
    name: 'ISO 22000 / HACCP',
    description: 'Internationally recognised food safety management system covering the full production and supply chain.',
  },
  {
    abbr: 'HALAL',
    name: 'Halal Certified',
    description: 'Halal certification available on request for all product lines with full documentation supplied.',
  },
];

const guarantees = [
  'Response within 1–2 business days',
  'Sample delivery in 3–5 days (EU & UK)',
  'Full export documentation included',
  'Private label manufacturing available',
  '20ft & 40ft container supply',
  'MOQ from 1 full pallet',
  'Export to UK, EU, USA & Middle East',
  'Mixed-SKU pallets available on request',
];

const stats = [
  { value: '10+', label: 'Years in production' },
  { value: '30+', label: 'Export markets supplied' },
  { value: '4', label: 'Active food safety certifications' },
  { value: '1–2', label: 'Business day response time' },
];

function trackCta(label: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', {
      event_category: 'trust_signals',
      event_label: label,
    });
  }
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#2d7a3a] flex-shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function TrustSignalsSection() {
  return (
    <section className="py-24 bg-[#f8faf8] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">
            Why Distributors Trust Us
          </p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">
            Certified. Documented. Reliable.
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Every shipment leaves our factory with full food safety certification, export documentation
            and consistent quality — so distributors can onboard us with zero compliance risk.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-gray-900 tracking-tight mb-1">{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Two-column: certifications + guarantees */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Certifications */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
              Food Safety Certifications
            </p>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.abbr}
                  className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#2d7a3a]/10 border border-[#2d7a3a]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-[#2d7a3a] leading-none tracking-wide">
                      {cert.abbr}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">{cert.name}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/certifications"
                onClick={() => trackCta('view_certifications')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2d7a3a] hover:underline"
              >
                View all certifications
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Buyer guarantees */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
              What Distributors Get
            </p>
            <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
              <ul className="space-y-4">
                {guarantees.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-gray-700 leading-snug">{g}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  onClick={() => trackCta('get_distributor_pricing')}
                  className="px-5 py-2.5 bg-[#2d7a3a] text-white text-sm font-semibold rounded-lg hover:bg-[#245f2d] transition-colors"
                >
                  Get Distributor Pricing
                </Link>
                <Link
                  href="/contact"
                  onClick={() => trackCta('request_samples')}
                  className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
                >
                  Request Samples
                </Link>
                <a
                  href="https://wa.me/905531229372?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20tortilla%20supply.%20Could%20you%20send%20container%20pricing%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCta('whatsapp_trust_section')}
                  className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
                >
                  WhatsApp Sales
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
