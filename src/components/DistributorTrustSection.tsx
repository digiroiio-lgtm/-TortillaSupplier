const markets = [
  { flag: '🇬🇧', country: 'United Kingdom' },
  { flag: '🇺🇸', country: 'United States' },
  { flag: '🇩🇪', country: 'Germany' },
  { flag: '🇪🇸', country: 'Spain' },
  { flag: '🇳🇱', country: 'Netherlands' },
  { flag: '🇫🇷', country: 'France' },
  { flag: '🇮🇹', country: 'Italy' },
  { flag: '🌍', country: 'Scandinavia & Beyond' },
];

export default function DistributorTrustSection() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
          Trusted by distributors in
        </p>
        <div className="flex flex-wrap gap-3">
          {markets.map((m) => (
            <div
              key={m.country}
              className="flex items-center gap-2 px-4 py-2 bg-[#FAFAF8] border border-gray-200 rounded-full text-sm text-gray-700"
            >
              <span className="text-base">{m.flag}</span>
              <span>{m.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
