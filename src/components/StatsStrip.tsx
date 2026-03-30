const stats = [
  { value: '10+', label: 'Product Lines' },
  { value: 'Export Ready', label: 'Global Logistics' },
  { value: 'Private Label', label: 'Available' },
  { value: '3 Regions', label: 'UK · USA · Europe' },
  { value: 'BRCGS', label: 'Certified Standard' },
];

export default function StatsStrip() {
  return (
    <section className="bg-[#1a1a1a] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center">
              <span className="text-white font-bold text-xl">{stat.value}</span>
              <span className="text-gray-400 text-xs mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
