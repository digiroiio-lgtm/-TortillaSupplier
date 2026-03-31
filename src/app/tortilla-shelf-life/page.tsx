import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';

const BASE_URL = 'https://tortillasupplier.com';

export const metadata: Metadata = {
  title: { absolute: 'Tortilla Shelf Life Guide | TortillaSupplier' },
  description:
    'How long do tortillas last? Complete shelf life guide for flour, corn and frozen tortillas — ambient, chilled and frozen formats for foodservice and wholesale buyers.',
  openGraph: {
    title: 'Tortilla Shelf Life Guide | TortillaSupplier',
    description:
      'How long do tortillas last? Complete shelf life guide for flour, corn and frozen tortillas — ambient, chilled and frozen formats for foodservice and wholesale buyers.',
    url: `${BASE_URL}/tortilla-shelf-life`,
  },
  alternates: { canonical: `${BASE_URL}/tortilla-shelf-life` },
};

const shelfLifeData = [
  {
    format: 'Flour Tortilla — Chilled',
    shelfLife: '21 days',
    storage: '+2°C to +4°C',
    bestFor: 'Local retail, domestic foodservice',
    notes: 'Modified-atmosphere packaging extends life to the upper end of range.',
  },
  {
    format: 'Flour Tortilla — Ambient / MAP',
    shelfLife: '90–120 days',
    storage: 'Ambient (cool, dry)',
    bestFor: 'Domestic retail, mid-range distribution',
    notes: 'Nitrogen-flushed hermetic packaging required.',
  },
  {
    format: 'Flour Tortilla — Frozen',
    shelfLife: '9–12 months',
    storage: '−18°C',
    bestFor: 'International export, bulk stock',
    notes: 'Blast-frozen immediately after baking. Do not refreeze after thawing.',
  },
  {
    format: 'Corn Tortilla — Chilled',
    shelfLife: '10–14 days',
    storage: '+2°C to +4°C',
    bestFor: 'Local foodservice, short-cycle retail',
    notes: 'Corn tortillas have shorter ambient life than flour due to lower fat content.',
  },
  {
    format: 'Corn Tortilla — Frozen',
    shelfLife: '9–12 months',
    storage: '−18°C',
    bestFor: 'International export, bulk stock',
    notes: 'Frozen corn tortillas perform well in export distribution.',
  },
  {
    format: 'Wrap Flatbread — Frozen',
    shelfLife: '12 months',
    storage: '−18°C',
    bestFor: 'Foodservice, export, catering',
    notes: 'Higher fat content supports full 12-month frozen shelf life.',
  },
];

