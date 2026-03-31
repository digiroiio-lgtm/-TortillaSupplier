import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const BASE_URL = 'https://tortillasupplier.com';

export const metadata: Metadata = {
  title: { absolute: 'Export Programme | Tortilla Wholesale | TortillaSupplier' },
  description:
    'Our wholesale tortilla export programme is designed for distributors, importers and foodservice buyers. Container pricing, private label, and full documentation support.',
  openGraph: {
    title: 'Export Programme | Wholesale Tortilla Supply | TortillaSupplier',
    description:
      'Container-ready tortilla export programme for international distributors and importers — BRCGS certified, private label available, full documentation support.',
    url: `${BASE_URL}/export-program`,
  },
  alternates: { canonical: `${BASE_URL}/export-program` },
};

const steps = [
  {
    step: '01',
    title: 'Submit an Inquiry',
    description:
      'Contact our export team via the inquiry form or WhatsApp. Provide details on the products you need, target quantities, and destination country. We respond within 1–2 business days.',
  },
  {
    step: '02',
    title: 'Receive Pricing and Samples',
    description:
      'We send container pricing based on your specification. Sample packs are available for new buyers to evaluate product quality before placing their first order.',
  },
  {
    step: '03',
    title: 'Confirm Order and Documentation',
    description:
      'Once pricing is agreed, we prepare a proforma invoice. We handle all export documentation including health certificates, certificates of origin, and allergen declarations.',
  },
  {
    step: '04',
    title: 'Production and Dispatch',
    description:
      'Your order is scheduled for production. Lead times are typically 2–6 weeks from order confirmation. Frozen products are loaded into refrigerated containers and dispatched to your destination.',
  },
];

export default function ExportProgramPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }, { label: 'Export Programme' }]} />

      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Export Programme</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl">
            Wholesale Tortilla Export for Distributors and Importers
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            Our export programme is built for international wholesale buyers. We supply container quantities
            of tortillas and flatbreads to distributors, supermarket importers, and foodservice operators
            across the UK, USA, and Europe.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Programme features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Container Supply', desc: '20ft and 40ft reefer container shipments for bulk orders.' },
              { title: 'Private Label', desc: 'Custom packaging and branding for retail and foodservice buyers.' },
              { title: 'Full Documentation', desc: 'Health certificates, COO, allergen declarations included.' },
              { title: 'Frozen Formats', desc: 'Up to 12-month shelf life for long-distance distribution.' },
              { title: 'Mixed Pallets', desc: 'Test multiple SKUs in a single shipment.' },
              { title: 'Certified Production', desc: 'BRCGS · IFS · ISO 22000 · HACCP · Halal certified.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-8">How It Works</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="text-3xl font-black text-[#2d7a3a]/15 mb-3">{step.step}</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Export Documentation</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Every international shipment includes a complete documentation package:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {[
                'Commercial invoice and packing list',
                'Health certificate (government issued)',
                'Certificate of origin',
                'Allergen declaration',
                'Product technical datasheet',
                'Phytosanitary certificate (where required)',
                'Cold chain temperature log',
                'Halal certificate (upon request)',
              ].map((doc) => (
                <li key={doc} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-[#2d7a3a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="p-8 bg-[#0a0a0a] rounded-2xl text-center">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Start Your Export Programme</p>
            <h3 className="text-xl font-bold text-white mb-2">Ready to Source Tortillas at Container Scale?</h3>
            <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
              Submit your inquiry and our export team will respond within 1–2 business days.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Request Pricing
              </Link>
              <Link href="/certifications" className="px-5 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/8 transition-colors text-sm">
                View Certifications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
