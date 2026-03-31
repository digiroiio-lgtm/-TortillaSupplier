import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const BASE_URL = 'https://www.tortillasupplier.com';

export const metadata: Metadata = {
  title: { absolute: 'About TortillaSupplier | Wholesale Tortilla Manufacturer' },
  description:
    'Learn about TortillaSupplier — a BRCGS-certified wholesale tortilla and flatbread manufacturer supplying distributors, importers and foodservice operators across the UK, USA and Europe.',
  openGraph: {
    title: 'About TortillaSupplier | Wholesale Tortilla Manufacturer',
    description:
      'BRCGS-certified wholesale tortilla and flatbread manufacturer. Export programmes for distributors and importers across UK, USA and Europe.',
    url: `${BASE_URL}/about`,
  },
  alternates: { canonical: `${BASE_URL}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />

      <section className="bg-[#FAFAF8] border-b border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 max-w-2xl">
            Wholesale Tortilla Supplier for Global Markets
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            TortillaSupplier is a BRCGS-certified tortilla and flatbread manufacturer specialising in wholesale
            export programmes for distributors, importers and foodservice operators across the UK, USA, and Europe.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Who We Are</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We are an established tortilla and flatbread manufacturing facility with years of experience
                  supplying international wholesale buyers. Our production facility operates to the highest
                  food safety standards, holding BRCGS, IFS, ISO 22000, and HACCP certifications.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                  We supply flour tortillas, corn tortillas, frozen tortillas, wrap flatbreads, and lavash
                  to distributors, supermarket chains, QSR operators, and foodservice buyers in over 20 countries.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our mission is to be the most reliable tortilla supplier for international wholesale buyers.
                  We achieve this through consistent product quality, transparent export documentation, flexible
                  private label programmes, and a dedicated export team that responds quickly to buyer needs.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Our Markets</h2>
                <ul className="space-y-2">
                  {[
                    'United Kingdom and Ireland',
                    'United States and Canada',
                    'Germany, France, Netherlands, Belgium',
                    'Spain, Italy, Portugal',
                    'Scandinavia and Eastern Europe',
                    'Middle East and GCC countries',
                    'Asia Pacific markets',
                  ].map((market) => (
                    <li key={market} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#2d7a3a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {market}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Production Capacity', value: 'High-volume automated lines' },
                { label: 'Certifications', value: 'BRCGS · IFS · ISO 22000 · HACCP · Halal' },
                { label: 'Product Range', value: 'Flour, corn, frozen, flatbread, lavash' },
                { label: 'Private Label', value: 'Available — custom packaging & labelling' },
                { label: 'Export Experience', value: '20+ countries supplied' },
                { label: 'Minimum Order', value: 'From 2 pallets (mixed SKU available)' },
                { label: 'Lead Time', value: '2–6 weeks (4–8 weeks for private label first run)' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-start gap-4 py-4 border-b border-gray-100 last:border-0">
                  <span className="text-sm font-semibold text-gray-700 w-44 flex-shrink-0">{item.label}</span>
                  <span className="text-sm text-gray-500 text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-[#0a0a0a] rounded-2xl text-center">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Get in Touch</p>
            <h3 className="text-xl font-bold text-white mb-2">Ready to Source Tortillas for Your Network?</h3>
            <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
              Our export team responds within 1–2 business days with pricing and sample availability.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Request Distributor Pricing
              </Link>
              <Link href="/export-program" className="px-5 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/8 transition-colors text-sm">
                View Export Programme
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
