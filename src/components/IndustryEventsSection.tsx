import Link from 'next/link';

const events = [
  {
    month: 'Feb',
    year: '2026',
    name: 'Gulfood Dubai 2026',
    location: 'Dubai World Trade Centre · UAE',
    description:
      'The world\'s largest annual food and beverage sourcing event. Critical for distributors and importers targeting the Middle East, GCC, and North Africa markets. Halal-certified tortilla supply is a key category for regional foodservice and retail buyers attending Gulfood.',
    relevance: 'Middle East · Halal Supply · Foodservice Buyers',
    ctaLabel: 'Arrange a Meeting',
    href: '/contact',
    featured: true,
  },
  {
    month: 'Mar',
    year: '2026',
    name: 'IFE London 2026',
    location: 'ExCeL London · United Kingdom',
    description:
      'The UK\'s largest food and drink trade exhibition. Essential for distributors supplying UK supermarkets, foodservice chains, and food wholesalers. A primary channel for importers looking to source certified flour and frozen tortilla products for the British market.',
    relevance: 'UK Market · Retail & Foodservice · Wholesale Buyers',
    ctaLabel: 'Arrange a Meeting',
    href: '/contact',
    featured: false,
  },
  {
    month: 'May',
    year: '2026',
    name: 'PLMA Amsterdam 2026',
    location: 'RAI Amsterdam · Netherlands',
    description:
      'The world\'s leading private label trade show. Attended by retail chains, discounters, and food distributors actively seeking private label manufacturers. TortillaSupplier\'s private label tortilla programme — covering flour, corn and frozen formats — is directly relevant to PLMA buyers.',
    relevance: 'Private Label · Retail Chains · Own-Brand Supply',
    ctaLabel: 'Request Private Label Info',
    href: '/contact',
    featured: false,
  },
  {
    month: 'Oct',
    year: '2026',
    name: 'SIAL Paris 2026',
    location: 'Paris Nord Villepinte · France',
    description:
      'One of the world\'s largest food innovation and sourcing exhibitions, attracting 300,000+ visitors across 200 countries. SIAL Paris is a key meeting point for European import distributors, retail buyers, and foodservice procurement teams evaluating international food suppliers.',
    relevance: 'European Importers · Foodservice · Retail Buyers',
    ctaLabel: 'View Details',
    href: '/contact',
    featured: false,
  },
];

export default function IndustryEventsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">
              Industry Events &amp; Expos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Where to Meet Us in 2026
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              TortillaSupplier tracks and attends major international food and trade events to stay close to distributor and importer demand. If you are attending any of the events below, contact our export team to arrange a meeting in advance.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a0a0a] text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Arrange a Meeting
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {events.map((event) => (
            <div
              key={event.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all hover:shadow-md ${
                event.featured
                  ? 'bg-[#0f2d14] border-[#1a4020] hover:border-[#245f2d]'
                  : 'bg-white border-gray-100 hover:border-gray-200'
              }`}
            >
              {event.featured && (
                <span className="absolute top-5 right-5 px-2.5 py-1 bg-[#2d7a3a] text-white text-[10px] font-semibold uppercase tracking-widest rounded-full">
                  Featured
                </span>
              )}

              {/* Date badge */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center text-center ${
                    event.featured ? 'bg-white/10 text-white' : 'bg-gray-50 border border-gray-100 text-gray-900'
                  }`}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wide opacity-70 leading-none">{event.month}</span>
                  <span className="text-base font-bold leading-none mt-0.5">{event.year}</span>
                </div>
                <div>
                  <p className={`font-bold text-base leading-snug mb-1 ${event.featured ? 'text-white' : 'text-gray-900'}`}>
                    {event.name}
                  </p>
                  <p className={`text-xs ${event.featured ? 'text-white/60' : 'text-gray-400'}`}>
                    {event.location}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-4 flex-1 ${event.featured ? 'text-white/80' : 'text-gray-500'}`}>
                {event.description}
              </p>

              {/* Relevance tag */}
              <div className="mb-5">
                <span
                  className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    event.featured ? 'bg-white/10 text-white/70' : 'bg-gray-50 border border-gray-200 text-gray-500'
                  }`}
                >
                  {event.relevance}
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-2">
                <Link
                  href={event.href}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                    event.featured
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-[#2d7a3a] text-white hover:bg-[#245f2d]'
                  }`}
                >
                  {event.ctaLabel}
                </Link>
                <a
                  href="https://wa.me/905531229372?text=Hello%2C%20I%20would%20like%20to%20arrange%20a%20meeting%20at%20a%20food%20industry%20event.%20Could%20you%20share%20your%20availability%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                    event.featured
                      ? 'border-white/20 text-white hover:bg-white/8'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-xs text-gray-400 text-center">
          Not attending any of these events? Our export team is available by email and WhatsApp year-round.{' '}
          <Link href="/contact" className="text-[#2d7a3a] font-medium hover:underline">
            Contact us directly →
          </Link>
        </p>
      </div>
    </section>
  );
}
