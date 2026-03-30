import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ProductSpecTable from '@/components/ProductSpecTable';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frozen Tortilla Supplier | Wholesale Frozen Tortillas & Wraps',
  description: 'Wholesale frozen tortilla supplier. Frozen flour and corn tortillas, wraps and flatbreads with 12-month shelf life at -18°C.',
};

const frozenFAQs = [
  { question: 'What is the shelf life of your frozen tortillas?', answer: 'Our frozen tortillas have a shelf life of 12 months at -18°C. This makes them suitable for export, long-haul distribution and bulk stock holding.' },
  { question: 'What storage temperature is required?', answer: 'Frozen tortillas must be stored and transported at -18°C. We provide full cold chain documentation and logistic support.' },
  { question: 'What frozen product formats are available?', answer: 'We supply frozen flour tortillas (25cm, 30cm), frozen corn tortillas (15cm), frozen wrap flatbreads (30cm) and frozen lavash-style flatbreads (25cm).' },
  { question: 'What are your pallet and carton configurations?', answer: 'Standard pallet configurations are available with mixed or single-SKU pallets. Carton counts vary by product. Please contact us for a pallet spec sheet.' },
  { question: 'Is private label available for frozen tortillas?', answer: 'Yes. All frozen product lines are available with private label packaging. We can produce to your brand specification with custom labelling.' },
];

const whyFrozen = [
  { title: '12-Month Shelf Life', description: 'Frozen tortillas with 12-month shelf life at -18°C, ideal for export and long-haul distribution.' },
  { title: 'No Preservatives', description: 'Extended shelf life through freezing, not preservatives. Clean label formulation available.' },
  { title: 'Flexible Stock Management', description: 'Bulk frozen stock allows flexible order and inventory management for importers and distributors.' },
  { title: 'Export Compliant', description: 'Full cold chain documentation, health certificates and temperature records provided for all frozen shipments.' },
];

export default function FrozenPage() {
  return (
    <>
      <HeroSection
        title="Frozen Tortilla Supplier for Wholesale Buyers"
        subtitle="Frozen flour and corn tortillas, wraps and flatbreads with 12-month shelf life. Export-ready cold chain logistics for UK, USA and Europe."
        badges={['Frozen Supply', '12-Month Shelf Life', 'Export Ready']}
        primaryCTA={{ label: 'Request Frozen Quote', href: '/contact' }}
        secondaryCTA={{ label: 'All Products', href: '/products' }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Why Choose Frozen Tortillas</h2>
          <p className="text-gray-500 text-sm mb-8">Frozen tortillas offer significant advantages for export supply and B2B distribution.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFrozen.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Frozen Product Specifications</h2>
          <p className="text-gray-500 text-sm mb-8">Frozen tortilla and flatbread range with full shelf life and storage specifications.</p>
          <ProductSpecTable filterType="frozen" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Pallet &amp; Carton Configuration</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Product</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Carton Count</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Units/Carton</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Pallet Config</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Storage Temp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Frozen Flour Tortilla 25cm', carton: 6, units: 12, pallet: '80 cartons', temp: '-18°C' },
                  { name: 'Frozen Flour Tortilla 30cm', carton: 6, units: 10, pallet: '80 cartons', temp: '-18°C' },
                  { name: 'Frozen Corn Tortilla 15cm', carton: 6, units: 20, pallet: '80 cartons', temp: '-18°C' },
                  { name: 'Wrap Flatbread 30cm', carton: 6, units: 10, pallet: '80 cartons', temp: '-18°C' },
                  { name: 'Lavash Style Flatbread 25cm', carton: 6, units: 12, pallet: '80 cartons', temp: '-18°C' },
                ].map((row) => (
                  <tr key={row.name} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                    <td className="px-4 py-3 text-gray-600">{row.carton}</td>
                    <td className="px-4 py-3 text-gray-600">{row.units}</td>
                    <td className="px-4 py-3 text-gray-600">{row.pallet}</td>
                    <td className="px-4 py-3"><span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">{row.temp}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Frozen Tortilla FAQ</h2>
          <div className="max-w-3xl">
            <FAQAccordion items={frozenFAQs} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Request Frozen Tortilla Pricing</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/tortilla-supplier-uk" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors">UK Supply</Link>
            <Link href="/tortilla-supplier-usa" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors">USA Supply</Link>
            <Link href="/tortilla-supplier-europe" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors">Europe Supply</Link>
            <Link href="/products" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors">All Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
