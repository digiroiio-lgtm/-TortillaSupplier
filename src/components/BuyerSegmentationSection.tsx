import Link from 'next/link';

const segments = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    tag: 'Importers & Distributors',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-100',
    title: 'Container supply with margin stability',
    points: [
      '20ft & 40ft container programmes',
      'Quarterly pricing for margin planning',
      'Mixed-SKU pallet options',
      'Full import documentation included',
    ],
    cta: { label: 'View Container Supply', href: '/contact' },
    ctaStyle: 'bg-[#0a0a0a] text-white hover:bg-gray-800',
    featured: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    tag: 'Private Label Buyers',
    tagColor: 'bg-green-50 text-green-700 border-green-100',
    title: 'Custom branding from factory to shelf',
    points: [
      'Custom packaging & label design',
      'Retailer-ready formats (BRCGS approved)',
      'Available from 1 container per SKU',
      'UK, EU & Middle East label compliance',
    ],
    cta: { label: 'Request Private Label Info', href: '/private-label-tortilla-manufacturer' },
    ctaStyle: 'bg-[#2d7a3a] text-white hover:bg-[#245f2d]',
    featured: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    tag: 'Foodservice & QSR Chains',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-100',
    title: 'Consistency and scale for multi-site operations',
    points: [
      'Consistent spec across every batch',
      'Burrito, taco & wrap formats stocked',
      'Frozen for extended shelf life',
      'Supply to 1–500+ restaurant sites',
    ],
    cta: { label: 'Foodservice Supply', href: '/tortilla-foodservice-supplier' },
    ctaStyle: 'bg-[#0a0a0a] text-white hover:bg-gray-800',
    featured: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    tag: 'Retail Buyers',
    tagColor: 'bg-purple-50 text-purple-700 border-purple-100',
    title: 'Shelf-ready compliance for supermarket supply',
    points: [
      'BRCGS & IFS certified production',
      'Supermarket & discounter approved',
      'Chilled & ambient shelf formats',
      'Own-label and branded options',
    ],
    cta: { label: 'Retail Supply Options', href: '/private-label-tortilla-manufacturer' },
    ctaStyle: 'bg-[#0a0a0a] text-white hover:bg-gray-800',
    featured: false,
  },
];

export default function BuyerSegmentationSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Who This Is For</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">
            Designed for Your Buying Model
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Whether you are scaling a distribution network, launching a private label brand, or sourcing for foodservice or retail — our supply programme is built to fit your commercial model.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map((seg) => (
            <div
              key={seg.tag}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
                seg.featured
                  ? 'bg-[#f0faf2] border-[#2d7a3a]/20 shadow-sm'
                  : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm'
              }`}
            >
              {seg.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 bg-[#2d7a3a] text-white rounded-full">
                  Popular
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 ${
                  seg.featured ? 'bg-[#2d7a3a]/10 text-[#2d7a3a]' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {seg.icon}
              </div>

              {/* Tag */}
              <span className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-3 self-start ${seg.tagColor}`}>
                {seg.tag}
              </span>

              {/* Title */}
              <p className="font-bold text-gray-900 text-base mb-4 leading-snug">{seg.title}</p>

              {/* Points */}
              <ul className="space-y-2 flex-1 mb-6">
                {seg.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                    <svg className="w-3.5 h-3.5 text-[#2d7a3a] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={seg.cta.href}
                className={`block w-full text-center text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors ${seg.ctaStyle}`}
              >
                {seg.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
