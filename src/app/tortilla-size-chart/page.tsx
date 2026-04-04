import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ProductSpecTable from '@/components/ProductSpecTable';
import JsonLd from '@/components/JsonLd';

const BASE_URL = 'https://tortillasupplier.com';

export const metadata: Metadata = {
  title: { absolute: 'Tortilla Size Chart | Diameter Guide | TortillaSupplier' },
  description:
    'Complete tortilla size chart covering all standard diameters — 15cm to 30cm. Use cases by size for street tacos, wraps, burritos and foodservice operations.',
  openGraph: {
    title: 'Tortilla Size Chart | Diameter Guide | TortillaSupplier',
    description:
      'Complete tortilla size chart covering all standard diameters — 15cm to 30cm. Use cases by size for street tacos, wraps, burritos and foodservice operations.',
    url: `${BASE_URL}/tortilla-size-chart`,
  },
  alternates: { canonical: `${BASE_URL}/tortilla-size-chart` },
};

const sizeData = [
  {
    diameter: '15cm (6")',
    inches: '6 inches',
    type: 'Corn or Flour',
    useCase: 'Street tacos, appetisers, tasting menus',
    sector: 'Foodservice / QSR',
    slug: 'corn-tortilla-15cm-6-inch',
    label: 'Corn Tortilla 15cm',
    description:
      'The 15cm tortilla is the standard street taco format used across Mexican and Latin-inspired food concepts worldwide. Its small diameter allows two or three to be served per portion, making it ideal for casual dining, food trucks, and quick-service restaurant taco menus. It is also widely used as an appetiser base or canapé wrap in premium foodservice settings.',
  },
  {
    diameter: '20cm (8")',
    inches: '8 inches',
    type: 'Corn or Flour',
    useCase: 'Tacos, quesadillas, soft wraps, retail packs',
    sector: 'Retail / Foodservice',
    slug: 'corn-tortilla-20cm-8-inch',
    label: 'Corn / Flour Tortilla 20cm',
    description:
      'The 20cm format is one of the most versatile sizes in the tortilla category. Available in both flour and corn, it accommodates a wide range of fillings and is used across casual dining, home meal kits, and retail multi-packs. Corn tortilla 20cm is the standard quesadilla size in many restaurant chains; flour tortilla 20cm works well for wraps, soft tacos, and retail formats where a moderate portion size is preferred.',
  },
  {
    diameter: '25cm (10")',
    inches: '10 inches',
    type: 'Flour',
    useCase: 'Wraps, sandwich wraps, foodservice lines',
    sector: 'Foodservice / Retail / Deli',
    slug: 'flour-tortilla-25cm-10-inch',
    label: 'Flour Tortilla 25cm',
    description:
      'The 25cm flour tortilla is the dominant format in the European and UK foodservice wrap market. It is large enough to hold full sandwich fillings while remaining easy to fold and handle. This size is used extensively in deli counters, workplace catering, school meal programmes, and quick-service restaurants offering cold or hot wraps. It is also a popular retail format for supermarket multi-packs.',
  },
  {
    diameter: '30cm (12")',
    inches: '12 inches',
    type: 'Flour',
    useCase: 'Burritos, large wraps, QSR formats',
    sector: 'QSR / Foodservice',
    slug: 'flour-tortilla-30cm-12-inch',
    label: 'Flour Tortilla 30cm',
    description:
      'The 30cm tortilla is the standard burrito and large wrap format used by global QSR chains. At 12 inches, it accommodates generous rice, protein, and accompaniment portions without splitting. It is the preferred size for high-volume QSR operations where consistent fold performance and structural integrity under heat lamps or in warming equipment are critical.',
  },
];

const faqs = [
  {
    question: 'What are the standard tortilla sizes?',
    answer:
      'Standard tortilla diameters are 15cm (6"), 20cm (8"), 25cm (10"), and 30cm (12"). The 15cm size is used for street tacos; 20cm for quesadillas and soft tacos; 25cm for wraps and deli formats; and 30cm for burritos and large QSR wraps.',
  },
  {
    question: 'What size tortilla is used for burritos?',
    answer:
      'Burritos require a 30cm (12-inch) flour tortilla. This large diameter provides enough surface area to fully enclose generous fillings of rice, beans, protein, and sauces without the tortilla tearing.',
  },
  {
    question: 'What size tortilla is best for wraps?',
    answer:
      'The 25cm (10-inch) flour tortilla is the most common wrap format in the UK and European foodservice market. It offers a good balance between filling capacity and ease of folding for deli and catering use.',
  },
  {
    question: 'What size are street taco tortillas?',
    answer:
      'Authentic street taco tortillas are 15cm (6 inches) in diameter. They are almost always corn-based and are served two or three per portion, folded rather than rolled.',
  },
  {
    question: 'What is the difference between flour and corn tortilla sizes?',
    answer:
      'Corn tortillas are typically available in 15cm and 20cm diameters, as the corn masa dough does not stretch as easily as wheat dough and is traditionally used in smaller taco formats. Flour tortillas are produced in 20cm, 25cm, and 30cm sizes, covering a wider range of foodservice applications from quesadillas to burritos.',
  },
  {
    question: 'Are tortilla sizes available frozen?',
    answer:
      'Yes. All standard sizes are available in frozen formats with a 12-month shelf life at −18°C. Frozen tortillas in all diameters are suitable for export, long-haul distribution, and high-volume foodservice operations where consistent supply is needed.',
  },
  {
    question: 'What tortilla size do supermarkets and retailers stock?',
    answer:
      'Retailers most commonly stock the 25cm flour tortilla (10-inch, 6–8 per retail pack) and the 20cm corn tortilla (8-inch, 8–10 per pack). The 30cm size appears in some premium or ethnic food ranges. Private label options are available for all standard sizes.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const tableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tortilla Size Chart | Diameter Guide | TortillaSupplier',
  description:
    'Complete tortilla size chart covering all standard diameters — 15cm to 30cm. Use cases by size for street tacos, wraps, burritos and foodservice operations.',
  url: `${BASE_URL}/tortilla-size-chart`,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tortilla Size Chart', item: `${BASE_URL}/tortilla-size-chart` },
    ],
  },
};

