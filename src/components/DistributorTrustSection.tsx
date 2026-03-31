const markets = [
  { flag: '🇬🇧', country: 'United Kingdom' },
  { flag: '🇺🇸', country: 'United States' },
  { flag: '🇩🇪', country: 'Germany' },
  { flag: '🇪🇸', country: 'Spain' },
  { flag: '🇳🇱', country: 'Netherlands' },
  { flag: '🇫🇷', country: 'France' },
  { flag: '🇮🇹', country: 'Italy' },
  { flag: '🌍', country: 'Scandinavia' },
];

export default function DistributorTrustSection() {
  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6 text-center">
          Trusted by distributors in
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {markets.map((m) => (
            <div
              key={m.country}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm"
            >
              <span className="text-base leading-none">{m.flag}</span>
              <span className="font-medium">{m.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
