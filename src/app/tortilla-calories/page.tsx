import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';

const BASE_URL = 'https://tortillasupplier.com';

export const metadata: Metadata = {
  title: { absolute: 'Tortilla Calories: Nutrition Guide | TortillaSupplier' },
  description:
    'How many calories in a tortilla? Flour vs corn tortilla calories by size — 6", 8", 10", 12". Nutrition facts for foodservice buyers and retail planners.',
  openGraph: {
    title: 'Tortilla Calories: Nutrition Guide | TortillaSupplier',
    description:
      'How many calories in a tortilla? Flour vs corn tortilla calories by size — 6", 8", 10", 12". Nutrition facts for foodservice buyers and retail planners.',
    url: `${BASE_URL}/tortilla-calories`,
  },
  alternates: { canonical: `${BASE_URL}/tortilla-calories` },
};

const flourCalories = [
  { size: '20cm (8")', weightG: 35, calories: 105, carbs: '18g', fat: '2.5g', protein: '2.5g', fibre: '0.8g', sodium: '170mg' },
  { size: '25cm (10")', weightG: 50, calories: 150, carbs: '26g', fat: '3.5g', protein: '3.5g', fibre: '1.1g', sodium: '240mg' },
  { size: '30cm (12")', weightG: 65, calories: 195, carbs: '34g', fat: '4.5g', protein: '4.5g', fibre: '1.4g', sodium: '310mg' },
];

const cornCalories = [
  { size: '15cm (6")', weightG: 25, calories: 55, carbs: '11g', fat: '0.8g', protein: '1.4g', fibre: '1.5g', sodium: '45mg' },
  { size: '20cm (8")', weightG: 40, calories: 88, carbs: '18g', fat: '1.3g', protein: '2.3g', fibre: '2.4g', sodium: '72mg' },
];

