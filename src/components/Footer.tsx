import Link from 'next/link';

const productLinks = [
  { label: 'Flour Tortilla 30cm', href: '/flour-tortilla-30cm-12-inch' },
  { label: 'Flour Tortilla 25cm', href: '/flour-tortilla-25cm-10-inch' },
  { label: 'Flour Tortilla 20cm', href: '/flour-tortilla-20cm-8-inch' },
  { label: 'Corn Tortilla 15cm', href: '/corn-tortilla-15cm-6-inch' },
  { label: 'Corn Tortilla 20cm', href: '/corn-tortilla-20cm-8-inch' },
  { label: 'Frozen Flour Tortilla', href: '/frozen-flour-tortilla-supplier' },
  { label: 'Wrap Flatbread', href: '/wrap-flatbread-supplier' },
  { label: 'Lavash Flatbread', href: '/lavash-flatbread-supplier' },
];

const supplierLinks = [
  { label: 'Tortilla Supplier', href: '/tortilla-supplier' },
  { label: 'Flour Tortilla Supplier', href: '/flour-tortilla-supplier' },
  { label: 'Corn Tortilla Supplier', href: '/corn-tortilla-supplier' },
  { label: 'Frozen Tortilla Supplier', href: '/frozen-tortilla-supplier' },
  { label: 'Flatbread Supplier', href: '/flatbread-supplier' },
  { label: 'Tortilla Distributor', href: '/tortilla-distributor' },
  { label: 'Foodservice Supplier', href: '/tortilla-foodservice-supplier' },
  { label: 'Burrito Tortilla', href: '/burrito-tortilla-supplier' },
];

const wholesaleLinks = [
  { label: 'Tortilla Wholesale', href: '/tortilla-wholesale' },
  { label: 'Bulk Tortilla Supplier', href: '/bulk-tortilla-supplier' },
  { label: 'Private Label', href: '/private-label-tortilla-manufacturer' },
  { label: 'Importer Supply', href: '/tortilla-importer-supply' },
  { label: 'Wrap Bread Wholesale', href: '/wrap-bread-wholesale' },
  { label: 'Street Taco Wholesale', href: '/street-taco-tortilla-wholesale' },
  { label: 'Wrap Tortilla Supplier', href: '/wrap-tortilla-supplier' },
  { label: 'Frying Tortillas', href: '/frying-tortilla-supplier' },
];

const regionLinks = [
  { label: 'Supplier UK', href: '/tortilla-supplier-uk' },
  { label: 'Supplier USA', href: '/tortilla-supplier-usa' },
  { label: 'Supplier Europe', href: '/tortilla-supplier-europe' },
  { label: 'Supplier Spain', href: '/tortilla-supplier-spain' },
  { label: 'Supplier Germany', href: '/tortilla-supplier-germany' },
  { label: 'Supplier France', href: '/tortilla-supplier-france' },
  { label: 'Supplier Netherlands', href: '/tortilla-supplier-netherlands' },
  { label: 'Supplier Italy', href: '/tortilla-supplier-italy' },
  { label: 'Supplier Canada', href: '/tortilla-supplier-canada' },
  { label: 'Supplier Australia', href: '/tortilla-supplier-australia' },
  { label: 'Supplier Middle East', href: '/tortilla-supplier-middle-east' },
  { label: 'Supplier UAE', href: '/tortilla-supplier-uae' },
  { label: 'Supplier Saudi Arabia', href: '/tortilla-supplier-saudi-arabia' },
];

const commercialLinks = [
  { label: 'Tortilla Manufacturer', href: '/tortilla-supplier' },
  { label: 'Mexican Tortilla Supplier', href: '/mexican-tortilla-supplier' },
  { label: 'Flatbread Manufacturer', href: '/flatbread-supplier' },
  { label: 'Tortilla Factory', href: '/our-factory' },
  { label: 'Tortilla Wholesale Supplier', href: '/tortilla-wholesale-supplier' },
  { label: 'Frozen Tortilla Wholesale', href: '/frozen-tortilla-supplier' },
];

const companyLinks = [
  { label: 'About TortillaSupplier', href: '/about' },
  { label: 'Our Factory', href: '/our-factory' },
  { label: 'Food Safety Certifications', href: '/certifications' },
  { label: 'Export Programme', href: '/export-program' },
];

