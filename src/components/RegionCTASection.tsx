import Link from 'next/link';

const regions = [
  {
    name: 'UK Market',
    href: '/tortilla-supplier-uk',
    description: 'Chilled and frozen tortillas for UK foodservice, retail and food manufacturing buyers.',
    flag: '🇬🇧',
  },
  {
    name: 'USA Market',
    href: '/tortilla-supplier-usa',
    description: 'Frozen tortillas for US foodservice chains, QSR operators and private label distributors.',
    flag: '🇺🇸',
  },
  {
    name: 'Europe Market',
    href: '/tortilla-supplier-europe',
    description: 'Wholesale tortilla and flatbread supply for European distributors and food importers.',
    flag: '🇪🇺',
  },
];

export default function RegionCTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Export Markets</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Global Distribution Markets</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {regions.map((region) => (
            <Link
              key={region.name}
              href={region.href}
              className="group block bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:border-gray-200 transition-all"
            >
              <div className="text-3xl mb-4">{region.flag}</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2d7a3a] transition-colors">{region.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{region.description}</p>
              <span className="text-sm font-medium text-[#2d7a3a]">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
