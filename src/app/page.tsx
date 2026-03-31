import type { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import StatsStrip from '@/components/StatsStrip';
import ProductSpecTable from '@/components/ProductSpecTable';
import CertificationCard from '@/components/CertificationCard';
import BuyerTypeCard from '@/components/BuyerTypeCard';
import RegionCTASection from '@/components/RegionCTASection';
import TrustBadgeStrip from '@/components/TrustBadgeStrip';
import ContainerSupplySection from '@/components/ContainerSupplySection';
import DistributorTrustSection from '@/components/DistributorTrustSection';
import Link from 'next/link';
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

const categories = [
  { title: 'Flour Tortillas', description: 'Standard and large-format flour tortillas for foodservice, QSR and retail.', href: '/flour-tortilla-supplier', image: '/images/categories/flour-tortilla.svg' },
  { title: 'Corn Tortillas', description: 'Traditional corn tortillas for authentic preparations and retail packs.', href: '/corn-tortilla-supplier', image: '/images/categories/corn-tortilla.svg' },
  { title: 'Frozen Tortillas', description: 'Extended shelf life frozen tortillas for export and long-haul distribution.', href: '/frozen-tortilla-supplier', image: '/images/categories/frozen-tortilla.svg' },
  { title: 'Wrap Flatbreads', description: 'Premium wrap flatbreads for sandwich operations and foodservice.', href: '/wrap-bread-supplier', image: '/images/categories/wrap-flatbread.svg' },
  { title: 'Lavash Flatbreads', description: 'Thin lavash-style flatbreads for kebab, wrap and snack applications.', href: '/flatbread-supplier', image: '/images/categories/lavash-flatbread.svg' },
];

const foodserviceCategories = [
  { title: 'Burrito Tortillas', description: 'Large 30cm flour tortillas for burrito wrapping — QSR and foodservice supply.', href: '/burrito-tortilla-supplier' },
  { title: 'Wrap Tortillas', description: 'Mid-size wrap tortillas for sandwich wraps, paninis and cold food-to-go applications.', href: '/wrap-tortilla-supplier' },
  { title: 'Street Taco Tortillas', description: 'Small corn and flour tortillas for authentic street taco and taqueria operations.', href: '/street-taco-tortilla-wholesale' },
  { title: 'Frying Tortillas', description: 'Tostada and frying-grade corn tortillas suitable for deep fry and flat-grill applications.', href: '/frying-tortilla-supplier' },
];

const benefits = [
  { title: 'Export Documentation', description: 'Full export documentation including health certificates, certificates of origin and allergen declarations.' },
  { title: 'Private Label', description: 'Custom branding, packaging and label design available for all product lines.' },
  { title: 'Cold Chain Logistics', description: 'Chilled and frozen logistics solutions for UK, European and international destinations.' },
  { title: 'Flexible MOQ', description: 'Minimum order quantities designed for importers, distributors and foodservice operators.' },
  { title: 'Quality Certified', description: 'BRCGS, IFS, ISO 22000 and HACCP certified production facility.' },
  { title: 'Halal Certified', description: 'Halal-certified production available across all product categories.' },
];

const howItWorks = [
  { step: '01', title: 'Submit Inquiry', description: 'Fill out the inquiry form or contact us via WhatsApp with your product requirements.' },
  { step: '02', title: 'Receive Samples', description: 'We dispatch product samples with full technical datasheets for your evaluation.' },
  { step: '03', title: 'Agree Terms', description: 'Confirm MOQ, pricing, packaging and delivery terms with our export team.' },
  { step: '04', title: 'Dispatch & Deliver', description: 'Your order is manufactured, packed and dispatched with full export documentation.' },
];

const heroTrustItems = [
  'BRCGS / IFS Certified',
  'Private Label Available',
  '40ft Container Supply',
  'EU & UK Export Ready',
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Wholesale Tortilla & Flatbread Supplier"
        subtitle="Container supply for distributors & foodservice. Frozen flour, corn and specialty tortillas — private label available, EU & UK certified, export ready."
        badges={['BRCGS / IFS Certified', 'Private Label Available', 'Container Supply', 'EU & UK Export Ready']}
        primaryCTA={{ label: 'Get Distributor Pricing', href: '/contact' }}
        secondaryCTA={{ label: 'Request Container Quote', href: '/bulk-tortilla-supplier' }}
      />

      {/* Hero trust strip */}
      <div className="bg-[#f3f8f4] border-b border-[#2d7a3a]/10 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            {heroTrustItems.map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-sm text-[#2d7a3a] font-medium">
                <svg className="w-4 h-4 text-[#2d7a3a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <StatsStrip />
      <ContainerSupplySection />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Product Categories</h2>
          <p className="text-gray-500 text-sm mb-8">Wholesale tortillas and flatbreads for every application.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href}
                className="bg-[#FAFAF8] border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1 text-sm group-hover:text-[#2d7a3a] transition-colors">{cat.title}</h3>
                  <p className="text-xs text-gray-500">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Foodservice categories */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">Foodservice Formats</h2>
          <p className="text-gray-500 text-sm mb-6">Specialist tortilla categories for QSR, restaurant and foodservice operators.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {foodserviceCategories.map((cat) => (
              <Link key={cat.href} href={cat.href}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow group">
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-sm group-hover:text-[#2d7a3a] transition-colors">{cat.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{cat.description}</p>
                <span className="text-[#2d7a3a] text-xs font-semibold">View supply options →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Why Choose Us</h2>
          <p className="text-gray-500 text-sm mb-8">Built for B2B buyers who need reliable wholesale supply.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-[#1a1a1a] mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Product Specifications</h2>
          <p className="text-gray-500 text-sm mb-8">Full specification overview for our wholesale tortilla and flatbread range.</p>
          <ProductSpecTable />
        </div>
      </section>

      <section className="py-16 bg-[#2d7a3a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Source Wholesale Tortillas?</h2>
          <p className="text-green-100 mb-6 text-sm max-w-xl mx-auto">Send us your requirements and our export team will respond within 1–2 business days with pricing and sample availability.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-6 py-3 bg-white text-[#2d7a3a] font-semibold rounded-md hover:bg-gray-100 transition-colors text-sm">
              Request a Quote
            </Link>
            <a href="https://wa.me/905XXXXXXXXX?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20tortilla%20supply.%20Could%20you%20send%20container%20pricing%3F" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-sm">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Certifications &amp; Documentation</h2>
          <p className="text-gray-500 text-sm mb-8">Export documentation and quality certifications available on request.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} name={cert.name} description={cert.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Who We Supply</h2>
          <p className="text-gray-500 text-sm mb-8">Serving B2B buyers across the food supply chain.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <BuyerTypeCard icon="🏪" title="Food Distributors" description="Wholesale import and distribution for regional and national food distributors." />
            <BuyerTypeCard icon="🍽️" title="Foodservice Operators" description="QSR chains, restaurants, catering and hospitality operators at scale." />
            <BuyerTypeCard icon="🏷️" title="Private Label Buyers" description="Custom branding and private label packaging for retailers and brands." />
            <BuyerTypeCard icon="🏭" title="Food Manufacturers" description="Ingredient supply for food manufacturing, ready meal and sandwich production." />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">How It Works</h2>
          <p className="text-gray-500 text-sm mb-8">A straightforward process from inquiry to delivery.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div key={step.step} className="flex flex-col">
                <span className="text-4xl font-bold text-[#2d7a3a]/20 mb-2">{step.step}</span>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RegionCTASection />
      <DistributorTrustSection />

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadgeStrip />
        </div>
      </section>
    </>
  );
}
