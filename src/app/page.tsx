import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import StatsStrip from '@/components/StatsStrip';
import ProductSpecTable from '@/components/ProductSpecTable';
import CertificationCard from '@/components/CertificationCard';
import RegionCTASection from '@/components/RegionCTASection';
import ContainerSupplySection from '@/components/ContainerSupplySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProductCategoriesSection from '@/components/ProductCategoriesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DistributorTrustSection from '@/components/DistributorTrustSection';
import WhyTrustUsSection from '@/components/WhyTrustUsSection';
import IndustryEventsSection from '@/components/IndustryEventsSection';
import BuyerReassuranceSection from '@/components/BuyerReassuranceSection';
import BuyerSegmentationSection from '@/components/BuyerSegmentationSection';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';
import { certifications } from '@/data/certifications';

export const metadata: Metadata = {
  title: { absolute: 'Wholesale Tortilla Supplier & Manufacturer | TortillaSupplier' },
  description: 'BRCGS-certified wholesale tortilla supplier for distributors and importers. Flour, corn and frozen tortillas for UK, USA and European markets.',
  openGraph: {
    title: 'Wholesale Tortilla Supplier & Manufacturer | TortillaSupplier',
    description: 'BRCGS-certified wholesale tortilla supplier for distributors and importers. Flour, corn and frozen tortillas for UK, USA and European markets.',
    url: 'https://tortillasupplier.com',
  },
  alternates: { canonical: 'https://tortillasupplier.com' },
};

const BASE_URL = 'https://tortillasupplier.com';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you supply tortillas for distributors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are a BRCGS-certified tortilla manufacturer supplying wholesale distributors, food importers and foodservice operators globally. We offer full container loads, private label production and export documentation for all major markets.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order quantity (MOQ) for wholesale tortillas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our standard minimum order is one full pallet, with container supply (20ft and 40ft) available for larger wholesale orders. Contact our export team for exact MOQ figures by product type.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you provide private label tortillas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer full private label tortilla manufacturing including custom packaging design, branded labelling and retail-ready formats. Our factory operates to IFS and BRCGS standards, suitable for major retailer approval.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you export tortillas internationally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We export flour tortillas, corn tortillas and frozen tortillas to the UK, EU, USA, Canada, the Middle East and Australia. All shipments include full export documentation, certificates of origin and halal certification on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tortilla certifications do you hold?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our tortilla factory holds BRCGS Global Food Safety, IFS Food, ISO 22000 and HACCP certifications. Halal certification is available. All certificates can be provided upon request as part of our standard export documentation pack.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tortilla sizes and formats are available for wholesale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We supply flour tortillas in 20cm (8"), 25cm (10") and 30cm (12") sizes, corn tortillas in 15cm (6") and 20cm (8"), and flatbreads including lavash and wrap bread. Frozen formats are available for all product lines.',
      },
    },
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Wholesale Tortillas',
  description: 'BRCGS-certified wholesale flour tortillas, corn tortillas and frozen tortillas for distributors and food importers. Private label available.',
  brand: { '@type': 'Brand', name: 'TortillaSupplier' },
  url: BASE_URL,
  image: `${BASE_URL}/images/og-default.png`,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'TortillaSupplier' },
  },
};

const homepageFaqs = [
  {
    question: 'Do you supply tortillas for distributors?',
    answer: 'Yes. We are a BRCGS-certified tortilla manufacturer supplying wholesale distributors, food importers and foodservice operators globally. We offer full container loads, private label production and export documentation for all major markets.',
  },
  {
    question: 'What is the minimum order quantity (MOQ) for wholesale tortillas?',
    answer: 'Our standard minimum order is one full pallet, with container supply (20ft and 40ft) available for larger wholesale orders. Contact our export team for exact MOQ figures by product type.',
  },
  {
    question: 'Can you provide private label tortillas?',
    answer: 'Yes. We offer full private label tortilla manufacturing including custom packaging design, branded labelling and retail-ready formats. Our factory operates to IFS and BRCGS standards, suitable for major retailer approval.',
  },
  {
    question: 'Do you export tortillas internationally?',
    answer: 'Yes. We export flour tortillas, corn tortillas and frozen tortillas to the UK, EU, USA, Canada, the Middle East and Australia. All shipments include full export documentation, certificates of origin and halal certification on request.',
  },
  {
    question: 'What tortilla certifications do you hold?',
    answer: 'Our tortilla factory holds BRCGS Global Food Safety, IFS Food, ISO 22000 and HACCP certifications. Halal certification is available. All certificates can be provided upon request as part of our standard export documentation pack.',
  },
  {
    question: 'What tortilla sizes and formats are available for wholesale?',
    answer: 'We supply flour tortillas in 20cm (8"), 25cm (10") and 30cm (12") sizes, corn tortillas in 15cm (6") and 20cm (8"), and flatbreads including lavash and wrap bread. Frozen formats are available for all product lines.',
  },
];

