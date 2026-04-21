const stats = [
  { value: '10+', label: 'Years in Production', detail: 'Established manufacturer' },
  { value: '30+', label: 'Export Markets', detail: 'Active global supply' },
  { value: '4', label: 'Food Safety Certifications', detail: 'BRCGS · IFS · ISO 22000 · HACCP' },
  { value: '1–2 day', label: 'Response Time', detail: 'To all distributor inquiries' },
  { value: '40ft', label: 'Container Supply', detail: '20ft & 40ft programmes' },
];

export default function StatsStrip() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-0 md:divide-x md:divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center md:px-6 text-center">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">{stat.value}</span>
              <span className="text-xs font-semibold text-gray-600 mt-1">{stat.label}</span>
              <span className="text-[10px] text-gray-400 mt-0.5 leading-tight">{stat.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
