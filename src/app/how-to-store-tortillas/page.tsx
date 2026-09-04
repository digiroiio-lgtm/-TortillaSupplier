import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';

const BASE_URL = 'https://tortillasupplier.com';

const PAGE_TITLE = 'How to Store Tortillas: Flour, Corn & Wrap Storage Guide';
const PAGE_DESCRIPTION =
  'Store flour tortillas up to 21 days and corn tortillas up to 14 days sealed at +2–4°C, or 9–12 months at −18°C. Ambient, fridge and freezer methods for tortillas and wraps.';

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${BASE_URL}/how-to-store-tortillas`,
  },
  alternates: { canonical: `${BASE_URL}/how-to-store-tortillas` },
};

// Chilled and frozen figures below are our own product specifications
// (see src/data/products.ts) rather than generic guidance.
const storageByType = [
  {
    type: 'Flour tortillas',
    chilled: 'Up to 21 days at +2–4°C',
    frozen: '9–12 months at −18°C',
    note:
      'Flour tortillas hold moisture better than corn and tolerate chilled storage well. Keep the pack sealed — the fat content means they stale quickly once exposed to dry fridge air.',
  },
  {
    type: 'Corn tortillas',
    chilled: 'Up to 14 days at +2–4°C',
    frozen: '9–12 months at −18°C',
    note:
      'Corn tortillas have a shorter chilled life than flour because they contain no added fat to retain moisture. They stiffen when cold — warm them on a dry pan or griddle before service to restore pliability.',
  },
  {
    type: 'Tortilla wraps & flatbreads',
    chilled: 'Up to 21 days at +2–4°C (chilled formats)',
    frozen: '12 months at −18°C (blast-frozen formats)',
    note:
      'Large-format wraps and lavash-style flatbreads crack if they dry out. Store flat, never folded, and keep them sealed until the moment of use. Our wrap and flatbread range is supplied blast frozen for a full 12-month life.',
  },
];

const storageOptions = [
  {
    method: 'Room Temperature (Ambient)',
    icon: '🌡️',
    temperature: '15°C – 22°C',
    duration: 'Up to 7 days (opened) / see pack for unopened',
    bestFor: 'Short-term use after opening, dry cool pantry or kitchen shelf',
    steps: [
      'Keep in original packaging or seal tightly after opening',
      'Store in a cool, dry place away from direct sunlight and heat sources',
      'Do not store near ovens, grills, or other heat-generating equipment',
      'Consume before the best-before date printed on the pack',
    ],
    warning: 'Not suitable for long-term storage. Ambient storage in warm kitchens or high-humidity environments significantly shortens shelf life.',
  },
  {
    method: 'Refrigerator (Chilled)',
    icon: '❄️',
    temperature: '+2°C – +4°C',
    duration: '2–4 weeks from opening / see pack for unopened',
    bestFor: 'Day-to-day foodservice use, opened packs, extending life after purchase',
    steps: [
      'Transfer to an airtight container or resealable bag after opening',
      'Ensure the packaging is sealed tightly to prevent drying out',
      'Store on a shelf rather than in the door — more stable temperature',
      'Keep away from strong-smelling foods to prevent odour transfer',
    ],
    warning: 'Chilled storage at temperatures above +5°C reduces effective shelf life. Check refrigerator calibration regularly.',
  },
  {
    method: 'Freezer',
    icon: '🧊',
    temperature: '−18°C or below',
    duration: 'Up to 6–9 months (home) / 9–12 months (commercial blast frozen)',
    bestFor: 'Long-term stock, bulk buying, export distribution, batch preparation',
    steps: [
      'For unopened commercial packs: transfer directly to freezer on receipt',
      'For opened packs: separate individual tortillas with parchment paper before freezing to prevent sticking',
      'Place in a freezer bag and remove as much air as possible before sealing',
      'Label with the freezing date',
      'Thaw in the refrigerator overnight — do not thaw at room temperature for food safety reasons',
      'Use within 3–5 days of thawing — do not refreeze',
    ],
    warning: 'Do not refreeze thawed tortillas. Once thawed, tortillas must be consumed within 3–5 days.',
  },
];

const faqs = [
  {
    question: 'How do you store corn tortillas?',
    answer:
      'Keep corn tortillas sealed in an airtight container or resealable bag in the refrigerator at +2–4°C, where they keep for up to 14 days — shorter than flour tortillas because corn tortillas contain no added fat to retain moisture. For longer storage, freeze at −18°C. Corn tortillas stiffen when cold, so warm them briefly on a dry pan or griddle before serving to restore pliability.',
  },
  {
    question: 'How do you store tortilla wraps?',
    answer:
      'Store tortilla wraps flat and sealed — never folded — in the refrigerator at +2–4°C for up to 21 days, or frozen at −18°C for longer storage. Large-format wraps crack along the fold line if they lose moisture, so keep the pack closed until the point of use and press out excess air before resealing.',
  },
  {
    question: 'How should I store tortillas after opening?',
    answer:
      'After opening, reseal the packaging tightly or transfer tortillas to an airtight container or resealable bag. Store in the refrigerator (2–4°C) for best results. Consumed within 3–5 days at room temperature, or within 2–3 weeks refrigerated.',
  },
  {
    question: 'Can you freeze flour tortillas?',
    answer:
      'Yes. Flour tortillas freeze very well. For home use, separate the tortillas with parchment paper to prevent sticking, place in a freezer bag, and freeze for up to 6 months. Thaw overnight in the refrigerator. Do not refreeze.',
  },
  {
    question: 'Can you freeze corn tortillas?',
    answer:
      'Yes. Corn tortillas can also be frozen. They are slightly more fragile after thawing than flour tortillas but still perform well for tacos and enchiladas. Separate with parchment paper before freezing. Thaw slowly in the refrigerator.',
  },
  {
    question: 'How do you thaw frozen tortillas?',
    answer:
      'The best method is to transfer the required quantity from the freezer to the refrigerator the evening before use and allow them to thaw overnight at +2–4°C. For quicker thawing, sealed packaging can be placed in cool water. Do not microwave thaw as this can make tortillas rubbery or cause hot spots.',
  },
  {
    question: 'Why do my tortillas dry out in the fridge?',
    answer:
      'Tortillas dry out in the refrigerator when they are not properly sealed. The refrigerator environment is typically dry and will draw moisture out of uncovered or loosely wrapped tortillas. Always store in an airtight container or tightly sealed bag to prevent this.',
  },
  {
    question: 'How long do tortillas last in the freezer?',
    answer:
      'Home-frozen commercially purchased tortillas maintain good quality for 3–6 months. Commercially blast-frozen tortillas (frozen immediately after baking under food safety conditions) last 9–12 months at −18°C. Quality slowly declines after the best-before date but safety is not compromised if the temperature has been maintained.',
  },
  {
    question: 'How should restaurants and foodservice operators store tortillas?',
    answer:
      'Foodservice operators should store unopened frozen tortillas at −18°C until required. Transfer to chilled storage (2–4°C) 12–24 hours before service to thaw. Keep thawed tortillas sealed at 2–4°C and use within 3–5 days. Never leave tortillas at ambient temperature for extended periods during service — use heated holders or warming equipment to maintain temperature in active service.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Store Tortillas',
  description: 'How to store flour and corn tortillas correctly using ambient, refrigerator, and freezer methods.',
  step: storageOptions.map((opt, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: opt.method,
    text: opt.steps.join(' '),
  })),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: `${BASE_URL}/how-to-store-tortillas`,
  publisher: { '@type': 'Organization', name: 'TortillaSupplier', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/how-to-store-tortillas` },
};

