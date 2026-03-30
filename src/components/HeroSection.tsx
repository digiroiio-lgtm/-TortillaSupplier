import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  badges?: string[];
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function HeroSection({ title, subtitle, badges, primaryCTA, secondaryCTA }: HeroSectionProps) {
  return (
    <section className="bg-[#FAFAF8] border-b border-gray-200 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {badges.map((badge) => (
                <span key={badge} className="inline-block px-3 py-1 bg-[#2d7a3a]/10 text-[#2d7a3a] text-xs font-semibold rounded-full border border-[#2d7a3a]/20">
                  {badge}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            {primaryCTA && (
              <Link href={primaryCTA.href} className="px-6 py-3 bg-[#2d7a3a] text-white font-semibold rounded-md hover:bg-[#245f2d] transition-colors text-sm">
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-md hover:border-gray-400 hover:text-gray-900 transition-colors text-sm bg-white">
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
