import Link from 'next/link';

// Bridges informational guide pages (storage, shelf life, sizes, calories) to
// the pages that sell. Guides attract people researching a question; this
// block gives the business buyers among them a clear next step by buyer type.

const PATHS = [
  { label: 'Restaurants & taco bars', href: '/restaurant-tortilla-supply', note: 'All sizes, catering packs' },
  { label: 'Foodservice & QSR chains', href: '/qsr-tortilla-supplier', note: 'Consistent supply at volume' },
  { label: 'Distributors & wholesalers', href: '/tortilla-wholesale', note: 'Pallet and container supply' },
  { label: 'Retail & private label', href: '/private-label-tortillas', note: 'Your brand, our production' },
  { label: 'Importers & exporters', href: '/tortilla-importer-supply', note: 'Documentation and cold chain' },
  { label: 'Frozen supply', href: '/frozen-tortilla-supplier', note: '12-month shelf life at −18°C' },
];

export default function BuyerPathways() {
  return (
    <div className="p-6 bg-[#FAFAF8] border border-gray-200 rounded-2xl">
      <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-2">For Business Buyers</p>
      <h2 className="text-lg font-bold text-gray-900 mb-1">Buying tortillas for your business?</h2>
      <p className="text-sm text-gray-600 mb-5">Choose the option closest to your business, or send us your requirements directly.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {PATHS.map((p) => (
          <li key={p.href}>
            <Link
              href={p.href}
              className="block h-full px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-[#2d7a3a] transition-colors"
            >
              <span className="block text-sm font-semibold text-gray-900">{p.label}</span>
              <span className="block text-xs text-gray-500">{p.note}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="inline-flex px-5 py-2.5 bg-[#2d7a3a] text-white text-sm font-semibold rounded-lg hover:bg-[#245f2d] transition-colors"
      >
        Request a Wholesale Quote
      </Link>
    </div>
  );
}
