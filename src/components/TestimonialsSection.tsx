const testimonials = [
  {
    quote:
      "We switched from a local supplier to TortillaSupplier for our UK distribution network. Product consistency is excellent — every pallet matches the sample exactly. Our supermarket buyers have not raised a single complaint.",
    name: 'James H.',
    role: 'Procurement Director',
    company: 'Meridian Foods Ltd — UK',
    rating: 5,
    highlight: 'Product consistency is excellent',
  },
  {
    quote:
      "Container pricing is transparent and their export documentation is flawless. Certificates of origin, allergen declarations, health certs — all ready before shipping. It saves our logistics team hours per order.",
    name: 'Marta V.',
    role: 'Import Manager',
    company: 'ProVista Distribución — Spain',
    rating: 5,
    highlight: 'Export documentation is flawless',
  },
  {
    quote:
      "We needed private label tortillas for our QSR chain. TortillaSupplier handled everything from artwork to packaging. Lead times are reliable and the BRCGS certification was a requirement we could not compromise on.",
    name: 'Thomas B.',
    role: 'Category Manager',
    company: 'Nordic Food Group — Germany',
    rating: 5,
    highlight: 'BRCGS certification — no compromise',
  },
  {
    quote:
      "Their frozen corn tortillas have become one of our fastest-moving SKUs. The cold chain is handled end-to-end and we have had zero quality issues across four container orders so far.",
    name: 'Sophie L.',
    role: 'Wholesale Buyer',
    company: 'Atlas Fine Foods — France',
    rating: 5,
    highlight: 'Zero quality issues across four orders',
  },
  {
    quote:
      "As a foodservice operator running 40 sites, consistency matters more than price. TortillaSupplier delivers both. Response time is fast, the WhatsApp channel is genuinely useful, and samples arrived within the week.",
    name: 'Reza K.',
    role: 'Head of Supply Chain',
    company: 'Streetfood Co. — Netherlands',
    rating: 5,
    highlight: 'Consistency matters more than price',
  },
  {
    quote:
      "We source for three retail chains across Scandinavia. TortillaSupplier mixed pallet option let us trial multiple SKUs in a single 20ft container. That flexibility closed the deal for us.",
    name: 'Ingrid M.',
    role: 'Category Buyer',
    company: 'Nordic Retail Partners — Sweden',
    rating: 5,
    highlight: 'Mixed pallet option closed the deal',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const hue = (name.charCodeAt(0) * 37 + name.charCodeAt(1) * 13) % 360;
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
      style={{ background: `hsl(${hue}, 48%, 42%)` }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export default function TestimonialsSection() {
  const featured = testimonials.slice(0, 3);
  const secondary = testimonials.slice(3, 6);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">
              Buyer Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight max-w-xl">
              Trusted by distributors and foodservice buyers worldwide
            </h2>
          </div>

          {/* Rating badge */}
          <div className="flex-shrink-0 flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 leading-none mb-1">4.9</div>
              <Stars count={5} />
              <p className="text-xs text-gray-400 mt-1.5 whitespace-nowrap">Based on partner reviews</p>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="space-y-1.5">
              {['BRCGS Verified', 'Export Certified', 'Halal Compliant'].map((label) => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <svg className="w-3 h-3 text-[#2d7a3a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* First row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {featured.map((t) => (
            <div
              key={t.name}
              className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              {/* Quote mark */}
              <svg className="w-6 h-6 text-[#2d7a3a]/30 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8C6.134 8 3 11.134 3 15v9h9v-9H6c0-2.206 1.794-4 4-4V8zm16 0c-3.866 0-7 3.134-7 7v9h9v-9h-6c0-2.206 1.794-4 4-4V8z" />
              </svg>

              {/* Highlighted pull-quote */}
              <p className="text-xs font-semibold text-[#2d7a3a] mb-3 uppercase tracking-wide">
                &ldquo;{t.highlight}&rdquo;
              </p>

              {/* Full quote */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">{t.quote}</p>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <Avatar name={t.name} />
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{t.name}</p>
                  <p className="text-xs text-gray-400 leading-tight mt-0.5">{t.role}</p>
                  <p className="text-xs text-gray-400 leading-tight">{t.company}</p>
                </div>
                <div className="ml-auto">
                  <Stars count={t.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row — 3 cards, slightly muted */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {secondary.map((t) => (
            <div
              key={t.name}
              className="flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all"
            >
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <Avatar name={t.name} />
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{t.name}</p>
                  <p className="text-xs text-gray-400 leading-tight mt-0.5">{t.company}</p>
                </div>
                <div className="ml-auto">
                  <Stars count={t.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