const supplierClusterLinks = [
  { label: 'Tortilla Supplier', href: '/tortilla-supplier' },
  { label: 'Tortilla Manufacturer', href: '/tortilla-manufacturing-process' },
  { label: 'Tortilla Wholesale Supplier', href: '/tortilla-wholesale-supplier' },
  { label: 'Wholesale Tortillas', href: '/tortilla-wholesale' },
  { label: 'Frozen Tortilla Supplier', href: '/frozen-tortilla-supplier' },
  { label: 'Flour Tortilla Supplier', href: '/flour-tortilla-supplier' },
  { label: 'Corn Tortilla Supplier', href: '/corn-tortilla-supplier' },
  { label: 'Private Label Tortillas', href: '/private-label-tortilla-manufacturer' },
  { label: 'Tortilla Exporter', href: '/tortilla-export-supplier' },
  { label: 'Tortilla Distributor', href: '/tortilla-distributor' },
];



export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={productSchema} />

      {/* Hero */}
      <HeroSection
        eyebrow="Container supply for distributors & foodservice"
        title="Global Tortilla Supplier & Wholesale Tortilla Manufacturer for Distributors"
        subtitle="BRCGS-certified flour, corn and frozen tortillas. Private label and container supply for UK, USA and European distributors."
        badges={['BRCGS / IFS Certified', 'Private Label Available', '40ft Container Supply', 'EU & UK Export Ready']}
        primaryCTA={{ label: 'Get Distributor Pricing', href: '/contact' }}
        secondaryCTA={{ label: 'Request Container Quote', href: '/contact' }}
        showWhatsApp
        showPricingAnchor
        galleryImages={[
          '/images/IMG_3011.jpg',
          '/images/IMG_3012.jpg',
          '/images/IMG_3013.jpg',
          '/images/IMG_3014.jpg',
          '/images/IMG_3015.jpg',
          '/images/IMG_3016.jpg',
          '/images/IMG_3017.jpg',
          '/images/IMG_3018.jpg',
          '/images/IMG_3019.jpg',
          '/images/IMG_3020.jpg',
          '/images/IMG_3021.jpg',
          '/images/IMG_3023.jpg',
        ]}
      />

      {/* KPI Stats */}
      <StatsStrip />

      {/* Supplier cluster — internal linking / SEO */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Browse by category</p>
          <div className="flex flex-wrap gap-2">
            {supplierClusterLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-full hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof — countries */}
      <DistributorTrustSection />

      {/* Who This Is For — buyer segmentation */}
      <BuyerSegmentationSection />

      {/* Why Distributors Trust Us — powerful conversion block */}
      <WhyTrustUsSection />

      {/* Container / Export programme features */}
      <ContainerSupplySection />

      {/* Mid-page WhatsApp CTA strip */}
      <section className="bg-[#0f2d14] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white mb-1">Talk to our export team in under 2 minutes</p>
              <p className="text-xs text-white/60">Send your requirement via WhatsApp — pricing, samples, and compliance questions answered fast.</p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="https://wa.me/905531229372?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20tortilla%20supply.%20Could%20you%20send%20container%20pricing%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20c45a] transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Requirement via WhatsApp
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/8 transition-colors text-sm"
              >
                Request Compliance Pack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <ProductCategoriesSection />

      {/* Tortilla Manufacturing & Export */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Manufacturing &amp; Export</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Tortilla Manufacturing &amp; Export</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                As a tortilla manufacturer supplying distributors and food importers, our production facility produces flour, corn and frozen tortillas for international wholesale distribution. Our tortilla factory operates to BRCGS and IFS standards with full export documentation for container shipments worldwide.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                We supply private label tortillas for supermarkets and retail brands, and provide export-ready container loads to the UK, EU, North America and the Middle East. As a certified tortilla exporter, we handle all customs and trade documentation in-house.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/our-factory"
                  className="px-5 py-2.5 bg-[#2d7a3a] text-white text-sm font-semibold rounded-lg hover:bg-[#245f2d] transition-colors"
                >
                  Our Tortilla Factory
                </Link>
                <Link
                  href="/export-program"
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
                >
                  Export Programme
                </Link>
                <Link
                  href="/private-label-tortilla-manufacturer"
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
                >
                  Private Label
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🏭', title: 'BRCGS-Certified Factory', body: 'Production facility certified to BRCGS Global Food Safety and IFS standards for retail and foodservice supply.' },
                { icon: '🚢', title: 'Container Export', body: '20ft and 40ft container loads supplied directly to distributors in the UK, EU, USA and Middle East.' },
                { icon: '🏷️', title: 'Private Label', body: 'Custom-branded tortilla manufacturing for supermarkets, foodservice chains and import distributors.' },
                { icon: '📋', title: 'Full Documentation', body: 'Export certificates, halal documentation, certificates of origin and customs paperwork provided as standard.' },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <p className="text-sm font-semibold text-gray-900 mb-1.5">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Reassurance — compliance, docs, consistency, cold chain, margins */}
      <BuyerReassuranceSection />

      {/* Buyer Journey / How It Works */}
      <HowItWorksSection />

      {/* Foodservice Specs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Specifications</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Foodservice Specifications</h2>
            <p className="text-base text-gray-500">Full specification overview — diameter, weight, pack size and pallet quantities for our entire range.</p>
          </div>
          <ProductSpecTable />
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#2d7a3a] text-white text-sm font-semibold rounded-lg hover:bg-[#245f2d] transition-colors"
            >
              Request Product Samples
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
            >
              Request Container Quote
            </Link>
            <span className="flex items-center text-xs text-gray-400">Sample delivery in 3–5 days (EU &amp; UK)</span>
          </div>
        </div>
      </section>

      {/* Food Safety & Export Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Food Safety</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Food Safety &amp; Export Certifications</h2>
            <p className="text-base text-gray-500">Export documentation and quality certifications available on request for all product lines.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} name={cert.name} description={cert.description} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/certifications"
              className="px-5 py-2.5 bg-[#2d7a3a] text-white text-sm font-semibold rounded-lg hover:bg-[#245f2d] transition-colors"
            >
              View All Certifications
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
            >
              Request Compliance Pack
            </Link>
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <RegionCTASection />

      {/* Industry Events & Expos */}
      <IndustryEventsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Frequently Asked Questions</h2>
            <p className="text-base text-gray-500">Common questions from distributors and food importers about our wholesale tortilla supply programme.</p>
          </div>
          <div className="max-w-3xl">
            <FAQAccordion items={homepageFaqs} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#2d7a3a] text-white text-sm font-semibold rounded-lg hover:bg-[#245f2d] transition-colors"
            >
              Contact Export Team
            </Link>
            <a
              href="https://wa.me/905531229372?text=Hello%2C%20I%20have%20a%20question%20about%20wholesale%20tortilla%20supply."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:border-[#25D366] hover:text-[#25D366] transition-colors"
            >
              Ask via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2d7a3a 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-4">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 max-w-3xl mx-auto">
            Ready to Source Tortillas for Your Distribution Network?
          </h2>
          <p className="text-base text-gray-400 mb-3 max-w-xl mx-auto leading-relaxed">
            Send us your requirements and our export team will respond within 1–2 business days with pricing and sample availability.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-gray-500 mb-10">
            <li>✓ MOQ from 1 pallet</li>
            <li>✓ 20ft &amp; 40ft container supply</li>
            <li>✓ Private label available</li>
            <li>✓ BRCGS · IFS · Halal certified</li>
            <li>✓ Full export documentation</li>
          </ul>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              Request Distributor Pricing
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm"
            >
              Request Container Quote
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/8 transition-colors text-sm"
            >
              Request Samples
            </Link>
            <a
              href="https://wa.me/905531229372?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20tortilla%20supply.%20Could%20you%20send%20container%20pricing%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20c45a] transition-colors text-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