export default function HowToStoreTortillasPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={articleSchema} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tortilla Guide', href: '/tortilla-guide' },
          { label: 'How to Store Tortillas' },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Storage Guide</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl">
            How to Store Tortillas
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            Proper storage is the most important factor in maximising tortilla shelf life and quality.
            This guide covers ambient, refrigerator and freezer storage for flour tortillas, corn tortillas
            and tortilla wraps — for home users, foodservice operators and wholesale distributors.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Ambient · 7 days', 'Fridge · 2–3 weeks', 'Freezer · 9–12 months'].map((badge) => (
              <span key={badge} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Direct answer — kept first so search engines and AI assistants can lift it whole */}
          <div className="bg-[#f4f8f4] border border-[#d6e6d8] rounded-2xl p-6 sm:p-8 max-w-3xl">
            <h2 className="text-base font-bold text-gray-900 mb-3">Short answer</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Store tortillas sealed in an airtight container or resealable bag. In the refrigerator at
              <strong> +2–4°C</strong>, flour tortillas keep for up to <strong>21 days</strong> and corn tortillas
              for up to <strong>14 days</strong>. In the freezer at <strong>−18°C</strong>, both keep for
              <strong> 9–12 months</strong>. At ambient room temperature, use within <strong>7 days</strong> of
              opening. Never thaw frozen tortillas at room temperature — move them to chilled storage overnight
              instead.
            </p>
          </div>

          {/* Storage by tortilla type */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to Store Corn Tortillas, Flour Tortillas and Wraps
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-3xl">
              Storage life differs by tortilla type. Corn tortillas contain no added fat and lose moisture faster
              than flour tortillas, while large-format wraps and flatbreads crack if they dry out. The figures
              below are the chilled and frozen shelf lives we specify for our own production.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {storageByType.map((item) => (
                <div key={item.type} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">{item.type}</h3>
                  <dl className="space-y-2 mb-3">
                    <div className="flex items-baseline gap-2">
                      <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Chilled</dt>
                      <dd className="text-sm text-gray-900">{item.chilled}</dd>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Frozen</dt>
                      <dd className="text-sm text-gray-900">{item.frozen}</dd>
                    </div>
                  </dl>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Storage methods */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-8">Tortilla Storage Methods</h2>
            <div className="space-y-8">
              {storageOptions.map((opt, i) => (
                <div key={opt.method} className="grid sm:grid-cols-[160px_1fr] gap-6 items-start">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-center flex-shrink-0">
                    <div className="text-3xl mb-2">{opt.icon}</div>
                    <div className="text-xs font-bold text-gray-700">{opt.temperature}</div>
                    <div className="text-xs text-gray-400 mt-1">{opt.duration}</div>
                  </div>
                  <div className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      <span className="text-[#2d7a3a] mr-2">{String(i + 1).padStart(2, '0')}.</span>
                      {opt.method}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">Best for: {opt.bestFor}</p>
                    <ul className="space-y-1.5 mb-4">
                      {opt.steps.map((step) => (
                        <li key={step} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-[#2d7a3a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {step}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
                      <p className="text-xs text-orange-700">⚠ {opt.warning}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Foodservice storage best practices */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Foodservice Storage Best Practices</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Commercial foodservice operations require consistent tortilla quality across high service volumes.
              Poor storage practices — including temperature abuse, inadequate packaging, and incorrect thawing —
              are the primary causes of tortilla quality failures in restaurant and catering environments.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Frozen Tortilla Receiving',
                  body: 'Upon delivery, verify that frozen tortillas arrive at −18°C or below. Reject any delivery where the product temperature has exceeded −15°C. Record delivery temperatures in your temperature log.',
                },
                {
                  title: 'Cold Storage Management',
                  body: 'Store frozen tortillas at −18°C in a well-organised freezer. Rotate stock on a first-in, first-out (FIFO) basis. Check freezer temperature twice daily and log results.',
                },
                {
                  title: 'Thawing Protocol',
                  body: 'Transfer to chilled storage (2–4°C) the night before service. Never thaw at room temperature. Tortillas thawed at ambient temperature pass through the bacterial growth danger zone (8–63°C) for too long.',
                },
                {
                  title: 'In-Service Handling',
                  body: 'Keep thawed tortillas sealed and refrigerated until needed. During service, use insulated tortilla warmers or hot-hold equipment to maintain temperature. Discard any tortillas left unrefrigerated for more than 4 hours.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* B2B distribution storage */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Storage for Wholesale Distributors</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Wholesale distributors handling frozen tortilla imports must maintain an unbroken cold chain
              from the point of container receipt through to delivery to the end customer. Key requirements:
            </p>
            <ul className="space-y-3">
              {[
                'Cold store facility approved for food-grade frozen storage at −18°C',
                'Temperature monitoring and logging systems with alert capability for temperature deviations',
                'Dedicated frozen zone with clean separation from chilled and ambient products',
                'FIFO stock rotation with clear date labelling on all pallets and cases',
                'Refrigerated delivery vehicles for last-mile distribution',
                'Temperature records available for customer audit and regulatory inspection',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-[#2d7a3a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tortilla Storage: Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related links */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Tortilla Shelf Life', href: '/tortilla-shelf-life' },
                { label: 'Tortilla Guide', href: '/tortilla-guide' },
                { label: 'Tortilla Manufacturing Process', href: '/tortilla-manufacturing-process' },
                { label: 'Frozen Tortilla Supplier', href: '/frozen-tortilla-supplier' },
                { label: 'Export Programme', href: '/export-program' },
                { label: 'Tortilla Calories', href: '/tortilla-calories' },
                { label: 'Tortilla Size Chart', href: '/tortilla-size-chart' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-medium text-gray-700 rounded-full hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 bg-[#0a0a0a] rounded-2xl text-center">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Cold Chain Supply</p>
            <h3 className="text-xl font-bold text-white mb-2">Frozen Tortillas with Full Cold Chain Documentation</h3>
            <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
              Every container shipment includes temperature logs, health certificates, and storage instructions. 9–12 month shelf life at −18°C.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Request Pricing
              </Link>
              <Link href="/frozen-tortilla-supplier" className="px-5 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                Frozen Tortilla Supply
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
