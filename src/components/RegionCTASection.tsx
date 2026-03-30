import Link from 'next/link';

const regions = [
  {
    name: 'UK Market',
    href: '/tortilla-supplier-uk',
    description: 'Chilled and frozen tortillas for UK foodservice, retail and food manufacturing buyers.',
  },
  {
    name: 'USA Market',
    href: '/tortilla-supplier-usa',
    description: 'Frozen tortillas for US foodservice chains, QSR operators and private label distributors.',
  },
  {
    name: 'Europe Market',
    href: '/tortilla-supplier-europe',
    description: 'Wholesale tortilla and flatbread supply for European distributors and food importers.',
  },
];

export default function RegionCTASection() {
  return (
    <section className="py-16 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Export Markets</h2>
        <p className="text-gray-500 text-sm mb-8">We supply wholesale tortillas and flatbreads across key international markets.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region) => (
            <Link key={region.name} href={region.href}
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group">
              <h3 className="font-bold text-[#1a1a1a] mb-2 group-hover:text-[#2d7a3a] transition-colors">{region.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{region.description}</p>
              <span className="text-[#2d7a3a] text-sm font-semibold">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