export default function TortillaSizeChartPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={tableSchema} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tortilla Size Chart' },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Tortilla Sizes</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl">
            Tortilla Size Chart: Complete Diameter Guide
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            A complete reference guide to standard tortilla sizes — from 15cm street taco formats to 30cm burrito
            tortillas. Covers flour and corn varieties, typical weights, use cases by sector, and product links for
            wholesale sourcing.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['15cm · 6"', '20cm · 8"', '25cm · 10"', '30cm · 12"'].map((size) => (
              <span key={size} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                {size}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Quick reference table */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tortilla Sizes at a Glance</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Diameter</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Primary Use</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Sector</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {sizeData.map((row) => (
                    <tr key={row.diameter} className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-900">{row.diameter}</td>
                      <td className="px-4 py-3 text-gray-600">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600">{row.useCase}</td>
                      <td className="px-4 py-3 text-gray-600">{row.sector}</td>
                      <td className="px-4 py-3">
                        <Link href={`/${row.slug}`} className="text-[#2d7a3a] text-xs font-semibold hover:underline whitespace-nowrap">
                          View product →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Per-size deep dive */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-8">Tortilla Sizes Explained</h2>
            <div className="space-y-10">
              {sizeData.map((size) => (
                <div key={size.diameter} className="grid lg:grid-cols-[200px_1fr] gap-6 items-start">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center flex-shrink-0">
                    <div className="text-3xl font-black text-[#2d7a3a] mb-1">{size.diameter}</div>
                    <div className="text-xs text-gray-500">{size.type}</div>
                    <div className="mt-3 text-xs text-gray-400">{size.sector}</div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{size.label}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{size.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {size.useCase.split(', ').map((u) => (
                        <span key={u} className="px-2.5 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">{u}</span>
                      ))}
                    </div>
                    <Link
                      href={`/${size.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#2d7a3a] hover:underline"
                    >
                      View wholesale specs for {size.label} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full spec table */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Full Product Specification Table</h3>
            <p className="text-sm text-gray-500 mb-6">
              Weight, pack count, shelf life and private label availability for every standard tortilla and flatbread size.
            </p>
            <ProductSpecTable />
          </div>

          {/* Choosing the right size */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                heading: 'For Street Food & QSR Taco Menus',
                body: 'Use the 15cm corn tortilla. Two or three per serving is standard. Corn masa gives the authentic flavour and slightly firmer texture that holds up under heat-lamp service.',
              },
              {
                heading: 'For Quesadillas & Casual Dining',
                body: 'The 20cm format works for both corn and flour depending on your concept. Corn for traditional quesadillas; flour where a softer texture is preferred.',
              },
              {
                heading: 'For Deli Wraps & Catering',
                body: 'The 25cm flour tortilla is the UK and European standard for cold and hot wraps. It folds cleanly, holds well under refrigeration, and suits retail multi-pack formats.',
              },
              {
                heading: 'For Burritos & Large Wraps',
                body: 'The 30cm flour tortilla is the only viable burrito format at volume. It is the size used by major QSR chains globally and provides the surface area needed for generous portions.',
              },
              {
                heading: 'For Long-Haul Export & Distribution',
                body: 'All sizes are available frozen with a 12-month shelf life at −18°C. Frozen formats are recommended for export containers to the UK, USA, Australia, Canada and the Middle East.',
              },
              {
                heading: 'For Private Label & Retail',
                body: 'Private label is available across all sizes. We supply custom-branded packaging for retail, foodservice, and wholesale buyers. MOQ and lead times vary by format.',
              },
            ].map((card) => (
              <div key={card.heading} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{card.heading}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tortilla Sizes: Frequently Asked Questions</h2>
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
            <h3 className="text-base font-bold text-gray-900 mb-4">Related Guides & Product Pages</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Corn Tortilla 15cm (6")', href: '/corn-tortilla-15cm-6-inch' },
                { label: 'Corn Tortilla 20cm (8")', href: '/corn-tortilla-20cm-8-inch' },
                { label: 'Flour Tortilla 20cm (8")', href: '/flour-tortilla-20cm-8-inch' },
                { label: 'Flour Tortilla 25cm (10")', href: '/flour-tortilla-25cm-10-inch' },
                { label: 'Flour Tortilla 30cm (12")', href: '/flour-tortilla-30cm-12-inch' },
                { label: 'Street Taco Tortilla Wholesale', href: '/street-taco-tortilla-wholesale' },
                { label: 'Burrito Tortilla Supplier', href: '/burrito-tortilla-supplier' },
                { label: 'Bulk Tortilla Wraps', href: '/bulk-tortilla-wraps' },
                { label: 'Tortilla Guide', href: '/tortilla-guide' },
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
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Wholesale Supply</p>
            <h3 className="text-xl font-bold text-white mb-2">Source Any Tortilla Size at Wholesale Volume</h3>
            <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
              All sizes available in pallet and container quantities. Frozen formats export-ready with full cold-chain documentation.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                Request Pricing
              </Link>
              <Link
                href="/tortilla-supplier"
                className="px-5 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
