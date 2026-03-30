import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ProductSpecTable from '@/components/ProductSpecTable';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tortilla Supplier USA | Wholesale Frozen & Fresh Tortillas',
  description: 'Wholesale tortilla supplier for USA buyers. Frozen flour and corn tortillas for US foodservice, QSR and private label distributors.',
};

const usaFAQs = [
  { question: 'Can you export frozen tortillas to the USA?', answer: 'Yes. We export frozen flour and corn tortillas to US buyers with full FDA-compliant documentation. Products are shipped at -18°C with cold chain integrity.' },
  { question: 'What documentation is required for US import?', answer: 'We provide health certificates, certificates of origin, ingredient and allergen declarations, and microbiological specifications. Our team assists with all required import documentation.' },
  { question: 'Do you supply US foodservice chains?', answer: 'Yes. We supply frozen tortillas to foodservice chains, QSR operators and food distributors. Private label formats with US-compliant labelling are available.' },
  { question: 'What is the shelf life of your frozen tortillas?', answer: 'Our frozen tortillas have a shelf life of 12 months at -18°C, suitable for long-haul export and US distribution timelines.' },
  { question: 'Can you handle private label for US brands?', answer: 'Yes. We offer full private label service including custom packaging, US-compliant allergen labelling and brand design support.' },
];

export default function USAPage() {
  return (
    <>
      <HeroSection
        title="Wholesale Tortilla Supply for USA Buyers"
        subtitle="Frozen flour and corn tortillas for US foodservice chains, QSR operators and private label distributors. FDA documentation available."
        badges={['USA Export', 'Frozen Supply', 'Private Label Available']}
        primaryCTA={{ label: 'Request USA Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Frozen Products', href: '/frozen-tortilla-supplier' }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Tortilla Export for the US Market</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We supply frozen tortillas and flatbreads for the US market. Our frozen product range is designed for the extended shelf life and cold chain requirements of US distribution. All products are available with FDA-ready documentation.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Private label programmes are available for US retailers and food brands. We work with importers, distributors and foodservice operators to develop custom packaging and product specifications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Frozen &amp; Chilled Products for USA</h2>
          <p className="text-gray-500 text-sm mb-8">Export-ready frozen tortilla range with 12-month shelf life.</p>
          <ProductSpecTable filterType="frozen" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">USA Export Documentation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['FDA Facility Registration', 'Health Certificate', 'Certificate of Origin', 'Allergen Declaration'].map((doc) => (
              <div key={doc} className="bg-[#FAFAF8] border border-gray-200 rounded-lg p-4">
                <div className="w-8 h-8 bg-[#2d7a3a]/10 rounded-md flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-[#2d7a3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#1a1a1a]">{doc}</h3>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 italic">Sample certification display for presentation purposes.</p>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">USA Buyer FAQ</h2>
          <div className="max-w-3xl">
            <FAQAccordion items={usaFAQs} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Get a USA Supply Quote</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/tortilla-supplier-uk" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors">UK Supply</Link>
            <Link href="/tortilla-supplier-europe" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors">Europe Supply</Link>
            <Link href="/frozen-tortilla-supplier" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors">Frozen Tortillas</Link>
          </div>
        </div>
      </section>
    </>
  );
}
