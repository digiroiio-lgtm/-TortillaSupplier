import Image from 'next/image';
import Link from 'next/link';

const navCategories = [
  {
    label: 'Flour Tortillas',
    href: '/flour-tortilla-supplier',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path d="M6 12h12M12 6c-2.5 2-2.5 8 0 12M12 6c2.5 2 2.5 8 0 12" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Corn Tortillas',
    href: '/corn-tortilla-supplier',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="9" ry="5" strokeWidth="1.5" />
        <path d="M3 12c0 2.8 4 6 9 6s9-3.2 9-6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Frozen Tortillas',
    href: '/frozen-tortilla-supplier',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Wrap Flatbreads',
    href: '/wrap-bread-supplier',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 8c0-2.2 3.6-4 8-4s8 1.8 8 4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 8v8c0 2.2 3.6 4 8 4s8-1.8 8-4V8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Lavash Flatbreads',
    href: '/flatbread-supplier',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="9" width="18" height="6" rx="3" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Burrito Tortillas',
    href: '/burrito-tortilla-supplier',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 12c0 3.9 3.1 7 7 7s7-3.1 7-7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 12c0-1 .4-2 1-2.8M19 12c0-1-.4-2-1-2.8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Street Taco Tortillas',
    href: '/street-taco-tortilla-wholesale',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 16c2-6 14-6 16 0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 16v-2a5 5 0 0110 0v2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Wrap Tortillas',
    href: '/wrap-tortilla-supplier',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" strokeWidth="1.5" />
        <path d="M12 8v8M8 12h8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Frying Tortillas',
    href: '/frying-tortilla-supplier',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 3c0 3-3 4-3 7a6 6 0 0012 0c0-3-3-4-3-7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 10v7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const featuredCards = [
  {
    badge: 'Best Seller',
    badgeColor: 'bg-amber-50 text-amber-700 border border-amber-200',
    title: 'Flour Tortillas',
    subtitle: 'Wholesale · Export Grade · Private Label',
    description: 'Standard and large-format flour tortillas for foodservice, QSR and retail.',
    image: '/images/img176.jpg',
    imageBg: 'bg-[#f5f0e8]',
    href: '/flour-tortilla-supplier',
  },
  {
    badge: 'Export Ready',
    badgeColor: 'bg-green-50 text-green-700 border border-green-200',
    title: 'Corn Tortillas',
    subtitle: 'Authentic · Wholesale · Export Grade',
    description: 'Traditional corn tortillas for authentic preparations and retail packs.',
    image: '/images/img186.jpg',
    imageBg: 'bg-[#f3ede0]',
    href: '/corn-tortilla-supplier',
  },
  {
    badge: 'Cold Chain Ready',
    badgeColor: 'bg-blue-50 text-blue-700 border border-blue-100',
    title: 'Frozen Tortillas',
    subtitle: 'Extended Shelf Life · Export Ready · -18°C',
    description: 'Extended shelf life frozen tortillas for export and long-haul distribution.',
    image: '/images/img200.jpg',
    imageBg: 'bg-[#e8f0f8]',
    href: '/frozen-tortilla-supplier',
  },
];

export default function ProductCategoriesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-2">Product Range</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Product Categories</h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap"
          >
            View all products →
          </Link>
        </div>

        {/* Alibaba-style marketplace grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_1fr_1fr_240px] gap-3">

          {/* ── Left sidebar nav ── */}
          <div className="bg-white border border-gray-100 rounded-2xl p-2 flex flex-col">
            <div className="px-3 py-2.5 mb-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
                </svg>
                All Categories
              </div>
            </div>
            <nav className="flex flex-col gap-0.5">
              {navCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-600 hover:bg-gray-50 hover:text-[#2d7a3a] transition-colors group"
                >
                  <span className="text-gray-400 group-hover:text-[#2d7a3a] transition-colors">{cat.icon}</span>
                  <span className="flex-1 leading-tight">{cat.label}</span>
                  <svg className="w-3 h-3 text-gray-300 group-hover:text-[#2d7a3a] flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </nav>
          </div>

          {/* ── 3 featured product cards ── */}
          {featuredCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:border-gray-200 transition-all group flex flex-col"
            >
              {/* Image area */}
              <div className={`relative flex-1 min-h-[180px] flex items-end justify-center ${card.imageBg} overflow-hidden`}>
                {/* Badge */}
                <span className={`absolute top-3 left-3 z-10 text-xs font-semibold px-2 py-0.5 rounded-md ${card.badgeColor}`}>
                  {card.badge}
                </span>
                <div className="relative w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-4 border-t border-gray-50">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-[#2d7a3a] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            </Link>
          ))}

          {/* ── CTA promo card ── */}
          <div className="bg-[#0f2d14] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            {/* Background glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-48 h-48 rounded-full opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #2d7a3a 0%, transparent 70%)' }}
            />

            <div className="relative">
              <p className="text-xs font-semibold text-[#6dbf7a] uppercase tracking-widest mb-3">
                Private Label
              </p>
              <h3 className="text-lg font-bold text-white leading-snug mb-3">
                Explore our full product range
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-6">
                BRCGS certified, halal-compliant, export-ready. Custom packaging available from 20ft container.
              </p>
            </div>

            <div className="relative space-y-2">
              <Link
                href="/products"
                className="block w-full text-center bg-white text-gray-900 text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
              >
                View All Products
              </Link>
              <Link
                href="/contact"
                className="block w-full text-center border border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-white/8 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* ── Foodservice formats row ── */}
        <div className="mt-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Foodservice Formats</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { title: 'Burrito Tortillas', description: 'Large 30cm flour tortillas for burrito wrapping — QSR and foodservice supply.', href: '/burrito-tortilla-supplier', image: '/images/img202.jpg' },
              { title: 'Wrap Tortillas', description: 'Mid-size wrap tortillas for sandwich wraps, paninis and cold food-to-go applications.', href: '/wrap-tortilla-supplier', image: '/images/img204.jpg' },
              { title: 'Street Taco Tortillas', description: 'Small corn and flour tortillas for authentic street taco and taqueria operations.', href: '/street-taco-tortilla-wholesale', image: '/images/img211.jpg' },
              { title: 'Frying Tortillas', description: 'Tostada and frying-grade corn tortillas suitable for deep fry and flat-grill applications.', href: '/frying-tortilla-supplier', image: '/images/img229.jpg' },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-gray-200 transition-all group"
              >
                <div className="relative w-full h-28 bg-gray-50">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1.5 text-sm group-hover:text-[#2d7a3a] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">{cat.description}</p>
                  <span className="text-xs font-medium text-[#2d7a3a]">View supply options →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
