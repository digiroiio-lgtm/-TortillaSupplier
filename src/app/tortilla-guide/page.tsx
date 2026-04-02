import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';

const BASE_URL = 'https://tortillasupplier.com';

export const metadata: Metadata = {
  title: { absolute: 'The Complete Tortilla Guide | TortillaSupplier' },
  description:
    'The complete guide to tortillas for wholesale buyers: types, sizes, flour vs corn, fresh vs frozen, foodservice applications, supplier selection and import logistics.',
  openGraph: {
    title: 'The Complete Tortilla Guide | TortillaSupplier',
    description:
      'The complete guide to tortillas for wholesale buyers: types, sizes, flour vs corn, fresh vs frozen, foodservice applications, supplier selection and import logistics.',
    url: `${BASE_URL}/tortilla-guide`,
  },
  alternates: { canonical: `${BASE_URL}/tortilla-guide` },
};

const tableOfContents = [
  { id: 'what-is-a-tortilla', label: 'What Is a Tortilla?' },
  { id: 'types-of-tortillas', label: 'Types of Tortillas' },
  { id: 'tortilla-sizes', label: 'Tortilla Sizes and Formats' },
  { id: 'flour-vs-corn', label: 'Flour vs Corn Tortillas' },
  { id: 'fresh-vs-frozen', label: 'Fresh vs Frozen Tortillas' },
  { id: 'foodservice-applications', label: 'Foodservice Applications' },
  { id: 'retail-distribution', label: 'Retail and Distribution' },
  { id: 'private-label', label: 'Private Label Tortillas' },
  { id: 'how-tortillas-are-made', label: 'How Tortillas Are Made' },
  { id: 'import-logistics', label: 'Import and Distribution Logistics' },
  { id: 'choosing-a-supplier', label: 'Choosing a Wholesale Tortilla Supplier' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const faqs = [
  {
    question: 'What is the difference between a tortilla and a wrap?',
    answer:
      'A tortilla is a thin, round flatbread made from wheat flour or corn masa. A wrap is a culinary format — a filled and rolled tortilla. The terms are often used interchangeably in foodservice contexts, but technically the tortilla is the bread and the wrap is the finished product.',
  },
  {
    question: 'How long do tortillas last?',
    answer:
      'Ambient/chilled flour tortillas last 14–21 days from production. Chilled corn tortillas last 10–14 days. Frozen tortillas — the standard for international distribution — have a 9–12 month shelf life at −18°C.',
  },
  {
    question: 'Can tortillas be frozen?',
    answer:
      'Yes. All flour and corn tortillas can be frozen. Commercially manufactured frozen tortillas are blast-frozen immediately after baking to lock in quality. Home users can freeze supermarket tortillas with minimal quality loss. Frozen tortillas for export are the industry standard for long-haul international supply.',
  },
  {
    question: 'What size tortilla should I order for my restaurant?',
    answer:
      'This depends on your menu. For street tacos, order 15cm corn tortillas. For quesadillas, 20cm corn or flour. For wraps and sandwiches, 25cm flour. For burritos, 30cm flour. A wholesale supplier can provide sample packs across sizes to help you evaluate before placing a full order.',
  },
  {
    question: 'What is the minimum order quantity for wholesale tortillas?',
    answer:
      'Minimum order quantities vary by supplier. Pallet-level orders start from approximately 1,000–2,000 cases depending on product type. Container-volume orders (20ft or 40ft reefer) are the standard for international distributors and importers. Contact our export team for current container pricing and lead times.',
  },
  {
    question: 'Are tortillas suitable for halal and vegan diets?',
    answer:
      'Most commercially manufactured flour and corn tortillas are suitable for both halal and vegan diets. Flour tortillas traditionally contain vegetable shortening or oil rather than animal fat. Halal certification is available from certified manufacturing facilities. Always check product ingredient lists as formulations vary by supplier.',
  },
  {
    question: 'What certifications should a tortilla supplier hold?',
    answer:
      'For export to major Western markets, a wholesale tortilla supplier should hold BRCGS (required for UK and most European retail), IFS (required for German, French and Italian retailers), ISO 22000, and HACCP certification. For Middle Eastern and Southeast Asian markets, halal certification is essential.',
  },
  {
    question: 'What is private label tortilla manufacturing?',
    answer:
      'Private label tortilla manufacturing is where a certified manufacturer produces tortillas packed under your brand name rather than theirs. The manufacturer handles production, quality control, and export documentation. The distributor or retailer markets the product under their own branding. Private label enables retailers and distributors to build their own tortilla brand without investing in production infrastructure.',
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
  headline: 'The Complete Tortilla Guide for Wholesale Buyers',
  description:
    'The complete guide to tortillas for wholesale buyers: types, sizes, flour vs corn, fresh vs frozen, foodservice applications, supplier selection and import logistics.',
  url: `${BASE_URL}/tortilla-guide`,
  publisher: { '@type': 'Organization', name: 'TortillaSupplier', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/tortilla-guide` },
};

export default function TortillaGuidePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tortilla Guide' },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Complete Guide</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl">
            The Complete Tortilla Guide for Wholesale Buyers
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            Everything distributors, importers, foodservice operators and retail buyers need to know about
            tortillas — from types and sizes through manufacturing, cold-chain logistics, private label, and
            supplier selection.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Types', 'Sizes', 'Flour vs Corn', 'Frozen', 'Foodservice', 'Private Label', 'Import'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Guide Hub cluster navigation — visible before the main content grid */}
          <div className="mb-12 p-6 bg-gray-50 border border-gray-200 rounded-2xl">
            <p className="text-xs font-bold text-[#2d7a3a] uppercase tracking-widest mb-3">Guide Cluster</p>
            <p className="text-sm text-gray-600 mb-5">This hub links to all detailed tortilla guides. Select a topic to jump directly to the relevant guide page.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: 'Tortilla Size Chart', href: '/tortilla-size-chart', desc: 'All standard diameters — 15cm to 30cm, use cases and spec table.' },
                { label: 'Tortilla Shelf Life', href: '/tortilla-shelf-life', desc: 'How long do tortillas last? Chilled, ambient and frozen formats.' },
                { label: 'Tortilla Calories', href: '/tortilla-calories', desc: 'Calories by size and type. Full nutrition facts for flour and corn.' },
                { label: 'How to Store Tortillas', href: '/how-to-store-tortillas', desc: 'Ambient, fridge and freezer storage guide for foodservice and retail.' },
                { label: 'Manufacturing Process', href: '/tortilla-manufacturing-process', desc: '10-step guide to how tortillas are made at industrial scale.' },
                { label: 'Wholesale Tortilla Supplier', href: '/tortilla-supplier', desc: 'BRCGS-certified manufacturer for container and pallet supply.' },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex flex-col bg-white border border-gray-200 rounded-xl p-4 hover:border-[#2d7a3a] hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-[#2d7a3a] transition-colors mb-1">{card.label}</span>
                  <span className="text-xs text-gray-500 leading-relaxed">{card.desc}</span>
                  <span className="mt-2 text-xs font-semibold text-[#2d7a3a] opacity-0 group-hover:opacity-100 transition-opacity">Read guide →</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">

            {/* Table of contents sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-6 bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Contents</p>
                <nav>
                  <ol className="space-y-1.5">
                    {tableOfContents.map((item, i) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="flex items-start gap-2 text-sm text-gray-600 hover:text-[#2d7a3a] transition-colors leading-snug"
                        >
                          <span className="text-gray-400 text-xs font-mono flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
                <div className="mt-6 pt-5 border-t border-gray-200">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Related Guides</p>
                  <ul className="space-y-2">
                    {[
                      { label: 'Tortilla Size Chart', href: '/tortilla-size-chart' },
                      { label: 'Tortilla Shelf Life', href: '/tortilla-shelf-life' },
                      { label: 'Tortilla Calories', href: '/tortilla-calories' },
                      { label: 'How to Store Tortillas', href: '/how-to-store-tortillas' },
                      { label: 'Manufacturing Process', href: '/tortilla-manufacturing-process' },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-xs text-gray-500 hover:text-[#2d7a3a] transition-colors">
                          {link.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <article className="space-y-14 max-w-3xl">

              {/* Section 1 */}
              <section id="what-is-a-tortilla">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Tortilla?</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  A tortilla is a thin, round, unleavened flatbread that originated in Mesoamerica and is now
                  one of the most widely consumed bread formats in the world. Traditionally made from corn masa
                  — ground, nixtamalized corn — the tortilla has been a staple food of Mexico and Central America
                  for thousands of years. The flour tortilla, made with wheat flour, is a later development
                  originating in the northern Mexican states where wheat was cultivated following Spanish colonisation.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Today, tortillas are produced commercially at enormous scale. Global tortilla production
                  generates billions of units annually, driven by the worldwide expansion of Mexican cuisine,
                  the rise of the wrap format in European and Asian foodservice, and the growth of tortilla-based
                  snack products. The United States is the largest single market, but the UK, Germany, Australia,
                  Canada and the Gulf states have all seen significant growth in tortilla consumption over the
                  past decade.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For wholesale buyers — distributors, importers, foodservice operators, and retail chains —
                  the tortilla represents one of the fastest-growing categories in the flatbread and wrap segment.
                  Understanding the product range, format options, and supply chain requirements is essential
                  for making sound sourcing decisions.
                </p>
              </section>

              {/* Section 2 */}
              <section id="types-of-tortillas">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Tortillas</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  There are two principal types of tortilla — flour and corn — plus a range of derivative
                  formats including wraps, flatbreads, and specialty tortillas. Each type has distinct
                  characteristics, applications, and supply chain requirements.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      type: 'Flour Tortillas',
                      body: 'Made from wheat flour, fat, salt, and leavening agents. Flour tortillas have a soft, pliable texture and a slightly chewy bite that allows them to be folded, rolled, and held under heat without tearing. They are the dominant format in the European wrap market and the standard for burritos, quesadillas, and foodservice wraps globally. Available in 20cm, 25cm, and 30cm diameters.',
                      link: '/flour-tortilla-supplier',
                      linkLabel: 'Flour Tortilla Supplier',
                    },
                    {
                      type: 'Corn Tortillas',
                      body: 'Made from masa harina — nixtamalized corn flour. Corn tortillas have a slightly firmer, more granular texture than flour tortillas and a characteristic corn flavour. They are used for traditional tacos, enchiladas, tostadas, and as a base for many Mexican and Latin-inspired dishes. Less extensible than flour tortillas and more prone to tearing if overfilled. Available in 15cm and 20cm diameters.',
                      link: '/corn-tortilla-supplier',
                      linkLabel: 'Corn Tortilla Supplier',
                    },
                    {
                      type: 'Wrap Flatbreads',
                      body: 'A flour-based product developed for the European and UK foodservice market. Wrap flatbreads are slightly thinner and more pliable than standard flour tortillas, with a neutral flavour profile that suits a wider range of fillings — from falafel wraps to chicken and avocado sandwich wraps. The 25cm and 30cm formats are standard in deli counters, catering, and QSR wrap concepts.',
                      link: '/wrap-bread-supplier',
                      linkLabel: 'Wrap Bread Supplier',
                    },
                    {
                      type: 'Lavash and Flatbreads',
                      body: 'Thin, slightly crisp flatbreads used in kebab, shawarma, and wrap applications. Lavash-style flatbreads are popular in the Middle East, Eastern Europe, and increasingly in Western foodservice as part of the street food wrap trend. They are thinner than standard flour tortillas and have a distinct laminated texture. Available in round and rectangular formats.',
                      link: '/flatbread-supplier',
                      linkLabel: 'Flatbread Supplier',
                    },
                    {
                      type: 'Frozen Tortillas',
                      body: 'Not a distinct product type, but a supply format. All flour and corn tortilla types are available frozen with a 12-month shelf life at −18°C. Frozen formats are the international distribution standard for cross-border wholesale supply, enabling importers in the UK, Australia, Canada, the Middle East and elsewhere to receive container shipments without chilled logistics constraints.',
                      link: '/frozen-tortilla-supplier',
                      linkLabel: 'Frozen Tortilla Supplier',
                    },
                  ].map((item) => (
                    <div key={item.type} className="border-l-2 border-[#2d7a3a]/30 pl-5">
                      <h3 className="text-base font-bold text-gray-900 mb-2">{item.type}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.body}</p>
                      <Link href={item.link} className="text-xs font-semibold text-[#2d7a3a] hover:underline">
                        {item.linkLabel} →
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3 */}
              <section id="tortilla-sizes">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tortilla Sizes and Formats</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Tortillas are produced in a range of standard diameters, each associated with specific
                  applications. Selecting the correct size is critical for foodservice portion consistency,
                  retail pack appeal, and operational efficiency.
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Format</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Application</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Sector</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { size: '15cm (6")', format: 'Corn', application: 'Street tacos, appetisers', sector: 'Foodservice / QSR' },
                        { size: '20cm (8")', format: 'Corn or Flour', application: 'Quesadillas, soft tacos', sector: 'Foodservice / Retail' },
                        { size: '25cm (10")', format: 'Flour / Wrap', application: 'Wraps, deli sandwiches', sector: 'Foodservice / Retail / Deli' },
                        { size: '30cm (12")', format: 'Flour', application: 'Burritos, large QSR wraps', sector: 'QSR / Foodservice' },
                      ].map((row) => (
                        <tr key={row.size} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 font-semibold text-gray-900">{row.size}</td>
                          <td className="px-4 py-3 text-gray-600">{row.format}</td>
                          <td className="px-4 py-3 text-gray-600">{row.application}</td>
                          <td className="px-4 py-3 text-gray-600">{row.sector}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  The 25cm flour tortilla is the single largest volume SKU in the European market, driven
                  by the wrap sandwich category. The 30cm burrito format has grown significantly with the
                  global expansion of Mexican-inspired QSR chains. The 15cm corn format has found a second
                  wind through the street food boom and the growth of taqueria-style restaurant concepts
                  across Europe, Australia and Asia.
                </p>
                <Link href="/tortilla-size-chart" className="text-sm font-semibold text-[#2d7a3a] hover:underline">
                  View the complete tortilla size chart →
                </Link>
              </section>

              {/* Section 4 */}
              <section id="flour-vs-corn">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Flour vs Corn Tortillas</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  The choice between flour and corn tortillas depends on the intended application, target
                  market, and consumer preference. Both have distinct properties that make them suited to
                  different uses.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                    <h3 className="text-sm font-bold text-gray-900 mb-3">Flour Tortillas</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>Soft, pliable, easily folded without tearing</li>
                      <li>Neutral wheat flavour suits diverse fillings</li>
                      <li>Larger diameter range (20–30cm)</li>
                      <li>Preferred for wraps, burritos, quesadillas</li>
                      <li>Longer ambient shelf life (with MAP packaging)</li>
                      <li>Dominant in UK, European, and Australian markets</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                    <h3 className="text-sm font-bold text-gray-900 mb-3">Corn Tortillas</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>Firmer texture, slightly granular bite</li>
                      <li>Distinctive corn flavour — essential for authenticity</li>
                      <li>Smaller diameter range (15–20cm)</li>
                      <li>Preferred for tacos, enchiladas, tostadas</li>
                      <li>Shorter ambient shelf life, more fragile handling</li>
                      <li>Growing globally with authentic Mexican food trend</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  From a wholesale distribution perspective, flour tortillas are the higher volume product
                  globally. However, corn tortillas command a premium in authenticity-focused foodservice
                  concepts and in markets with large Mexican or Latin American diaspora populations. Many
                  wholesale buyers source both formats to serve different customer segments within their
                  distribution network.
                </p>
              </section>

              {/* Section 5 */}
              <section id="fresh-vs-frozen">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Fresh vs Frozen Tortillas</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  The distinction between chilled/ambient and frozen tortillas is critical for international
                  wholesale buyers. It determines logistics requirements, shelf life management, and
                  distribution economics.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-900">Chilled and ambient tortillas</strong> have a shelf life
                  of 14–21 days and are distributed via chilled or temperature-controlled logistics networks.
                  They are the standard format for domestic distribution within the UK, USA, and Western Europe
                  where rapid retail replenishment is possible. However, they are impractical for cross-border
                  distribution over long distances, as lead times consume the majority of available shelf life
                  before the product reaches the consumer.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-900">Frozen tortillas</strong> have a shelf life of 9–12 months
                  at −18°C and are distributed via refrigerated container (reefer) logistics. They are the
                  dominant format for international wholesale distribution — used by importers in Australia,
                  Canada, the Middle East, Japan, Southeast Asia, and Eastern Europe. Frozen formats allow
                  distributors to receive full container orders (20ft or 40ft reefer) and manage inventory
                  over extended periods without the risk of spoilage.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  In foodservice applications, frozen tortillas are also preferred by high-volume operators
                  who value consistent supply and reduced waste. A restaurant chain operating across multiple
                  sites can maintain frozen stock of standard SKUs across all locations without the
                  replenishment frequency required for chilled products.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The quality difference between correctly blast-frozen tortillas and fresh tortillas is
                  minimal when the cold chain is maintained. The key variable is thaw management at the
                  point of use — tortillas should be thawed at refrigerator temperature (2–4°C) overnight
                  rather than at room temperature to maintain texture quality.
                </p>
              </section>

              {/* Section 6 */}
              <section id="foodservice-applications">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Foodservice Applications</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Tortillas are one of the most versatile food formats in commercial kitchens. Their
                  neutral flavour base, structural flexibility, and range of available sizes make them
                  suitable across a wide range of foodservice concepts and menu formats.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      sector: 'Quick Service Restaurants (QSR)',
                      uses: 'Burritos (30cm flour), soft tacos (15–20cm corn), wraps, quesadillas. Major chains standardise on 2–3 SKUs across all sites, ordering by the container.',
                    },
                    {
                      sector: 'Casual Dining',
                      uses: 'Street taco plates (15cm corn), quesadilla starters, fajita sets (20cm flour), burrito bowls with 25cm wraps. Mix of corn and flour across menu items.',
                    },
                    {
                      sector: 'Deli and Café',
                      uses: 'Cold wraps in 25cm flour format are the dominant deli sandwich format in the UK and increasingly in continental Europe. Also used in hot press panini-style operations.',
                    },
                    {
                      sector: 'Contract and Workplace Catering',
                      uses: 'High-volume wrap production using 25cm flour tortillas. Often sourced frozen to manage stock levels across multiple catering sites with variable demand.',
                    },
                    {
                      sector: 'Food Service Distribution',
                      uses: 'Foodservice distributors carry tortillas as a standard category alongside bakery and dry goods. Frozen formats preferred for operational efficiency and to service multiple operator types from one SKU.',
                    },
                    {
                      sector: 'School and Institutional Catering',
                      uses: '20cm flour and corn tortillas for taco days and wrap menus. Nutritional requirements and allergen labelling compliance are key considerations for this sector.',
                    },
                  ].map((item) => (
                    <div key={item.sector} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <h3 className="text-xs font-bold text-gray-900 mb-2">{item.sector}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.uses}</p>
                    </div>
                  ))}
                </div>
                <Link href="/tortilla-foodservice-supplier" className="text-sm font-semibold text-[#2d7a3a] hover:underline">
                  View Foodservice Tortilla Supply options →
                </Link>
              </section>

              {/* Section 7 */}
              <section id="retail-distribution">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Retail and Distribution</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  In retail, tortillas are merchandised as a standalone bakery product, as part of meal-kit
                  components, and increasingly as an ethnic foods staple in mainstream supermarkets. The
                  standard retail SKU is a pack of 6–10 flour tortillas (25cm) or 8–12 corn tortillas (20cm)
                  in modified-atmosphere packaging. Retail shelf life is typically 14–21 days from production
                  for ambient/chilled formats.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  For importers and retail distributors, the logistics model depends on the target market.
                  UK and European retailers with established chilled supply chains can source from nearby
                  manufacturers on a weekly replenishment cycle. Distributors supplying markets in Australia,
                  Canada, the Middle East, or Southeast Asia will almost always import frozen to manage the
                  lead time economics of container shipping.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pallet ordering is the minimum practical purchase unit for serious wholesale buyers.
                  A standard pallet of flour tortillas (25cm, 12 per pack) typically contains 80–120 cases.
                  Container orders range from a single 20ft reefer (approximately 800–1,000 cases) to full
                  40ft reefer containers for high-volume buyers.
                </p>
              </section>

              {/* Section 8 */}
              <section id="private-label">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Private Label Tortillas</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Private label tortilla manufacturing is a well-established model used by supermarket chains,
                  foodservice distributors, and specialist food importers around the world. Under a private label
                  arrangement, a certified manufacturer produces tortillas to the buyer&apos;s specification and
                  packages them under the buyer&apos;s brand name.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  The advantages for the buyer are significant. Private label enables retailers and distributors
                  to capture higher margins than with branded products, build customer loyalty to their own range,
                  and control product specification (size, flavour profile, ingredient standard) to suit their
                  market. For importers, private label is also a competitive differentiator — particularly in
                  markets where the tortilla category is still developing and national brand presence is limited.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Private label tortilla orders typically require a minimum order quantity (MOQ) — usually
                  at least one pallet for a trial order, and container volumes for ongoing supply. Lead time
                  for the first private label run includes packaging artwork preparation, approval, and
                  pre-production sample sign-off — typically 4–8 weeks ahead of the first production date.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We produce private label tortillas across all standard sizes in both flour and corn
                  varieties, for both frozen and ambient formats. Custom flavour variants — spinach, tomato,
                  charcoal, gluten-free — are available subject to minimum quantity requirements.
                </p>
                <div className="mt-4">
                  <Link href="/private-label-tortilla-manufacturer" className="text-sm font-semibold text-[#2d7a3a] hover:underline">
                    View Private Label Tortilla Manufacturing →
                  </Link>
                </div>
              </section>

              {/* Section 9 */}
              <section id="how-tortillas-are-made">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How Tortillas Are Made</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  At commercial scale, tortilla production is a continuous automated process. Flour or masa
                  is mixed with water, fat, and seasoning, divided into precise weight portions, pressed to
                  the target diameter, baked in a tunnel oven, cooled, and packaged — all within a matter
                  of minutes per unit. The full process from raw material intake to finished packaged product
                  takes approximately 2–4 hours for ambient and 4–8 hours for frozen formats.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Key quality control steps include in-process weight checks, colour monitoring via automated
                  sensor systems, microbiological testing of finished goods, and packaging integrity verification.
                  All production is traceable from finished product back to raw material intake under HACCP
                  and BRCGS management systems.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Frozen tortillas are blast-frozen immediately after cooling to −18°C and transferred to
                  cold storage. This rapid freezing preserves texture quality and locks in shelf life without
                  the use of preservatives — a critical point for clean-label formulations increasingly
                  demanded by premium retail buyers.
                </p>
                <div className="mt-4">
                  <Link href="/tortilla-manufacturing-process" className="text-sm font-semibold text-[#2d7a3a] hover:underline">
                    Read the full tortilla manufacturing process guide →
                  </Link>
                </div>
              </section>

              {/* Section 10 */}
              <section id="import-logistics">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Import and Distribution Logistics</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Importing tortillas for wholesale distribution involves navigating cold-chain logistics,
                  customs documentation, food safety import requirements, and container economics. The
                  standard international distribution format is a refrigerated (reefer) container carrying
                  frozen tortillas at −18°C.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-900">Container sizes:</strong> A 20ft reefer container
                  typically carries 16–18 pallets of frozen tortillas. A 40ft reefer container carries
                  28–32 pallets. For importers building a new category or testing a market, a part-container
                  (LCL — Less than Container Load) shipment may be possible, though FCL (Full Container Load)
                  is significantly more cost-efficient per unit.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-900">Documentation:</strong> Every tortilla export shipment
                  requires a commercial invoice, packing list, health certificate (usually government-issued
                  in the country of manufacture), certificate of origin, allergen declaration, and product
                  technical data sheet. Some destination markets require phytosanitary certificates, halal
                  certificates, or import licences — these are market-specific and should be confirmed with
                  the local food authority before placing the first order.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lead times for container orders typically run 2–6 weeks from order confirmation to factory
                  gate, plus shipping transit time. Transit times from a European manufacturer vary from
                  1–2 weeks to the UK, 3–4 weeks to North America, 4–6 weeks to Australia, and 2–4 weeks
                  to the Gulf states.
                </p>
              </section>

              {/* Section 11 */}
              <section id="choosing-a-supplier">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Choosing a Wholesale Tortilla Supplier</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Selecting the right tortilla supplier is one of the most consequential decisions a food
                  importer or distributor makes in this category. The wrong supplier — one without the right
                  certifications, with inconsistent product quality, or without the documentation capability
                  for your target market — can create regulatory, commercial, and reputational risk.
                </p>
                <div className="space-y-4 mb-6">
                  {[
                    {
                      title: '1. Certifications and Compliance',
                      body: 'Verify that the supplier holds the certifications required for your target market. BRCGS is mandatory for most UK and European retail supply. IFS is required for German, French, and Italian retail chains. Halal certification is non-negotiable for Middle Eastern and many Asian markets. Request current certificate copies — not just claims on a website.',
                    },
                    {
                      title: '2. Product Range and Size Availability',
                      body: 'Confirm that the supplier manufactures the specific sizes and formats you need. Not all tortilla manufacturers produce the full size range. Confirm availability of both flour and corn formats, and frozen vs ambient formats, before proceeding to sampling.',
                    },
                    {
                      title: '3. Minimum Order Quantities',
                      body: 'Understand the supplier\'s MOQ structure. Some suppliers require full container orders; others are able to supply pallet-level quantities for market testing. Clarify whether LCL shipping is supported for smaller initial orders.',
                    },
                    {
                      title: '4. Export Documentation Capability',
                      body: 'Ask specifically about what documentation the supplier provides with each shipment. Health certificates, COO, allergen declarations and temperature logs should all be standard. Suppliers with limited documentation capability will create import clearance problems in markets with strict food safety inspection at the border.',
                    },
                    {
                      title: '5. Sample Evaluation',
                      body: 'Always request product samples before placing a first order. Evaluate diameter consistency, colour uniformity, texture after thaw (for frozen formats), fold performance, and shelf life. Send samples to your target foodservice customers or retail buyers for feedback before committing to container volumes.',
                    },
                    {
                      title: '6. Private Label Capability',
                      body: 'If private label is part of your strategy, confirm the supplier\'s private label process — artwork approval, lead times, MOQ for branded runs, and what is included in the packaging service.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                      <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We are a BRCGS, IFS, ISO 22000, HACCP, and halal-certified tortilla manufacturer with
                  full export documentation capability for all major markets. We supply container and
                  pallet-level orders of flour tortillas, corn tortillas, frozen wraps, and flatbreads.
                  Private label manufacturing is available across all standard SKUs.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/tortilla-supplier" className="text-sm font-semibold text-[#2d7a3a] hover:underline">
                    View Wholesale Tortilla Supply →
                  </Link>
                  <Link href="/export-program" className="text-sm font-semibold text-[#2d7a3a] hover:underline">
                    View Export Programme →
                  </Link>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related links */}
              <section>
                <h2 className="text-base font-bold text-gray-900 mb-4">Related Guides and Product Pages</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Tortilla Size Chart', href: '/tortilla-size-chart' },
                    { label: 'Tortilla Manufacturing Process', href: '/tortilla-manufacturing-process' },
                    { label: 'Wholesale Tortilla Supplier', href: '/tortilla-supplier' },
                    { label: 'Frozen Tortilla Supplier', href: '/frozen-tortilla-supplier' },
                    { label: 'Private Label Tortilla Manufacturer', href: '/private-label-tortilla-manufacturer' },
                    { label: 'Export Programme', href: '/export-program' },
                    { label: 'Flour Tortilla Supplier', href: '/flour-tortilla-supplier' },
                    { label: 'Corn Tortilla Supplier', href: '/corn-tortilla-supplier' },
                    { label: 'Flatbread Supplier', href: '/flatbread-supplier' },
                    { label: 'Our Factory', href: '/our-factory' },
                    { label: 'Certifications', href: '/certifications' },
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
              </section>

              {/* CTA */}
              <div className="p-8 bg-[#0a0a0a] rounded-2xl text-center">
                <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Wholesale Supply</p>
                <h3 className="text-xl font-bold text-white mb-2">Ready to Source Tortillas at Wholesale Volume?</h3>
                <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
                  BRCGS-certified tortilla manufacturer. Flour, corn, frozen and flatbread formats. Container and pallet supply for global distributors.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
                  >
                    Request Pricing
                  </Link>
                  <Link
                    href="/export-program"
                    className="px-5 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
                  >
                    View Export Programme
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
