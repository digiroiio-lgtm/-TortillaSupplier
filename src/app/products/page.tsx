import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ProductSpecTable from '@/components/ProductSpecTable';
import ProductCard from '@/components/ProductCard';
import JsonLd from '@/components/JsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import { products } from '@/data/products';
import Link from 'next/link';

const BASE_URL = 'https://tortillasupplier.com';

export const metadata: Metadata = {
  title: { absolute: 'Wholesale Tortillas & Flatbreads | TortillaSupplier' },
  description: 'Wholesale flour tortillas, corn tortillas, frozen tortillas and flatbreads for B2B buyers. Private label manufacturing, BRCGS certified, export-ready supply to UK, USA and Europe.',
  openGraph: {
    title: 'Wholesale Tortillas & Flatbreads | TortillaSupplier',
    description: 'Wholesale flour tortillas, corn tortillas, frozen tortillas and flatbreads for B2B buyers. Private label manufacturing, BRCGS certified, export-ready supply.',
    url: `${BASE_URL}/products`,
  },
  alternates: { canonical: `${BASE_URL}/products` },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wholesale Tortilla & Flatbread Products',
  url: `${BASE_URL}/products`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Flour Tortillas', url: `${BASE_URL}/flour-tortilla-supplier` },
    { '@type': 'ListItem', position: 2, name: 'Corn Tortillas', url: `${BASE_URL}/corn-tortilla-supplier` },
    { '@type': 'ListItem', position: 3, name: 'Frozen Tortillas', url: `${BASE_URL}/frozen-flour-tortilla-supplier` },
    { '@type': 'ListItem', position: 4, name: 'Wrap Bread', url: `${BASE_URL}/wrap-bread-supplier` },
    { '@type': 'ListItem', position: 5, name: 'Flatbreads', url: `${BASE_URL}/flatbread-supplier` },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={itemListSchema} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />
      <HeroSection
        title="Wholesale Tortilla & Flatbread Products"
        subtitle="Complete range of flour tortillas, corn tortillas, frozen tortillas and flatbreads for export and B2B supply."
        badges={['10+ SKUs', 'Private Label Available', 'Export Ready']}
        primaryCTA={{ label: 'Request a Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Frozen Products', href: '/frozen-tortilla-supplier' }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Full Product Range</h2>
          <p className="text-gray-500 text-sm mb-8">Filter by product type to find the right specification for your requirements.</p>
          <ProductSpecTable />
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" className="px-6 py-3 bg-[#2d7a3a] text-white font-semibold rounded-md hover:bg-[#245f2d] transition-colors text-sm">
              Request Pricing for All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-[#1a1a1a] mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/tortilla-supplier-uk" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors">UK Supply</Link>
            <Link href="/tortilla-supplier-usa" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors">USA Supply</Link>
            <Link href="/tortilla-supplier-europe" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors">Europe Supply</Link>
            <Link href="/frozen-tortilla-supplier" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors">Frozen Tortillas</Link>
          </div>
        </div>
      </section>
    </>
  );
}