const faqs = [
  {
    question: 'How many calories are in a flour tortilla?',
    answer:
      'A standard 8-inch (20cm) flour tortilla contains approximately 100–110 calories. A 10-inch (25cm) tortilla contains around 140–160 calories. A large 12-inch (30cm) burrito tortilla contains approximately 190–210 calories. Exact figures vary by recipe and manufacturer.',
  },
  {
    question: 'How many calories are in a corn tortilla?',
    answer:
      'A 6-inch (15cm) corn tortilla contains approximately 50–60 calories. An 8-inch (20cm) corn tortilla contains approximately 80–95 calories. Corn tortillas are lower in calories than flour tortillas of the same size, primarily due to lower fat content.',
  },
  {
    question: 'Are corn tortillas healthier than flour tortillas?',
    answer:
      'Corn tortillas are generally lower in calories, fat, and sodium than flour tortillas of a similar size. They are also naturally gluten-free and higher in fibre. Flour tortillas have a softer texture, longer shelf life, and are more versatile for wraps and burritos. The "healthier" choice depends on dietary requirements and use context.',
  },
  {
    question: 'Are tortillas high in carbs?',
    answer:
      'Yes — tortillas are a carbohydrate-dense food. A 10-inch flour tortilla contains approximately 25–27g of carbohydrates. Corn tortillas have slightly fewer carbs per unit due to their smaller standard size. Low-carb tortilla formulations are available in the retail market but are not standard in wholesale foodservice supply.',
  },
  {
    question: 'Are tortillas gluten-free?',
    answer:
      'Corn tortillas made from 100% corn masa are naturally gluten-free. Flour tortillas contain wheat flour and are not suitable for coeliacs or those with wheat allergies. Always check the allergen declaration and check for cross-contamination warnings if purchasing for gluten-free use.',
  },
  {
    question: 'How much sodium is in a tortilla?',
    answer:
      'Flour tortillas contain approximately 170–310mg of sodium depending on size. Corn tortillas are significantly lower in sodium — typically 45–75mg per tortilla. Buyers sourcing for reduced-sodium menus should request product technical datasheets from their supplier.',
  },
  {
    question: 'Do tortillas contain allergens?',
    answer:
      'Flour tortillas contain wheat (gluten) and may contain milk, soya, and sesame depending on the recipe. Corn tortillas are typically free from the major allergens but should be checked for cross-contamination in the manufacturing environment. All commercially manufactured tortillas must carry full allergen labelling under EU and UK food law.',
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
  headline: 'Tortilla Calories: Complete Nutrition Guide',
  description:
    'How many calories in a tortilla? Flour vs corn tortilla calories by size with full nutrition facts.',
  url: `${BASE_URL}/tortilla-calories`,
  publisher: { '@type': 'Organization', name: 'TortillaSupplier', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/tortilla-calories` },
};

export default function TortillaCaloriesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tortilla Guide', href: '/tortilla-guide' },
          { label: 'Tortilla Calories' },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Nutrition Guide</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl">
            How Many Calories Are in a Tortilla?
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            Tortilla calorie content varies by type and size. A standard 8-inch flour tortilla contains around
            105 calories. Corn tortillas are lower, averaging 55–90 calories depending on diameter. This guide
            covers flour and corn tortilla calories by size, with full nutrition facts for foodservice planners
            and retail buyers.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Flour: 105–195 kcal', 'Corn: 55–88 kcal', 'Gluten-free: corn only'].map((badge) => (
              <span key={badge} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Flour tortilla calories table */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Flour Tortilla Calories by Size</h2>
            <p className="text-sm text-gray-500 mb-5">
              Per-tortilla nutrition estimates for standard commercial flour tortilla sizes. Exact values vary by recipe.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Weight</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Calories</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Carbs</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Fat</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Protein</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Fibre</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Sodium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {flourCalories.map((row) => (
                    <tr key={row.size} className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-900">{row.size}</td>
                      <td className="px-4 py-3 text-gray-600">{row.weightG}g</td>
                      <td className="px-4 py-3">
                        <span className="font-bold text-gray-900">{row.calories}</span>
                        <span className="text-gray-400 text-xs ml-0.5">kcal</span>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{row.carbs}</td>
                      <td className="px-4 py-3 text-gray-600">{row.fat}</td>
                      <td className="px-4 py-3 text-gray-600">{row.protein}</td>
                      <td className="px-4 py-3 text-gray-600">{row.fibre}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.sodium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Values are indicative estimates per standard commercial recipe. Request product-specific technical datasheets for exact figures.
            </p>
          </div>

          {/* Corn tortilla calories table */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Corn Tortilla Calories by Size</h2>
            <p className="text-sm text-gray-500 mb-5">
              Per-tortilla nutrition estimates for standard corn tortilla sizes. Corn tortillas are naturally gluten-free.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Weight</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Calories</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Carbs</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Fat</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Protein</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Fibre</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Sodium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {cornCalories.map((row) => (
                    <tr key={row.size} className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-900">{row.size}</td>
                      <td className="px-4 py-3 text-gray-600">{row.weightG}g</td>
                      <td className="px-4 py-3">
                        <span className="font-bold text-gray-900">{row.calories}</span>
                        <span className="text-gray-400 text-xs ml-0.5">kcal</span>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{row.carbs}</td>
                      <td className="px-4 py-3 text-gray-600">{row.fat}</td>
                      <td className="px-4 py-3 text-gray-600">{row.protein}</td>
                      <td className="px-4 py-3 text-gray-600">{row.fibre}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.sodium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Values are indicative estimates per standard commercial recipe.
            </p>
          </div>

          {/* Flour vs Corn comparison */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Flour vs Corn Tortillas: Nutritional Comparison</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Flour Tortillas</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Higher calories per unit (due to fat content)</li>
                  <li>More fat (shortening or vegetable oil in recipe)</li>
                  <li>Higher sodium (salt + leavening agents)</li>
                  <li>Lower fibre per unit than corn</li>
                  <li>Contains wheat (gluten) — not suitable for coeliacs</li>
                  <li>Softer, more pliable — better for wraps and burritos</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Corn Tortillas</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Lower calories per unit (less fat in masa)</li>
                  <li>Very low fat content</li>
                  <li>Significantly lower sodium</li>
                  <li>Higher fibre per gram</li>
                  <li>Naturally gluten-free (check for cross-contamination)</li>
                  <li>Firmer texture — traditional for tacos and enchiladas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why nutrition matters for B2B buyers */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Why Tortilla Nutrition Matters for Foodservice Buyers</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Foodservice operators, school caterers, and retail buyers increasingly require accurate
              nutritional data for menu labelling compliance. In the UK, mandatory calorie labelling legislation
              (applicable to businesses with 250+ employees) requires energy values in kcal to be displayed
              on non-prepacked food. For retail buyers in the EU and UK, full nutritional declarations per
              100g are required on packaging under EU Food Information Regulation 1169/2011.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Our product technical datasheets include full nutritional declarations (energy, fat, saturates,
              carbohydrates, sugars, fibre, protein, salt) per 100g and per serving, suitable for direct
              use in menu labelling systems or retail packaging artwork.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link href="/contact" className="text-sm font-semibold text-[#2d7a3a] hover:underline">
                Request product technical datasheets →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tortilla Calories: Frequently Asked Questions</h2>
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
                { label: 'Tortilla Guide', href: '/tortilla-guide' },
                { label: 'Tortilla Size Chart', href: '/tortilla-size-chart' },
                { label: 'Tortilla Shelf Life', href: '/tortilla-shelf-life' },
                { label: 'How to Store Tortillas', href: '/how-to-store-tortillas' },
                { label: 'Corn Tortilla Supplier', href: '/corn-tortilla-supplier' },
                { label: 'Flour Tortilla Supplier', href: '/flour-tortilla-supplier' },
                { label: 'Corn Tortilla 15cm', href: '/corn-tortilla-15cm-6-inch' },
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
            <h3 className="text-xl font-bold text-white mb-2">Request Full Nutritional Datasheets</h3>
            <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
              Full technical datasheets with nutritional declarations available on request. Flour and corn tortillas for wholesale and retail buyers.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Request Datasheets
              </Link>
              <Link href="/tortilla-supplier" className="px-5 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
