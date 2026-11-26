import Link from 'next/link';
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from '@/lib/whatsapp';

// Every internal link appears once. The previous footer repeated 19 links
// across overlapping keyword columns (90 links, 70 unique), which diluted
// the signal and read as over-optimised. Columns now follow how a buyer
// thinks: what they need, what size, what business they run, how they buy.

const productLinks = [
  { label: 'All Products', href: '/products' },
  { label: 'Flour Tortillas', href: '/flour-tortilla-supplier' },
  { label: 'Corn Tortillas', href: '/corn-tortilla-supplier' },
  { label: 'Frozen Tortillas', href: '/frozen-tortilla-supplier' },
  { label: 'Wrap Tortillas', href: '/wrap-tortilla-supplier' },
  { label: 'Wrap Bread', href: '/wrap-bread-supplier' },
  { label: 'Flatbread', href: '/flatbread-supplier' },
  { label: 'Wrap Flatbread', href: '/wrap-flatbread-supplier' },
  { label: 'Lavash Flatbread', href: '/lavash-flatbread-supplier' },
  { label: 'Mexican Tortillas', href: '/mexican-tortilla-supplier' },
];

const sizeLinks = [
  { label: '15 cm (6") Corn', href: '/corn-tortilla-15cm-6-inch' },
  { label: '20 cm (8") Corn', href: '/corn-tortilla-20cm-8-inch' },
  { label: '20 cm (8") Flour', href: '/flour-tortilla-20cm-8-inch' },
  { label: '25 cm (10") Flour', href: '/flour-tortilla-25cm-10-inch' },
  { label: '30 cm (12") Flour', href: '/flour-tortilla-30cm-12-inch' },
  { label: 'Frozen Flour Tortilla', href: '/frozen-flour-tortilla-supplier' },
  { label: 'Frozen Corn Tortilla', href: '/frozen-corn-tortilla-supplier' },
  { label: 'Tortilla Size Chart', href: '/tortilla-size-chart' },
];

const industryLinks = [
  { label: 'Foodservice', href: '/tortilla-foodservice-supplier' },
  { label: 'Restaurants', href: '/restaurant-tortilla-supply' },
  { label: 'QSR Chains', href: '/qsr-tortilla-supplier' },
  { label: 'Catering', href: '/catering-tortilla-supply' },
  { label: 'Street Taco', href: '/street-taco-tortilla-wholesale' },
  { label: 'Burrito', href: '/burrito-tortilla-supplier' },
  { label: 'Frying & Tostada', href: '/frying-tortilla-supplier' },
  { label: 'Bulk Wraps', href: '/bulk-tortilla-wraps' },
];

const wholesaleLinks = [
  { label: 'Tortilla Wholesale', href: '/tortilla-wholesale' },
  { label: 'Wholesale Supplier', href: '/tortilla-wholesale-supplier' },
  { label: 'Bulk Supplier', href: '/bulk-tortilla-supplier' },
  { label: 'Distributor Supply', href: '/tortilla-distributor' },
  { label: 'Private Label', href: '/private-label-tortillas' },
  { label: 'Private Label Flour', href: '/private-label-flour-tortillas' },
  { label: 'Private Label Corn', href: '/private-label-corn-tortillas' },
  { label: 'Private Label UK', href: '/private-label-tortillas-uk' },
  { label: 'Private Label Manufacturer', href: '/private-label-tortilla-manufacturer' },
];

const importExportLinks = [
  { label: 'Importer Supply', href: '/tortilla-importer-supply' },
  { label: 'Import Distributor', href: '/tortilla-import-distributor' },
  { label: 'Importing to the UK', href: '/importing-tortillas-to-uk' },
  { label: 'Export Supplier', href: '/tortilla-export-supplier' },
  { label: 'Frozen Export', href: '/frozen-tortilla-export' },
  { label: 'Container Supply', href: '/container-tortilla-supply' },
  { label: 'Export Programme', href: '/export-program' },
];

const regionLinks = [
  { label: 'United Kingdom', href: '/tortilla-supplier-uk' },
  { label: 'USA', href: '/tortilla-supplier-usa' },
  { label: 'Europe', href: '/tortilla-supplier-europe' },
  { label: 'Spain', href: '/tortilla-supplier-spain' },
  { label: 'Germany', href: '/tortilla-supplier-germany' },
  { label: 'France', href: '/tortilla-supplier-france' },
  { label: 'Netherlands', href: '/tortilla-supplier-netherlands' },
  { label: 'Italy', href: '/tortilla-supplier-italy' },
  { label: 'Canada', href: '/tortilla-supplier-canada' },
  { label: 'Australia', href: '/tortilla-supplier-australia' },
  { label: 'Middle East', href: '/tortilla-supplier-middle-east' },
  { label: 'UAE', href: '/tortilla-supplier-uae' },
  { label: 'Saudi Arabia', href: '/tortilla-supplier-saudi-arabia' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Factory', href: '/our-factory' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact & Quotes', href: '/contact' },
  { label: 'Tortilla Supplier', href: '/tortilla-supplier' },
];

const guideLinks = [
  { label: 'Buyer\'s Guide', href: '/tortilla-guide' },
  { label: 'Shelf Life', href: '/tortilla-shelf-life' },
  { label: 'How to Store Tortillas', href: '/how-to-store-tortillas' },
  { label: 'How Tortillas Are Made', href: '/tortilla-manufacturing-process' },
  { label: 'Tortilla Calories', href: '/tortilla-calories' },
  { label: 'All Articles', href: '/blog' },
  { label: 'Choosing a Supplier', href: '/blog/how-to-choose-tortilla-supplier' },
  { label: 'Frozen Supply Chain', href: '/blog/frozen-tortilla-supply-chain' },
  { label: 'Market Growth', href: '/blog/tortilla-market-growth' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA strip */}
        <div className="py-10 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-widest mb-1">Ready to Order?</p>
              <p className="text-sm font-bold text-gray-900">Wholesale tortillas for distributors and importers</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-4 py-2 bg-[#2d7a3a] text-white font-semibold rounded-lg hover:bg-[#245f2d] transition-colors text-sm"
              >
                Request Distributor Pricing
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Request Samples
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Contact Export Team
              </Link>
            </div>
          </div>
        </div>

        {/* Main grid: brand + product-led columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <span className="w-6 h-6 bg-[#2d7a3a] rounded-md flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">T</span>
              </span>
              <span className="text-sm font-bold text-gray-900">TortillaSupplier</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">
              Wholesale tortilla supplier for distributors, importers and foodservice buyers across the UK,
              USA and European markets. BRCGS-certified flour, corn and frozen tortillas available for
              private label and container supply.
            </p>
            <div className="space-y-1.5">
              <a href="mailto:info@tortillasupplier.com" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                info@tortillasupplier.com
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank" rel="noopener noreferrer"
                className="block text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>

          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="By Size & Format" links={sizeLinks} />
          <FooterColumn title="By Industry" links={industryLinks} />
          <FooterColumn title="Wholesale & Private Label" links={wholesaleLinks} />
        </div>

        {/* Secondary grid: trade, markets, company, guides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-gray-100">
          <FooterColumn title="Import & Export" links={importExportLinks} />
          <FooterColumn title="Markets" links={regionLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Guides & Resources" links={guideLinks} />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>BRCGS</span>
            <span className="text-gray-200">·</span>
            <span>IFS</span>
            <span className="text-gray-200">·</span>
            <span>ISO 22000</span>
            <span className="text-gray-200">·</span>
            <span>HACCP</span>
            <span className="text-gray-200">·</span>
            <span>Halal Certified</span>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gray-700 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} TortillaSupplier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
