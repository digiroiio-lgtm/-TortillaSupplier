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
import { certifications } from '@/data/certifications';

export const metadata: Metadata = {
  title: { absolute: 'Global Tortilla Supplier for Distributors | TortillaSupplier' },
  description: 'BRCGS-certified wholesale tortilla supplier for distributors and importers. Flour, corn and frozen tortillas for UK, USA and European markets. Private label and container supply available.',
  openGraph: {
    title: 'Global Tortilla Supplier for Distributors | TortillaSupplier',
    description: 'BRCGS-certified wholesale tortilla supplier for distributors and importers. Flour, corn and frozen tortillas for UK, USA and European markets.',
    url: 'https://www.tortillasupplier.com',
  },
  alternates: { canonical: 'https://www.tortillasupplier.com' },
};



export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="Container supply for distributors & foodservice"
        title="Global Tortilla Supplier for Distributors & Food Importers"
        subtitle="BRCGS-certified flour, corn and frozen tortillas. Private label and container supply for UK, USA and European distributors."
        badges={['BRCGS / IFS Certified', 'Private Label Available', '40ft Container Supply', 'EU & UK Export Ready']}
        primaryCTA={{ label: 'Get Distributor Pricing', href: '/contact' }}
        secondaryCTA={{ label: 'Request Container Quote', href: '/contact' }}
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

      {/* Stats */}
      <StatsStrip />

      {/* Distributor countries — social proof */}
      <DistributorTrustSection />

      {/* Container / Features grid */}
      <ContainerSupplySection />

      {/* Product Categories */}
      <ProductCategoriesSection />

      {/* Foodservice Specs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-3">Specifications</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Foodservice Specifications</h2>
            <p className="text-base text-gray-500">Full specification overview — diameter, weight, pack size and pallet quantities for our entire range.</p>
          </div>
          <ProductSpecTable />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#2d7a3a] text-white text-sm font-semibold rounded-lg hover:bg-[#245f2d] transition-colors"
            >
              Request Product Samples
            </Link>
            <span className="flex items-center text-xs text-gray-400">Sample delivery in 3–5 days (EU &amp; UK)</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorksSection />

      {/* Food Safety & Export Certifications */}
      <section className="py-24 bg-gray-50">
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
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Global Distribution Markets */}
      <RegionCTASection />

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
          <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Send us your requirements and our export team will respond within 1–2 business days with pricing and sample availability.
          </p>
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
            <a
              href="https://wa.me/905531229372?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20tortilla%20supply.%20Could%20you%20send%20container%20pricing%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/8 transition-colors text-sm"
            >
              WhatsApp Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
