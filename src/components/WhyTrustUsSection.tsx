import Link from 'next/link';

const trustPoints = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '1–2 Business Day Response',
    body: 'Our export team responds to all distributor and importer inquiries within 1–2 business days — including pricing, documentation, and sample requests.',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.75 7.5h16.5" />
      </svg>
    ),
    title: 'Samples in 3–5 Days',
    body: 'Product samples with full technical datasheets and allergen declarations are dispatched within 3–5 business days across the EU and UK.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Full Export Documentation',
    body: 'Every shipment includes health certificates, certificates of origin, allergen declarations, and technical datasheets — all prepared before dispatch.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      </svg>
    ),
    title: 'Private Label Manufacturing',
    body: 'Full private label service including custom packaging design, branded labelling and retail-ready formats. Available from 1 container per SKU.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: '20ft & 40ft Container Supply',
    body: 'Full container load (FCL) programmes for distributors at 20ft and 40ft. LCL groupage options also available for buyers scaling up from pallets.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: 'MOQ from 1 Pallet',
    body: 'Entry-level buyers can start with a single pallet and scale to full container programmes as distribution volumes grow — no lock-in required.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'Mixed-SKU Pallet Options',
    body: 'Combine flour, corn, frozen and flatbread formats across a single container or pallet shipment. Ideal for testing multiple SKUs before committing to full runs.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Export to UK, EU, USA & Middle East',
    body: 'Established container supply routes to the United Kingdom, Europe, North America, and the Middle East — with full import compliance documentation for each market.',
    highlight: false,
  },
];

export default function WhyTrustUsSection() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">
              Why Distributors Trust Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Built for Serious B2B Buyers
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              Every element of our supply model is designed to meet the expectations of importers, wholesale distributors, and foodservice procurement teams — from first inquiry to repeat container supply.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#2d7a3a] text-white text-sm font-semibold rounded-lg hover:bg-[#245f2d] transition-colors"
            >
              Request Distributor Pricing
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
            >
              Request Samples
            </Link>
          </div>
        </div>

        {/* Trust point grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className={`relative p-6 rounded-2xl border transition-all ${
                point.highlight
                  ? 'bg-[#2d7a3a] border-[#245f2d] text-white'
                  : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${
                  point.highlight
                    ? 'bg-white/15 text-white'
                    : 'bg-[#2d7a3a]/8 text-[#2d7a3a]'
                }`}
              >
                {point.icon}
              </div>
              <p
                className={`font-semibold text-sm mb-2 ${
                  point.highlight ? 'text-white' : 'text-gray-900'
                }`}
              >
                {point.title}
              </p>
              <p
                className={`text-xs leading-relaxed ${
                  point.highlight ? 'text-white/80' : 'text-gray-500'
                }`}
              >
                {point.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom microcopy */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400">
          {['BRCGS Certified', 'IFS Certified', 'ISO 22000', 'HACCP', 'Halal Available', 'Private Label Available'].map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-[#2d7a3a]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