const faqs = [
  {
    question: 'How long do tortillas last?',
    answer:
      'It depends on the format. Chilled flour tortillas last 14–21 days. Ambient flour tortillas (in sealed MAP packaging) last 90–120 days. Frozen flour and corn tortillas last 9–12 months at −18°C.',
  },
  {
    question: 'How long do flour tortillas last once opened?',
    answer:
      'Once opened, flour tortillas should be stored in a sealed bag or airtight container in the refrigerator and consumed within 3–5 days. Exposure to air accelerates drying and mould growth.',
  },
  {
    question: 'How long do corn tortillas last?',
    answer:
      'Corn tortillas last 10–14 days refrigerated (chilled). Frozen corn tortillas have a shelf life of up to 12 months at −18°C. Corn tortillas have a shorter ambient shelf life than flour tortillas due to lower fat and emulsifier content.',
  },
  {
    question: 'Can you freeze tortillas to extend shelf life?',
    answer:
      'Yes. Both flour and corn tortillas freeze well. Home users can freeze commercially purchased tortillas with minimal quality loss. For wholesale distribution, tortillas are blast-frozen immediately after baking for optimal texture and shelf life preservation.',
  },
  {
    question: 'Do frozen tortillas go bad?',
    answer:
      'Frozen tortillas held at a constant −18°C will not "go bad" in the traditional sense within their stated shelf life. However, quality degrades slowly after the stated best-before date — texture may become more crumbly or dry. Always store at the correct temperature and consume before the best-before date.',
  },
  {
    question: 'What is the shelf life of tortillas for international export?',
    answer:
      'For international export, frozen tortillas are the standard format. They carry a 12-month shelf life at −18°C, providing sufficient time for ocean shipping (4–8 weeks transit), customs clearance, warehousing, and distribution to end customers.',
  },
  {
    question: 'Why do frozen tortillas last longer than fresh?',
    answer:
      'Freezing at −18°C halts microbial activity and enzymatic reactions that cause spoilage. Blast freezing immediately after baking also locks in the product structure and moisture content, preventing the quality degradation that occurs in chilled storage over time.',
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

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tortilla Shelf Life Guide',
  description:
    'How long do tortillas last? Complete shelf life guide for flour, corn and frozen tortillas for foodservice and wholesale buyers.',
  url: `${BASE_URL}/tortilla-shelf-life`,
  publisher: { '@type': 'Organization', name: 'TortillaSupplier', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/tortilla-shelf-life` },
};

export default function TortillaShelfLifePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tortilla Guide', href: '/tortilla-guide' },
          { label: 'Tortilla Shelf Life' },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Shelf Life Guide</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl">
            How Long Do Tortillas Last?
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            Shelf life varies significantly by tortilla type and storage format. Chilled flour tortillas last
            14–21 days; frozen formats extend that to 9–12 months. This guide covers every format — chilled,
            ambient, and frozen — for foodservice operators, distributors, and retail buyers.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Chilled: 14–21 days', 'Ambient: 90–120 days', 'Frozen: 9–12 months'].map((badge) => (
              <span key={badge} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Quick reference table */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tortilla Shelf Life at a Glance</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Format</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Shelf Life</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Storage Temp</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Best For</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {shelfLifeData.map((row) => (
                    <tr key={row.format} className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.format}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          row.shelfLife.includes('month')
                            ? 'bg-blue-50 text-blue-700'
                            : row.shelfLife.includes('90')
                              ? 'bg-green-50 text-green-700'
                              : 'bg-orange-50 text-orange-700'
                        }`}>
                          {row.shelfLife}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.storage}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.bestFor}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Chilled section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Chilled Tortillas: 14–21 Days</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Chilled flour tortillas — stored between +2°C and +4°C — have a shelf life of 14–21 days
                from production. This is the standard format for domestic UK and European retail, where
                rapid replenishment cycles make short shelf life manageable. Flour tortillas in modified-atmosphere
                (nitrogen-flushed) packaging tend to reach the upper end of this range.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Corn tortillas in chilled format have a shorter life of 10–14 days, as they contain
                lower fat and emulsifier levels than flour tortillas. For foodservice operations using
                chilled corn tortillas, weekly delivery is typically required.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Chilled distribution is only viable for relatively local supply chains — typically within
                the same country or region. Cross-border or international distribution using chilled formats
                leaves insufficient remaining shelf life after transit.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Ambient / MAP Tortillas: 90–120 Days</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Some flour tortilla formulations are designed for ambient shelf life of 90–120 days using
                hermetic sealed packaging with modified-atmosphere (nitrogen flush). These products use
                slightly different recipes — typically with higher emulsifier and pH management — to suppress
                mould growth at ambient temperature.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ambient tortillas are used in certain retail markets and in foodservice contexts where
                refrigeration is not available or practical. However, they are less common in the
                wholesale and international distribution market, where frozen formats are strongly preferred
                for their superior shelf life and product quality retention.
              </p>
            </div>
          </div>

          {/* Frozen section — most important for B2B */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Frozen Tortillas: 9–12 Months</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Frozen tortillas are the international distribution standard. Blast-frozen immediately after
              baking at −18°C, flour and corn tortillas achieve a shelf life of 9–12 months. This extended
              shelf life is what makes long-haul container shipping viable for wholesale importers in the
              UK, USA, Australia, Canada, the Middle East, and Asia.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A typical container order from a European manufacturer to Australia involves 4–6 weeks of
              ocean transit, followed by customs clearance (1–2 weeks), warehousing, and distribution.
              Only frozen formats carry sufficient remaining shelf life after this journey to provide a
              viable commercial window for the importer.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { label: 'Blast frozen after baking', desc: 'Locks in freshness, prevents ice crystal formation that would damage texture.' },
                { label: 'Constant −18°C required', desc: 'Temperature spikes above −15°C accelerate quality loss. Cold chain must be unbroken.' },
                { label: 'Do not refreeze', desc: 'Once thawed, tortillas should be used within 3–5 days and never refrozen.' },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="text-xs font-bold text-[#2d7a3a] mb-1">{item.label}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Factors affecting shelf life */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Factors That Affect Tortilla Shelf Life</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  factor: 'Storage Temperature',
                  body: 'The most critical variable. Temperature fluctuations in chilled or frozen storage accelerate microbial activity and physical degradation. Consistent temperature is essential for reaching the stated shelf life.',
                },
                {
                  factor: 'Packaging Integrity',
                  body: 'Hermetic seals, nitrogen flush, and moisture-barrier films all extend shelf life. Any puncture or seal failure immediately shortens the effective life of the product.',
                },
                {
                  factor: 'Tortilla Type',
                  body: 'Flour tortillas last longer than corn tortillas in chilled formats due to higher fat and emulsifier content. Frozen, both formats perform similarly at up to 12 months.',
                },
                {
                  factor: 'Recipe and Formulation',
                  body: 'Emulsifier type, pH control, water activity, and salt content all affect shelf life. BRCGS-certified manufacturers validate shelf life as part of new product development.',
                },
                {
                  factor: 'Production Standards',
                  body: 'Products manufactured under HACCP and BRCGS conditions with low ambient bioburden in the packaging area consistently achieve the upper end of stated shelf life ranges.',
                },
                {
                  factor: 'Distribution Handling',
                  body: 'Product handled roughly during transit may develop cracks or packaging damage that accelerates spoilage. Proper palletisation and load securing are important shelf life factors.',
                },
              ].map((item) => (
                <div key={item.factor} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{item.factor}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tortilla Shelf Life: Frequently Asked Questions</h2>
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
                { label: 'How to Store Tortillas', href: '/how-to-store-tortillas' },
                { label: 'Tortilla Guide', href: '/tortilla-guide' },
                { label: 'Tortilla Size Chart', href: '/tortilla-size-chart' },
                { label: 'Tortilla Manufacturing Process', href: '/tortilla-manufacturing-process' },
                { label: 'Frozen Tortilla Supplier', href: '/frozen-tortilla-supplier' },
                { label: 'Export Programme', href: '/export-program' },
                { label: 'Tortilla Calories', href: '/tortilla-calories' },
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
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Frozen Tortilla Supply</p>
            <h3 className="text-xl font-bold text-white mb-2">Need 12-Month Shelf Life for International Distribution?</h3>
            <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
              Our frozen tortillas are blast-frozen at −18°C with a 12-month shelf life. Container-ready with full cold-chain export documentation.
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
