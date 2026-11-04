import Link from 'next/link';

const links = [
  { href: '/products', label: 'Wholesale Tortilla Products', description: 'Explore flour, corn and frozen tortilla formats.' },
  { href: '/tortilla-wholesale', label: 'Wholesale Tortillas', description: 'Bulk supply for distributors and foodservice buyers.' },
  { href: '/private-label-tortillas', label: 'Private Label Tortillas', description: 'Custom branded tortilla manufacturing and packaging.' },
  { href: '/our-factory', label: 'Our Tortilla Factory', description: 'Learn about our manufacturing capabilities.' },
  { href: '/about', label: 'About TortillaSupplier', description: 'Learn about our business and export approach.' },
  { href: '/contact', label: 'Contact & Request Pricing', description: 'Ask about wholesale pricing and supply options.' },
];

export default function SitelinksSection() {
  return (
    <section aria-labelledby="explore-pages-heading" className="bg-white border-b border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="explore-pages-heading" className="text-2xl font-bold text-gray-900 mb-3">Explore TortillaSupplier</h2>
        <p className="text-sm text-gray-600 mb-6">Find wholesale products, manufacturing information and ways to contact our team.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map(({ href, label, description }) => (
            <Link key={href} href={href} className="block rounded-xl border border-gray-200 p-5 hover:border-[#2d7a3a] hover:shadow-sm transition-colors">
              <span className="block text-base font-semibold text-gray-900">{label}</span>
              <span className="block mt-2 text-sm text-gray-600">{description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
