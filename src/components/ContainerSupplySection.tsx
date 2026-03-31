import Link from 'next/link';

const features = [
  { icon: '🚢', title: '20ft & 40ft Container Programs', description: 'Full container and groupage options for importers and wholesale distributors.' },
  { icon: '🏷️', title: 'Private Label Production', description: 'Custom branding and packaging under your brand from competitive MOQs.' },
  { icon: '💲', title: 'Stable Export Pricing', description: 'Fixed quarterly pricing programmes for distributors who need cost certainty.' },
  { icon: '📦', title: 'Mixed Pallet Options', description: 'Combine multiple SKUs — flour, corn, frozen and flatbreads — in a single container.' },
];

export default function ContainerSupplySection() {
  return (
    <section className="py-16 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Container Supply for Distributors</h2>
            <p className="text-gray-400 text-sm max-w-xl">
              We supply tortillas and flatbreads in full container and pallet quantities to food importers and wholesale distributors worldwide.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#2d7a3a] text-white font-semibold rounded-md hover:bg-[#245f2d] transition-colors text-sm"
            >
              Request Container Quote
            </Link>
            <Link
              href="/bulk-tortilla-supplier"
              className="px-5 py-2.5 border border-gray-600 text-gray-300 font-semibold rounded-md hover:border-gray-400 hover:text-white transition-colors text-sm"
            >
              View Bulk Supply Options
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-lg p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2 text-sm">{f.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
