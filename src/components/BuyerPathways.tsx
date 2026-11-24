import Link from 'next/link';

// Bridges pages that attract researchers (guides) and pages that describe a
// product to the pages that serve a specific buyer type. Used on the guides
// with a quote button, and on every landing page as a "who we supply" list.

const PATHS = [
  { label: 'Restaurants & taco bars', href: '/restaurant-tortilla-supply', note: 'All sizes, catering packs' },
  { label: 'Foodservice & QSR chains', href: '/qsr-tortilla-supplier', note: 'Consistent supply at volume' },
  { label: 'Catering & events', href: '/catering-tortilla-supply', note: 'Bulk catering formats' },
  { label: 'Street taco & burrito', href: '/street-taco-tortilla-wholesale', note: 'Small and large formats' },
  { label: 'Distributors & wholesalers', href: '/tortilla-wholesale', note: 'Pallet and container supply' },
  { label: 'Retail & private label', href: '/private-label-tortillas', note: 'Your brand, our production' },
  { label: 'Importers & exporters', href: '/tortilla-importer-supply', note: 'Documentation and cold chain' },
  { label: 'Frozen supply', href: '/frozen-tortilla-supplier', note: '12-month shelf life at −18°C' },
];

interface BuyerPathwaysProps {
  /** Hide the link to the page this block is rendered on. */
  excludeHref?: string;
  /** Guides show the quote button; landing pages already have a form. */
  showQuote?: boolean;
  heading?: string;
  intro?: string;
}

export default function BuyerPathways({
  excludeHref,
  showQuote = true,
  heading = 'Buying tortillas for your business?',
  intro = 'Choose the option closest to your business, or send us your requirements directly.',
}: BuyerPathwaysProps) {
  const paths = PATHS.filter((p) => p.href !== excludeHref);
  return (
    <div className="p-6 bg-[#FAFAF8] border border-gray-200 rounded-2xl" data-track="buyer_pathway_click">
      <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-2">For Business Buyers</p>
      <h2 className="text-lg font-bold text-gray-900 mb-1">{heading}</h2>
      <p className="text-sm text-gray-600 mb-5">{intro}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-1">
        {paths.map((p) => (
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
      {showQuote && (
        <Link
          href="/contact"
          className="mt-4 inline-flex px-5 py-2.5 bg-[#2d7a3a] text-white text-sm font-semibold rounded-lg hover:bg-[#245f2d] transition-colors"
        >
          Request a Wholesale Quote
        </Link>
      )}
    </div>
  );
}
