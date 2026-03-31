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
import DistributorTrustSection from '@/components/DistributorTrustSection';
import { certifications } from '@/data/certifications';

export const metadata: Metadata = {
  title: 'Tortilla Supplier | Wholesale Tortillas for UK, USA & Europe',
  description: 'Premium wholesale tortilla and flatbread supplier for UK, USA and European markets. Export-ready, private label available, BRCGS certified.',
  openGraph: {
    title: 'Tortilla Supplier | Wholesale Tortillas for UK, USA & Europe',
    description: 'Premium wholesale tortilla and flatbread supplier for UK, USA and European markets. Export-ready, private label available, BRCGS certified.',
    url: 'https://www.tortillasupplier.com',
  },
  alternates: { canonical: 'https://www.tortillasupplier.com' },
};


const benefits = [
  {
    icon: '📦',
    title: 'Export Documentation',
    description: 'Health certificates, certificates of origin and allergen declarations for every shipment.',
  },
  {
    icon: '🏷️',
    title: 'Private Label',
    description: 'Custom branding, packaging and label design available across all product lines.',
  },
  {
    icon: '❄️',
    title: 'Cold Chain Logistics',
    description: 'Chilled and frozen logistics for UK, European and international destinations.',
  },
  {
    icon: '📐',
    title: 'Flexible MOQ',
    description: 'MOQ designed for importers, distributors and foodservice operators of any scale.',
  },
  {
    icon: '✅',
    title: 'Quality Certified',
    description: 'BRCGS, IFS, ISO 22000 and HACCP certified production facility.',
  },
  {
    icon: '🌙',
    title: 'Halal Certified',
    description: 'Halal-certified production available across all product categories.',
  },
];

const howItWorks = [
  { step: '01', title: 'Submit Inquiry', description: 'Fill out the inquiry form or contact us via WhatsApp with your requirements.' },
  { step: '02', title: 'Receive Samples', description: 'We dispatch product samples with full technical datasheets for your evaluation.' },
  { step: '03', title: 'Agree Terms', description: 'Confirm MOQ, pricing, packaging and delivery terms with our export team.' },
  { step: '04', title: 'Dispatch & Deliver', description: 'Your order is manufactured, packed and dispatched with full export documentation.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="Container supply for distributors & foodservice"
        title="Wholesale Tortilla & Flatbread Supplier"
        subtitle="Frozen flour, corn and specialty tortillas. Private label available, EU & UK certified, export ready from 20ft container."
        badges={['BRCGS / IFS Certified', 'Private Label Available', '40ft Container Supply', 'EU & UK Export Ready']}
        primaryCTA={{ label: 'Get Distributor Pricing', href: '/contact' }}
        secondaryCTA={{ label: 'Request Container Quote', href: '/bulk-tortilla-supplier' }}
      />

      {/* Stats */}
      <StatsStrip />

      {/* Container / Features grid */}
      <ContainerSupplySection />

      {/* Product Categories */}
      <ProductCategoriesSection />

      {/* Why Choose Us — feature grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Built for serious B2B buyers
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              Everything you need to source wholesale tortillas reliably — from certified production to export-ready documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all bg-white">
                <div className="text-2xl mb-3">{b.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Specs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Specifications</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Product Specifications</h2>
            <p className="text-base text-gray-500">Full specification overview — diameter, weight, pack size and pallet quantities for our entire range.</p>
          </div>
          <ProductSpecTable />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <div key={step.step} className="relative">
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-4 left-full w-full h-px bg-gray-100 -translate-x-4 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-[#2d7a3a]/8 flex items-center justify-center mb-5">
                    <span className="text-xs font-bold text-[#2d7a3a]">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Food Safety</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Certifications & Documentation</h2>
            <p className="text-base text-gray-500">Export documentation and quality certifications available on request for all product lines.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} name={cert.name} description={cert.description} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2d7a3a 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-4">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 max-w-2xl mx-auto">
            Ready to source wholesale tortillas?
          </h2>
          <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Send us your requirements and our export team will respond within 1–2 business days with pricing and sample availability.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/905XXXXXXXXX?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20tortilla%20supply.%20Could%20you%20send%20container%20pricing%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/8 transition-colors text-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <RegionCTASection />

      {/* Distributor Trust */}
      <DistributorTrustSection />
    </>
  );
}
