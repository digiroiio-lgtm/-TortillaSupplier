import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ProductSpecTable from '@/components/ProductSpecTable';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';
import CertificationCard from '@/components/CertificationCard';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { certifications } from '@/data/certifications';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Tortilla Supplier Europe for Distributors | TortillaSupplier' },
  description: 'Wholesale tortilla and flatbread supplier for European distributors and importers. IFS, BRCGS and ISO 22000 certified. Export documentation included.',
  openGraph: {
    title: 'Tortilla Supplier Europe for Distributors | TortillaSupplier',
    description: 'Wholesale tortilla and flatbread supplier for European distributors and importers. IFS, BRCGS and ISO 22000 certified. Export documentation included.',
    url: 'https://tortillasupplier.com/tortilla-supplier-europe',
  },
  alternates: { canonical: 'https://tortillasupplier.com/tortilla-supplier-europe' },
};

const europeFAQs = [
  { question: 'Do you supply to European food distributors?', answer: 'Yes. We supply tortillas and flatbreads to food importers, distributors and food manufacturers across the EU. We provide full EU-compliant documentation.' },
  { question: 'What certifications do you hold for EU supply?', answer: 'We hold BRCGS, IFS, ISO 22000, HACCP and Halal certifications. EU health certificates and certificates of origin are provided with each shipment.' },
  { question: 'Can you supply halal-certified tortillas to European markets?', answer: 'Yes. Halal-certified production is available for all product lines and is particularly relevant for distributors serving Middle Eastern and Muslim communities in Europe.' },
  { question: 'What documentation do you provide for EU import?', answer: 'We provide health certificates, certificates of origin, microbiological specifications, allergen declarations and full technical datasheets.' },
  { question: 'Do you supply frozen products for European distribution?', answer: 'Yes. Our frozen tortilla and flatbread range has a 12-month shelf life at -18°C, suitable for European import and distribution timelines.' },
];

const europeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: europeFAQs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function EuropePage() {
  return (
    <>
      <JsonLd data={europeFaqSchema} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Tortilla Supplier Europe' }]} />
      <HeroSection
        title="Tortilla & Flatbread Supplier for Europe"
        subtitle="Wholesale supply for European distributors, food importers and regional buyers. IFS and BRCGS certified. Full EU documentation package."
        badges={['EU Export', 'IFS Certified', 'Halal Available']}
        primaryCTA={{ label: 'Request Europe Quote', href: '/contact' }}
        secondaryCTA={{ label: 'View Products', href: '/products' }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">European Wholesale Tortilla Supply</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We supply wholesale tortillas and flatbreads to food importers, regional distributors and food manufacturers across Europe. Our European range includes flour tortillas, corn tortillas, frozen wraps and lavash-style flatbreads.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              All products are manufactured to IFS and BRCGS standards with full EU export documentation. Halal certification is available on request, supporting supply to diverse European markets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Products for European Markets</h2>
          <p className="text-gray-500 text-sm mb-8">Full product range with EU-compatible export documentation.</p>
          <ProductSpecTable />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Food Safety &amp; Documentation</h2>
          <p className="text-gray-500 text-sm mb-8">Full EU-compliant documentation package provided with every shipment.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.slice(0, 8).map((cert) => (
              <CertificationCard key={cert.id} name={cert.name} description={cert.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Europe Buyer FAQ</h2>
          <div className="max-w-3xl">
            <FAQAccordion items={europeFAQs} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Get a Europe Supply Quote</h2>
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
            <Link href="/frozen-tortilla-supplier" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] transition-colors">Frozen Tortillas</Link>
          </div>
        </div>
      </section>
    </>
  );
}
