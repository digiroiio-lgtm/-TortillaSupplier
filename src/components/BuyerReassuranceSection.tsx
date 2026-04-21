import Link from 'next/link';

const reassurancePoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    category: 'Retail Compliance',
    title: 'Supermarket & Retail Approved',
    body: 'Production certified to BRCGS Global Food Safety and IFS Food standards — the benchmarks required for supply to major UK and European supermarket chains, discount retailers, and food wholesale groups.',
    link: { label: 'View Certifications', href: '/certifications' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    category: 'Documentation',
    title: 'Documentation Ready Before Dispatch',
    body: 'Health certificates, certificates of origin, allergen declarations, ingredient specifications, and customs paperwork are all prepared and supplied before each shipment — reducing import friction for your logistics and compliance teams.',
    link: { label: 'Export Programme', href: '/export-program' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    category: 'Product Consistency',
    title: 'Every Container Matches the Sample',
    body: 'Batch production controls and laboratory testing ensure every commercial container order matches the product specification agreed at the sample stage. Consistent diameter, weight, texture, and packaging — essential for retail planograms and foodservice standards.',
    link: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    category: 'Private Label',
    title: 'End-to-End Private Label Service',
    body: 'From packaging artwork and label design to final branded production, our private label team manages the full process. Labels are produced to meet the regulatory requirements of the UK, EU, USA, and Middle East markets from a single production run.',
    link: { label: 'Private Label Info', href: '/private-label-tortilla-manufacturer' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    category: 'Cold Chain',
    title: 'Frozen & Chilled Supply Capability',
    body: 'Frozen tortillas stored at −18°C with shelf life up to 12 months, enabling efficient long-haul container distribution. Chilled formats with 14–21 day shelf life are available for regional and domestic distribution programmes.',
    link: { label: 'Frozen Tortilla Supply', href: '/frozen-tortilla-supplier' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    category: 'Margin Planning',
    title: 'Quarterly Pricing for Margin Stability',
    body: 'Fixed quarterly pricing programmes protect distributor margins against raw material volatility. Our pricing model is designed to support reliable retail and foodservice margin planning, with transparent cost-per-unit breakdowns at container scale.',
    link: null,
  },
];

export default function BuyerReassuranceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">
            Compliance &amp; Commercial Readiness
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Ready for Your Supply Chain
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Every element of our supply programme is designed to pass procurement approval, simplify import logistics, and support profitable long-term distribution.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reassurancePoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col p-7 bg-gray-50 border border-gray-100 rounded-2xl hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#2d7a3a]/8 flex items-center justify-center text-[#2d7a3a] mb-5 flex-shrink-0">
                {point.icon}
              </div>

              {/* Category */}
              <p className="text-[10px] font-semibold text-[#2d7a3a] uppercase tracking-widest mb-2">
                {point.category}
              </p>

              {/* Title */}
              <p className="font-bold text-gray-900 text-base mb-3 leading-snug">
                {point.title}
              </p>

              {/* Body */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {point.body}
              </p>

              {/* Link */}
              {point.link && (
                <Link
                  href={point.link.href}
                  className="mt-5 text-xs font-semibold text-[#2d7a3a] hover:underline self-start"
                >
                  {point.link.label} →
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm"
          >
            Request Full Compliance Pack
          </Link>
          <p className="text-xs text-gray-400">
            Includes BRCGS certificate, IFS certificate, allergen matrix, and product datasheets.
          </p>
        </div>
      </div>
    </section>
  );
}
