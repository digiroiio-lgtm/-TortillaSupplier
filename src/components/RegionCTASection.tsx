import Link from 'next/link';

const regions = [
  {
    name: 'United Kingdom',
    href: '/tortilla-supplier-uk',
    flag: '🇬🇧',
    buyerTypes: 'Supermarket chains · Wholesale distributors · Foodservice operators · QSR groups',
    formats: 'Chilled & frozen formats · BRCGS required · Retail-ready packaging',
    detail: 'The UK tortilla market exceeds £350M annually. BRCGS certification is a prerequisite for most major retail buyers. We supply established UK distributors with container loads of flour, corn and frozen tortillas — with full UK retail labelling compliance.',
    certNote: 'BRCGS · IFS · Halal on request',
  },
  {
    name: 'United States',
    href: '/tortilla-supplier-usa',
    flag: '🇺🇸',
    buyerTypes: 'Foodservice chains · QSR operators · Private label distributors · Ethnic retailers',
    formats: 'Frozen preferred · FDA-compliant labelling · FCL container supply',
    detail: 'The US is the world\'s largest tortilla market. We supply frozen flour and corn tortillas to US foodservice distributors and private label buyers, with full FDA documentation and import compliance support for East and West Coast ports.',
    certNote: 'HACCP · ISO 22000 · Halal certified',
  },
  {
    name: 'European Union',
    href: '/tortilla-supplier-europe',
    flag: '🇪🇺',
    buyerTypes: 'Cross-border wholesale distributors · Retail importers · Foodservice groups · Cash & carry',
    formats: 'Mixed pallet options · IFS certified · Multi-language packaging available',
    detail: 'Germany, France, the Netherlands, Spain and Italy are our largest European markets. IFS certification is standard for EU retail buyers. Mixed pallet containers allow importers to test multiple SKUs before committing to full production runs.',
    certNote: 'IFS · BRCGS · ISO 22000',
  },
  {
    name: 'Middle East',
    href: '/tortilla-supplier-middle-east',
    flag: '🌙',
    buyerTypes: 'Gulf foodservice chains · Halal food distributors · Hotel & catering groups · Retail chains',
    formats: 'Halal certified · Frozen container supply · UAE, Saudi, Qatar delivery',
    detail: 'Demand for tortillas across UAE, Saudi Arabia, Qatar, and Kuwait is growing rapidly, driven by QSR expansion and hotel foodservice. All products are available with Halal certification. We supply direct container shipments to GCC ports with full SASO and import documentation.',
    certNote: 'Halal certified · BRCGS · Export docs included',
  },
];

export default function RegionCTASection() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Export Markets</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Global Distribution Markets
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              We supply certified tortillas to distributors across four core export regions — each with tailored documentation, certifications, and logistics support.
            </p>
          </div>
          <Link
            href="/export-program"
            className="flex-shrink-0 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
          >
            View Export Programme →
          </Link>
        </div>

        {/* Region grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {regions.map((region) => (
            <div
              key={region.name}
              className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:border-gray-200 transition-all flex flex-col"
            >
              {/* Flag + name */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl leading-none" aria-hidden="true">{region.flag}</span>
                <div>
                  <p className="font-bold text-gray-900 text-base group-hover:text-[#2d7a3a] transition-colors">{region.name}</p>
                  <p className="text-[10px] font-semibold text-[#2d7a3a] uppercase tracking-widest mt-0.5">{region.certNote}</p>
                </div>
              </div>

              {/* Detail */}
              <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{region.detail}</p>

              {/* Buyer types */}
              <div className="mb-3">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Buyer Types</p>
                <p className="text-xs text-gray-600">{region.buyerTypes}</p>
              </div>

              {/* Formats */}
              <div className="mb-5">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Supply Format</p>
                <p className="text-xs text-gray-600">{region.formats}</p>
              </div>

              {/* Link */}
              <Link
                href={region.href}
                className="self-start text-sm font-semibold text-[#2d7a3a] hover:underline"
              >
                {region.name} supply guide →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center text-xs text-gray-400">
          {['Australia', 'Canada', 'Japan', 'South Africa', 'Scandinavia', 'Turkey'].map((market) => (
            <span key={market} className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-[#2d7a3a]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Also supplying {market}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
