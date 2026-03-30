const badges = [
  'Export Certified',
  'Halal Available',
  'Private Label Ready',
  'MOQ Flexible',
  'Full Documentation',
  'Cold Chain Logistics',
];

export default function TrustBadgeStrip() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {badges.map((b) => (
        <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
          <svg className="w-3 h-3 text-[#2d7a3a]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {b}
        </span>
      ))}
    </div>
  );
}