const resourceLinks = [
  { label: 'All Articles', href: '/blog' },
  { label: 'Tortilla Supplier Guide', href: '/blog/tortilla-supplier-guide' },
  { label: 'Private Label Tortillas', href: '/blog/private-label-tortillas' },
  { label: 'Importing Tortillas to UK', href: '/blog/importing-tortillas-uk' },
  { label: 'Frozen Supply Chain', href: '/blog/frozen-tortilla-supply-chain' },
  { label: 'Tortilla Market Growth', href: '/blog/tortilla-market-growth' },
];

const guideLinks = [
  { label: 'Tortilla Guide', href: '/tortilla-guide' },
  { label: 'Tortilla Sizes', href: '/tortilla-size-chart' },
  { label: 'Tortilla Shelf Life', href: '/tortilla-shelf-life' },
  { label: 'Tortilla Calories', href: '/tortilla-calories' },
  { label: 'How to Store Tortillas', href: '/how-to-store-tortillas' },
  { label: 'How Tortillas Are Made', href: '/tortilla-manufacturing-process' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

// ─── New SEO cluster columns ──────────────────────────────────────────────────

const sizeLinks = [
  { label: '15 cm (6") Tortilla', href: '/corn-tortilla-15cm-6-inch' },
  { label: '20 cm (8") Tortilla', href: '/flour-tortilla-20cm-8-inch' },
  { label: '25 cm (10") Tortilla', href: '/flour-tortilla-25cm-10-inch' },
  { label: '30 cm (12") Tortilla', href: '/flour-tortilla-30cm-12-inch' },
  { label: 'Street Taco Tortilla', href: '/street-taco-tortilla-wholesale' },
  { label: 'Burrito Size Tortilla', href: '/burrito-tortilla-supplier' },
];

const importLinks = [
  { label: 'Tortilla Import Supplier', href: '/tortilla-importer-supply' },
  { label: 'Tortilla Import Distributor', href: '/tortilla-import-distributor' },
  { label: 'Frozen Tortilla Export', href: '/frozen-tortilla-export' },
  { label: 'Tortilla Export Supplier', href: '/tortilla-export-supplier' },
  { label: 'Container Tortilla Supply', href: '/container-tortilla-supply' },
];

const foodserviceLinks = [
  { label: 'Foodservice Tortilla Supplier', href: '/tortilla-foodservice-supplier' },
  { label: 'Restaurant Tortilla Supply', href: '/restaurant-tortilla-supply' },
  { label: 'QSR Tortilla Supplier', href: '/qsr-tortilla-supplier' },
  { label: 'Catering Tortilla Supply', href: '/catering-tortilla-supply' },
  { label: 'Bulk Tortilla Wraps', href: '/bulk-tortilla-wraps' },
];

const typeLinks = [
  { label: 'Flour Tortillas', href: '/flour-tortilla-supplier' },
  { label: 'Corn Tortillas', href: '/corn-tortilla-supplier' },
  { label: 'Frozen Tortillas', href: '/frozen-tortilla-supplier' },
  { label: 'Soft Tortilla Wraps', href: '/wrap-tortilla-supplier' },
  { label: 'Mexican Tortillas', href: '/mexican-tortilla-supplier' },
  { label: 'Flatbread Wraps', href: '/wrap-flatbread-supplier' },
  { label: 'Lavash Flatbread', href: '/lavash-flatbread-supplier' },
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

        {/* Main grid — Brand + core clusters */}
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
                href="https://wa.me/905531229372?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20tortilla%20supply.%20Could%20you%20send%20container%20pricing%3F"
                target="_blank" rel="noopener noreferrer"
                className="block text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                WhatsApp: +90 553 122 93 72
              </a>
            </div>
          </div>

          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Suppliers" links={supplierLinks} />
          <FooterColumn title="Wholesale" links={wholesaleLinks} />
          <FooterColumn title="Regions" links={regionLinks} />
        </div>

        {/* SEO cluster grid — new keyword clusters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-gray-100">
          <FooterColumn title="Tortilla Sizes" links={sizeLinks} />
          <FooterColumn title="Tortilla Import" links={importLinks} />
          <FooterColumn title="Foodservice Tortillas" links={foodserviceLinks} />
          <FooterColumn title="Tortilla Types" links={typeLinks} />
        </div>

        {/* Secondary grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-gray-100">
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Guides" links={guideLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Commercial" links={commercialLinks} />
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
