const stats = [
  { value: '10+', label: 'Product Lines' },
  { value: '3', label: 'Export Regions' },
  { value: 'BRCGS', label: 'Certified' },
  { value: '40ft', label: 'Container Supply' },
  { value: 'Private Label', label: 'Available' },
];

export default function StatsStrip() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-0 md:divide-x md:divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center md:px-6 text-center">
              <span className="text-xl font-bold text-gray-900 tracking-tight">{stat.value}</span>
              <span className="text-xs text-gray-400 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
