import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';

const BASE_URL = 'https://tortillasupplier.com';

const factoryFAQs = [
  { question: 'How are frozen tortillas processed at the factory?', answer: 'Frozen products pass through blast-freezing tunnels immediately after baking, rapidly reducing temperature to −18°C, then move to on-site cold storage held at −18°C until dispatch.' },
  { question: 'How is product traceability maintained?', answer: 'All batches are traced through our production management system, giving full traceability from raw material intake to finished goods dispatch.' },
  { question: 'What quality checks are performed during production?', answer: 'Our QC team performs regular checks on dough consistency, product dimensions, bake colour and packaging integrity at every stage of production.' },
  { question: 'Can private label packaging be produced at the factory?', answer: 'Yes — our packaging team handles both standard wholesale formats and custom private label packaging.' },
  { question: 'What export documentation is prepared for shipments?', answer: 'Our export documentation team prepares health certificates, allergen declarations and certificates of origin for every international shipment.' },
];

const factoryFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: factoryFAQs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export const metadata: Metadata = {
  title: { absolute: 'Our Factory | Tortilla Manufacturing | TortillaSupplier' },
  description:
    'Tour our tortilla manufacturing facility — automated production lines, cold chain infrastructure, and quality control systems designed for international wholesale supply.',
  openGraph: {
    title: 'Our Factory | Tortilla Manufacturing | TortillaSupplier',
    description:
      'High-capacity tortilla manufacturing facility with BRCGS-certified production lines, blast freezing, and cold-chain export logistics.',
    url: `${BASE_URL}/our-factory`,
  },
  alternates: { canonical: `${BASE_URL}/our-factory` },
};

export default function OurFactoryPage() {
  return (
    <>
      <JsonLd data={factoryFaqSchema} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }, { label: 'Our Factory' }]} />

      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Our Factory</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl">
            Purpose-Built Tortilla Manufacturing for Wholesale Export
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            Our production facility is designed from the ground up for high-volume tortilla manufacturing
            and international export — combining automated production, rigorous quality control, and
            cold-chain logistics under one roof.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Production Lines</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Our automated tortilla production lines combine precision dough mixing, hydraulic pressing,
                tunnel baking, and rapid cooling to produce consistent, high-quality tortillas at scale.
                Production lines run continuously during operating hours, enabling us to fulfil large
                container orders within agreed lead times.
              </p>
              <ul className="space-y-2">
                {[
                  'Automated dough mixing with weight-controlled batching',
                  'Hydraulic pressing for consistent diameter and thickness',
                  'Tunnel oven baking for uniform colour and texture',
                  'Rapid cooling conveyors before packaging',
                  'Automated counting and stacking systems',
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
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Freezing and Cold Storage</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Frozen tortilla products pass through blast-freezing tunnels immediately after baking,
                rapidly reducing product temperature to −18°C to lock in quality. Frozen products are
                then transferred to our on-site cold storage facility, where they are held at −18°C
                until dispatch.
              </p>
              <ul className="space-y-2">
                {[
                  'Blast freezing tunnels for rapid product freezing',
                  'On-site cold storage at −18°C',
                  'Temperature monitoring and logging systems',
                  'Refrigerated loading dock for reefer container loading',
                  'Cold chain documentation for every shipment',
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
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quality Control</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Quality control is integrated at every stage of the production process. Our QC team
                performs regular checks on dough consistency, product dimensions, bake colour, and
                packaging integrity. All batches are traced through our production management system,
                enabling full traceability from raw material intake to finished goods dispatch.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Packaging and Export</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Finished products are packed into retail bags or foodservice cases and palletised for
                export. Our packaging team handles standard wholesale formats as well as custom private
                label packaging. The export documentation team prepares health certificates, allergen
                declarations, and certificates of origin for every international shipment.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="max-w-3xl">
              <FAQAccordion items={factoryFAQs} />
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-4">Related Pages</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Certifications', href: '/certifications' },
                { label: 'Export Programme', href: '/export-program' },
                { label: 'Tortilla Guide', href: '/tortilla-guide' },
                { label: 'Tortilla Size Chart', href: '/tortilla-size-chart' },
                { label: 'Manufacturing Process', href: '/tortilla-manufacturing-process' },
                { label: 'Shelf Life Guide', href: '/tortilla-shelf-life' },
                { label: 'Tortilla Calories', href: '/tortilla-calories' },
                { label: 'How to Store Tortillas', href: '/how-to-store-tortillas' },
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

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Request a Factory Visit or Sample Order</h3>
            <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
              We welcome wholesale buyers to discuss their requirements with our export team.
            </p>
            <Link href="/contact" className="inline-flex px-6 py-3 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm">
              Contact Export Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
