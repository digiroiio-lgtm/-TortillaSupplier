import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ProductSpecTable from '@/components/ProductSpecTable';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tortilla Supplier UK | Wholesale Tortillas & Frozen Wraps',
  description: 'Wholesale tortilla supplier for the UK market. Chilled and frozen flour tortillas, corn tortillas and wraps for UK foodservice and retail.',
};

const ukFAQs = [
  { question: 'What tortilla formats do you supply to UK buyers?', answer: 'We supply chilled and frozen flour tortillas (20cm, 25cm, 30cm), corn tortillas (15cm, 20cm) and frozen wrap flatbreads to UK buyers. All formats are available with private label packaging.' },
  { question: 'What is the minimum order quantity for UK supply?', answer: 'MOQ varies by product format. Please contact our team with your requirements for a specific MOQ and pricing guide.' },
  { question: 'Do you supply to UK supermarkets and retail?', answer: 'Yes, we can supply both foodservice formats and retail-ready packs. Private label packaging with UK-compliant labelling is available.' },
  { question: 'What certifications do you hold for UK supply?', answer: 'We hold BRCGS, IFS, ISO 22000 and HACCP certifications. Full documentation including health certificates and allergen declarations are provided.' },
  { question: 'Can you supply frozen tortillas to UK cold stores?', answer: 'Yes. We have frozen logistics capability for UK delivery. Products are exported at -18°C with full cold chain documentation.' },
];

export default function UKPage() {
  return (
    <>
      <HeroSection
        title="Tortilla Supplier for the UK Market"
        subtitle="Wholesale chilled and frozen tortillas, wraps and flatbreads for UK foodservice, retail and food manufacturing buyers."
        badges={['UK Supply', 'Chilled & Frozen', 'Private Label Available']}
        primaryCTA={{ label: 'Request UK Quote', href: '/contact' }}
        secondaryCTA={{ label: 'View All Products', href: '/products' }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Wholesale Tortilla Supply for UK Buyers</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We supply wholesale flour tortillas, corn tortillas and flatbreads to UK importers, foodservice distributors and retail buyers. Our UK-focused range includes chilled ambient and frozen formats suitable for all distribution channels.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Private label packaging with UK-compliant labelling is available across all SKUs. We provide full export documentation including BRCGS certificates, health certificates and allergen declarations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Products for UK Supply</h2>
          <p className="text-gray-500 text-sm mb-8">Chilled and frozen tortillas suitable for UK foodservice and retail.</p>
          <ProductSpecTable />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAFAF8] border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-[#1a1a1a] mb-3">Pack Formats</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Retail packs: 10–20 tortillas</li>
                <li>Foodservice catering packs</li>
                <li>Bulk carton formats available</li>
                <li>Custom pack counts on request</li>
              </ul>
            </div>
            <div className="bg-[#FAFAF8] border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-[#1a1a1a] mb-3">Private Label</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Custom brand labelling</li>
                <li>UK-compliant allergen labelling</li>
                <li>Retailer own-brand formats</li>
                <li>Minimum label runs available</li>
              </ul>
            </div>
            <div className="bg-[#FAFAF8] border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-[#1a1a1a] mb-3">Documentation</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>BRCGS certificate</li>
                <li>Health certificate</li>
                <li>Certificate of origin</li>
                <li>Allergen &amp; ingredient declaration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">UK Buyer FAQ</h2>
          <div className="max-w-3xl">
            <FAQAccordion items={ukFAQs} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Get a UK Supply Quote</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/tortilla-supplier-usa" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors">USA Supply</Link>
            <Link href="/tortilla-supplier-europe" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors">Europe Supply</Link>
            <Link href="/frozen-tortilla-supplier" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors">Frozen Tortillas</Link>
          </div>
        </div>
      </section>
    </>
  );
}
