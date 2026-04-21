import Image from 'next/image';
import Link from 'next/link';

const WA_HREF = 'https://wa.me/905531229372?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20tortilla%20supply.%20Could%20you%20send%20container%20pricing%3F';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  badges?: string[];
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  ctaNote?: string;
  eyebrow?: string;
  galleryImages?: string[];
  showWhatsApp?: boolean;
}

export default function HeroSection({ title, subtitle, badges, primaryCTA, secondaryCTA, ctaNote, eyebrow, galleryImages, showWhatsApp }: HeroSectionProps) {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #2d7a3a 0%, transparent 70%)' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 md:pt-32 md:pb-32 text-center">
        {/* Eyebrow badge */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/8 border border-white/10 rounded-full text-xs font-medium text-gray-300 mb-6">
            <span className="w-1.5 h-1.5 bg-[#2d7a3a] rounded-full"></span>
            {eyebrow}
          </div>
        )}

        {/* Tag badges */}
        {badges && badges.length > 0 && !eyebrow && (
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {badges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/8 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                <svg className="w-3 h-3 text-[#2d7a3a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6 max-w-4xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap gap-3 justify-center">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="px-6 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/8 hover:border-white/30 transition-colors text-sm"
              >
                {secondaryCTA.label}
              </Link>
            )}
            {showWhatsApp && (
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20c45a] transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Sales
              </a>
            )}
          </div>
          {ctaNote && (
            <p className="text-xs text-gray-500 mt-1">{ctaNote}</p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <p className="text-xs text-gray-600">Response in 1–2 business days · Samples available · Export documentation included</p>
          )}
        </div>

        {/* Trust strip */}
        {badges && badges.length > 0 && eyebrow && (
          <div className="flex flex-wrap gap-5 justify-center mt-12 pt-10 border-t border-white/8">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <svg className="w-3.5 h-3.5 text-[#2d7a3a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        )}

        {/* Product gallery mosaic */}
        {galleryImages && galleryImages.length > 0 && (
          <div className="mt-14 grid grid-cols-4 sm:grid-cols-6 gap-2 max-w-4xl mx-auto">
            {galleryImages.map((src, i) => (
              <div
                key={src}
                className={`relative rounded-xl overflow-hidden bg-white/5 border border-white/10 ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                }`}
              >
                <Image
                  src={src}
                  alt={`Tortilla wholesale product gallery — ${[
                    'flour tortillas on production line — wholesale tortilla manufacturer',
                    'gourmet tortilla wrap with fresh toppings — foodservice supply',
                    'spinach tortilla wrap with grilled chicken — specialty tortilla wholesale',
                    'street tacos with fresh salsa — corn tortilla bulk supply',
                    'burrito wrap with beef and vegetables — large format tortilla supply',
                    'purple tortilla wrap — coloured specialty tortilla exporter',
                    'loaded tortilla wrap sandwich — foodservice format tortillas',
                    'classic flour tortilla quesadilla — standard tortilla wholesale',
                    'chicken burrito with rice — bulk tortilla supply for QSR',
                    'tortilla pinwheel canapés — catering and retail tortilla formats',
                    'fresh veggie wrap in flour tortilla — export grade tortillas',
                    'tortilla flatbread with toppings — private label tortilla supplier',
                  ][i] ?? 'tortilla wholesale supplier product'}`}
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 640px) 25vw, 16vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
