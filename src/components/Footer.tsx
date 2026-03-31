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
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <span className="w-6 h-6 bg-[#2d7a3a] rounded-md flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">T</span>
              </span>
              <span className="text-sm font-bold text-gray-900">TortillaSupplier</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">
              Wholesale tortilla and flatbread supplier for UK, USA and European markets. Export-ready, BRCGS certified.
            </p>
            <div className="space-y-1.5">
              <a href="mailto:info@tortillasupplier.com" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                info@tortillasupplier.com
              </a>
              <a
                href="https://wa.me/905XXXXXXXXX?text=Hello%2C%20I%20am%20interested%20in%20wholesale%20tortilla%20supply.%20Could%20you%20send%20container%20pricing%3F"
                target="_blank" rel="noopener noreferrer"
                className="block text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                WhatsApp: +90 5XX XXX XX XX
              </a>
            </div>
          </div>

          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Suppliers" links={supplierLinks} />
          <FooterColumn title="Wholesale" links={wholesaleLinks} />
          <FooterColumn title="Regions" links={regionLinks} />
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
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} TortillaSupplier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
