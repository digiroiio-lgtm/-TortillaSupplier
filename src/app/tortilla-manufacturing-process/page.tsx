import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';

const BASE_URL = 'https://tortillasupplier.com';

export const metadata: Metadata = {
  title: { absolute: 'Tortilla Manufacturing Process | TortillaSupplier' },
  description:
    'How tortillas are made: a step-by-step guide to the tortilla manufacturing process — from ingredient mixing and dough pressing to baking, freezing, and export packaging.',
  openGraph: {
    title: 'Tortilla Manufacturing Process | TortillaSupplier',
    description:
      'How tortillas are made: a step-by-step guide to the tortilla manufacturing process — from ingredient mixing and dough pressing to baking, freezing, and export packaging.',
    url: `${BASE_URL}/tortilla-manufacturing-process`,
  },
  alternates: { canonical: `${BASE_URL}/tortilla-manufacturing-process` },
};

const processSteps = [
  {
    step: '01',
    title: 'Ingredient Sourcing and Quality Intake',
    body: 'The tortilla manufacturing process begins before production starts. Wheat flour for flour tortillas — or masa harina (nixtamalized corn flour) for corn tortillas — is sourced from certified grain suppliers and tested on arrival for protein content, moisture level, and microbial compliance. Fats, emulsifiers, salt, and leavening agents are similarly tested and approved before entering the production facility.',
    detail: 'Incoming raw materials are held in quarantine pending release by the quality control team. Any batch failing specification is rejected. This intake process is documented as part of the HACCP plan and is auditable under BRCGS and IFS certification.',
  },
  {
    step: '02',
    title: 'Dough Mixing and Hydration',
    body: 'Once ingredients are released, flour tortilla production begins with precision mixing. Dry ingredients are combined in industrial mixers before controlled volumes of water are added. Water temperature is critical — too cold and the fat does not disperse correctly; too warm and the dough becomes slack and tears during pressing. Mixer cycle times and rotation speeds are calibrated per recipe.',
    detail: 'For corn tortillas, masa harina is hydrated separately using a higher water ratio to achieve the characteristic slightly sticky masa texture. The mixing step for corn tortillas is shorter, as over-mixing toughens the final product.',
  },
  {
    step: '03',
    title: 'Dividing and Balling (Flour Tortillas)',
    body: 'Flour tortilla dough is fed into automated dividers that portion it into consistent balls by weight — each ball corresponding to the final tortilla diameter and weight specification. The dough balls are then passed through a short resting conveyor to allow the gluten to relax before pressing. This relaxation period is essential: if dough is pressed too soon after mixing, the tortilla will spring back and distort.',
    detail: 'Weight consistency at this stage directly determines the consistency of the finished product. Automated weight-checking systems flag any balls outside the accepted tolerance window for manual review or rejection.',
  },
  {
    step: '04',
    title: 'Pressing and Shaping',
    body: 'Dough balls enter hydraulic or pneumatic presses that flatten them to the target diameter in a single stroke. The pressing plate diameter determines whether a 20cm, 25cm or 30cm tortilla is produced. Press plate designs, release agent application, and press pressure settings are calibrated precisely to achieve consistent thickness across the entire disc — thin at the edges for a clean char in the oven, slightly thicker at the centre for structural integrity.',
    detail: 'Corn tortillas are typically pressed using a two-plate press at a slightly lower pressure than flour tortillas, as the masa is more fragile and does not have gluten structure to hold its shape under high force.',
  },
  {
    step: '05',
    title: 'Tunnel Oven Baking',
    body: 'Pressed tortillas are loaded onto conveyor belts and passed through high-temperature tunnel ovens. The baking process is measured in seconds rather than minutes — flour tortillas typically spend 20–40 seconds inside the oven at temperatures between 200°C and 280°C depending on the desired level of browning. The rapid, high-heat baking produces the characteristic blistering and mottled char marks that characterise a quality tortilla.',
    detail: 'Oven zones are independently temperature-controlled to manage heat distribution across the bake cycle. Product colour is monitored using automated colour-sensing systems that alert operators if output drifts outside the acceptable colour band. Batch consistency in colour is a key B2B quality metric.',
  },
  {
    step: '06',
    title: 'Cooling',
    body: 'Immediately after baking, tortillas must be cooled to below 32°C before packaging to prevent condensation inside sealed bags. Cooling is achieved using multi-level conveyor coolers that expose the product to controlled-temperature ambient air. The cooling conveyor also allows any residual steam to escape from the tortilla surface, which helps maintain the desired soft, pliable texture.',
    detail: 'Cooling time and belt speed are calibrated per product type. Corn tortillas cool slightly faster than thick flour tortillas due to their lower mass. Any product that bypasses the cooling step and enters packaging hot will generate condensation that accelerates mould growth and reduces shelf life.',
  },
  {
    step: '07',
    title: 'Counting, Stacking, and Packaging',
    body: 'Cooled tortillas are automatically counted and stacked into piles corresponding to the target pack count — typically 8, 10, 12, or 18 per retail or foodservice bag. Stacks are inserted into packaging by automated pick-and-place systems, then sealed under modified atmosphere (nitrogen flush) to extend ambient shelf life. Retail packs are then labelled, date-stamped, and collated into outer cartons.',
    detail: 'For private label orders, pre-printed branded bags or wrap-around labels are applied at this stage. All packaging lines include check-weigh systems and metal detection to ensure pack weight compliance and food safety. Any rejected packs are automatically diverted before case packing.',
  },
  {
    step: '08',
    title: 'Blast Freezing (Frozen Formats)',
    body: 'Products destined for frozen distribution — including frozen flour tortillas, frozen corn tortillas, and frozen flatbreads — bypass ambient packaging and enter blast freezing tunnels immediately after cooling. Blast freezers reduce product core temperature from ambient to −18°C in under 30 minutes. This rapid freezing prevents the formation of large ice crystals inside the product, which would disrupt the gluten or masa structure and affect texture upon thawing.',
    detail: 'After blast freezing, products are transferred to cold store at −18°C where they are held until order pick. Frozen tortilla products packed for export carry a 12-month shelf life from date of production. Temperature logging throughout the cold chain is provided as part of the export documentation package.',
  },
  {
    step: '09',
    title: 'Quality Control and Batch Release',
    body: 'Before any batch is released for shipment, samples are retained for laboratory testing. QC checks include microbiological testing (total viable count, coliforms, yeast and mould counts), physical measurement (diameter, thickness, weight), sensory evaluation (colour, texture, flavour), and packaging integrity checks (seal strength, modified atmosphere retention). Batches are held under quarantine until all test results confirm compliance.',
    detail: 'All batch records are held for a minimum of two years and are available for customer audit. Traceability systems link every case of finished product back to the original raw material intake batch numbers, enabling rapid targeted recall if ever required.',
  },
  {
    step: '10',
    title: 'Palletising, Warehousing, and Export Dispatch',
    body: 'Approved finished goods are palletised to export specifications — shrink-wrapped, strapped, and labelled with pallet identification. For ambient products, pallets are stored in temperature-controlled warehousing. Frozen products remain in cold store at −18°C. At the point of dispatch, frozen containers are pre-cooled to −18°C before loading. Our export documentation team prepares health certificates, certificates of origin, allergen declarations, and commercial invoices for every international shipment.',
    detail: 'Container loading follows a documented cold-chain procedure to ensure product temperature does not deviate outside −15°C to −18°C during transfer from cold store to refrigerated container. Temperature data loggers are placed inside every container and records are included with the shipping documentation.',
  },
];

