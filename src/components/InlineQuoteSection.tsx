import ContactForm from '@/components/ContactForm';

interface InlineQuoteSectionProps {
  /** Reported to GA4 and in the inquiry email, e.g. "storage_guide". */
  location: string;
  eyebrow: string;
  heading: string;
  intro: string;
  points: string[];
}

/**
 * In-page quote form for high-traffic guide pages, so B2B buyers can ask
 * for pricing without leaving the article. Anchored at #quote.
 */
export default function InlineQuoteSection({ location, eyebrow, heading, intro, points }: InlineQuoteSectionProps) {
  return (
    <div id="quote" className="scroll-mt-24 grid gap-8 lg:grid-cols-5 bg-[#f4f8f4] border border-[#d6e6d8] rounded-2xl p-6 sm:p-8">
      <div className="lg:col-span-2">
        <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">{eyebrow}</p>
        <h2 className="text-xl font-bold text-gray-900 mb-3">{heading}</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{intro}</p>
        <ul className="space-y-2">
          {points.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-gray-700">
              <span className="text-[#2d7a3a] font-bold" aria-hidden="true">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <ContactForm location={location} />
      </div>
    </div>
  );
}

/** Slim banner near the top of a guide that jumps to the #quote form. */
export function QuoteJumpBanner({ text, cta, ctaId }: { text: string; cta: string; ctaId: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-3xl border border-gray-200 rounded-xl px-5 py-4 bg-white">
      <p className="text-sm text-gray-700">{text}</p>
      <a
        href="#quote"
        data-cta={ctaId}
        className="shrink-0 px-4 py-2 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm text-center"
      >
        {cta}
      </a>
    </div>
  );
}