const faqs = [
  {
    question: 'How are tortillas made?',
    answer:
      'Tortillas are made by mixing flour or corn masa with water and fats, dividing the dough into balls, pressing to the target diameter, baking rapidly in a tunnel oven, cooling, and packaging. Frozen formats undergo blast freezing before cold storage and export.',
  },
  {
    question: 'What is the difference between flour and corn tortilla manufacturing?',
    answer:
      'Flour tortillas are made from wheat flour dough developed with gluten, which gives elasticity during pressing and a soft, foldable texture after baking. Corn tortillas are made from masa harina — nixtamalized corn — which produces a denser, more fragile disc. Corn tortillas require less mixing and slightly lower press pressure.',
  },
  {
    question: 'What certifications does industrial tortilla manufacturing require?',
    answer:
      'Commercial tortilla facilities supplying export markets typically hold BRCGS (British Retail Consortium Global Standards), IFS (International Featured Standards), ISO 22000, and HACCP certification. Halal certification is required for supply to Middle Eastern and Muslim-majority markets. Our facility holds all of these.',
  },
  {
    question: 'What equipment is used in tortilla manufacturing?',
    answer:
      'Key equipment includes industrial dough mixers, automated dough dividers, hydraulic tortilla presses, tunnel ovens, multi-level cooling conveyors, modified-atmosphere packaging lines with nitrogen flush, check-weigh and metal detection systems, and blast freezing tunnels for frozen formats.',
  },
  {
    question: 'How long does it take to manufacture tortillas at scale?',
    answer:
      'From ingredient intake to finished packaged product takes approximately 2–4 hours for ambient tortillas and 4–8 hours for frozen formats including blast freezing time. Container-volume orders are typically scheduled 2–6 weeks ahead to allow production planning and documentation.',
  },
  {
    question: 'What shelf life do manufactured tortillas have?',
    answer:
      'Chilled tortillas have a shelf life of 14–21 days depending on product type and packaging atmosphere. Frozen tortillas manufactured under BRCGS conditions have a shelf life of 9–12 months at −18°C, making them ideal for international export distribution.',
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
  headline: 'Tortilla Manufacturing Process: How Tortillas Are Made',
  description:
    'A step-by-step guide to the industrial tortilla manufacturing process — from ingredient sourcing and dough mixing to baking, blast freezing, and export dispatch.',
  url: `${BASE_URL}/tortilla-manufacturing-process`,
  publisher: { '@type': 'Organization', name: 'TortillaSupplier', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/tortilla-manufacturing-process` },
};

export default function TortillaManufacturingProcessPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tortilla Guide', href: '/tortilla-guide' },
          { label: 'Manufacturing Process' },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Manufacturing</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl">
            How Tortillas Are Made: The Manufacturing Process
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            A step-by-step guide to industrial tortilla manufacturing — from raw ingredient intake and dough
            mixing through baking, blast freezing, quality control and export dispatch. This guide covers
            both flour tortilla and corn tortilla production processes.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['BRCGS Certified', 'IFS Certified', 'ISO 22000', 'HACCP', 'Halal'].map((badge) => (
              <span key={badge} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Intro */}
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Industrial Tortilla Production Overview</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Modern commercial tortilla manufacturing is a continuous, highly automated process designed to produce
              consistent, food-safe products at scale. Unlike artisanal hand-pressed tortillas, industrial production
              lines operate continuously during production hours, pressing, baking, and packaging thousands of units
              per hour with tight dimensional, weight, and colour tolerances.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The process differs for flour and corn tortillas. Flour tortillas rely on gluten development during
              mixing to produce an elastic, foldable dough. Corn tortillas use masa harina — corn that has been
              nixtamalized (treated with an alkaline solution) and then dried and milled — which produces a dough
              without gluten that requires different handling and pressing parameters.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              This page explains each stage of the manufacturing process as it operates in a certified wholesale
              tortilla production facility supplying international markets.
            </p>
          </div>

          {/* Process steps */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-8">Step-by-Step: The Tortilla Manufacturing Process</h2>
            <div className="space-y-8">
              {processSteps.map((step) => (
                <div key={step.step} className="grid sm:grid-cols-[80px_1fr] gap-6 items-start">
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#2d7a3a]/10 border border-[#2d7a3a]/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-[#2d7a3a]">{step.step}</span>
                    </div>
                    <div className="flex-1 w-px bg-gray-200 mt-2" style={{ minHeight: '40px' }} />
                  </div>
                  <div className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="sm:hidden w-8 h-8 rounded-full bg-[#2d7a3a]/10 border border-[#2d7a3a]/20 flex items-center justify-center text-xs font-bold text-[#2d7a3a] flex-shrink-0">
                        {step.step}
                      </span>
                      <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{step.body}</p>
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                      <p className="text-xs text-gray-500 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flour vs Corn comparison */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Flour vs Corn: Manufacturing Differences</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Flour Tortilla Manufacturing</h3>
                <ul className="space-y-2">
                  {[
                    'Wheat flour with gluten development',
                    'Longer mixing cycle (8–12 min)',
                    'Dough balling and gluten relaxation period',
                    'High-pressure hydraulic pressing',
                    'Higher oven temperature (230–280°C)',
                    'Soft, foldable texture after baking',
                    '20cm, 25cm, 30cm standard diameters',
                    'Ambient or frozen distribution',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#2d7a3a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Corn Tortilla Manufacturing</h3>
                <ul className="space-y-2">
                  {[
                    'Masa harina (nixtamalized corn flour)',
                    'Short mixing cycle (3–5 min)',
                    'No balling — direct pressing from hydrated masa',
                    'Lower-pressure two-plate press',
                    'Lower oven temperature (200–240°C)',
                    'Firmer, slightly granular texture',
                    '15cm and 20cm standard diameters',
                    'Ambient or frozen distribution',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#2d7a3a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Certifications and Quality Standards</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Commercially manufactured tortillas for international wholesale supply require production under
              verified food safety management systems. Our facility maintains the following certifications:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { cert: 'BRCGS', desc: 'British Retail Consortium Global Standards — required by most major UK and European retail buyers.' },
                { cert: 'IFS Food', desc: 'International Featured Standards — required for supply to German, French and Italian retail chains.' },
                { cert: 'ISO 22000', desc: 'Food safety management system covering the full supply chain from raw material to finished product.' },
                { cert: 'HACCP', desc: 'Hazard Analysis Critical Control Point programme covering all biological, chemical and physical hazards.' },
                { cert: 'Halal', desc: 'Third-party halal certification for supply to Muslim-majority markets including the Middle East and Southeast Asia.' },
                { cert: 'Allergen Control', desc: 'Documented allergen management plan with segregation protocols, clean-down procedures and labelling controls.' },
              ].map((item) => (
                <div key={item.cert} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="text-sm font-bold text-[#2d7a3a] mb-1">{item.cert}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/certifications" className="text-sm font-semibold text-[#2d7a3a] hover:underline">
                View full certifications and audit documentation →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Manufacturing Process: Frequently Asked Questions</h2>
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
            <h2 className="text-base font-bold text-gray-900 mb-4">Related Pages</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Our Factory', href: '/our-factory' },
                { label: 'Certifications', href: '/certifications' },
                { label: 'Frozen Tortilla Supplier', href: '/frozen-tortilla-supplier' },
                { label: 'Export Programme', href: '/export-program' },
                { label: 'Frozen Flour Tortilla Supplier', href: '/frozen-flour-tortilla-supplier' },
                { label: 'Frozen Corn Tortilla Supplier', href: '/frozen-corn-tortilla-supplier' },
                { label: 'Tortilla Guide', href: '/tortilla-guide' },
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
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">BRCGS Certified Manufacturer</p>
            <h3 className="text-xl font-bold text-white mb-2">Wholesale Tortilla Supply from a Certified Manufacturer</h3>
            <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
              Container-ready flour and corn tortillas for global distributors. Full export documentation included with every shipment.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                Request a Quote
              </Link>
              <Link
                href="/our-factory"
                className="px-5 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                Tour the Factory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
