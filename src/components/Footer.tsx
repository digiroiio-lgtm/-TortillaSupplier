import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand + contact */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-10">
          <div className="md:col-span-2">
            <h2 className="text-white font-bold text-lg mb-3">TortillaSupplier</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Premium wholesale tortilla and flatbread supplier for UK, USA and Europe markets. Export-ready, BRCGS certified.
            </p>
            <div className="space-y-1">
              <a href="mailto:info@tortillasupplier.com" className="block text-sm text-gray-400 hover:text-white transition-colors">
                info@tortillasupplier.com
              </a>
              <a href="https://wa.me/905XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition-colors">
                WhatsApp: +90 5XX XXX XX XX
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-3 uppercase tracking-wide">Products</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/flour-tortilla-30cm-12-inch" className="text-gray-400 hover:text-white transition-colors">Flour Tortilla 30cm (12&quot;)</Link></li>
              <li><Link href="/flour-tortilla-25cm-10-inch" className="text-gray-400 hover:text-white transition-colors">Flour Tortilla 25cm (10&quot;)</Link></li>
              <li><Link href="/flour-tortilla-20cm-8-inch" className="text-gray-400 hover:text-white transition-colors">Flour Tortilla 20cm (8&quot;)</Link></li>
              <li><Link href="/corn-tortilla-15cm-6-inch" className="text-gray-400 hover:text-white transition-colors">Corn Tortilla 15cm (6&quot;)</Link></li>
              <li><Link href="/corn-tortilla-20cm-8-inch" className="text-gray-400 hover:text-white transition-colors">Corn Tortilla 20cm (8&quot;)</Link></li>
              <li><Link href="/frozen-flour-tortilla-supplier" className="text-gray-400 hover:text-white transition-colors">Frozen Flour Tortilla</Link></li>
              <li><Link href="/frozen-corn-tortilla-supplier" className="text-gray-400 hover:text-white transition-colors">Frozen Corn Tortilla</Link></li>
              <li><Link href="/wrap-flatbread-supplier" className="text-gray-400 hover:text-white transition-colors">Wrap Flatbread</Link></li>
              <li><Link href="/lavash-flatbread-supplier" className="text-gray-400 hover:text-white transition-colors">Lavash Flatbread</Link></li>
            </ul>
          </div>

          {/* Suppliers */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-3 uppercase tracking-wide">Suppliers</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/tortilla-supplier" className="text-gray-400 hover:text-white transition-colors">Tortilla Supplier</Link></li>
              <li><Link href="/flour-tortilla-supplier" className="text-gray-400 hover:text-white transition-colors">Flour Tortilla Supplier</Link></li>
              <li><Link href="/corn-tortilla-supplier" className="text-gray-400 hover:text-white transition-colors">Corn Tortilla Supplier</Link></li>
              <li><Link href="/frozen-tortilla-supplier" className="text-gray-400 hover:text-white transition-colors">Frozen Tortilla Supplier</Link></li>
              <li><Link href="/flatbread-supplier" className="text-gray-400 hover:text-white transition-colors">Flatbread Supplier</Link></li>
              <li><Link href="/wrap-bread-supplier" className="text-gray-400 hover:text-white transition-colors">Wrap Bread Supplier</Link></li>
              <li><Link href="/tortilla-distributor" className="text-gray-400 hover:text-white transition-colors">Tortilla Distributor</Link></li>
              <li><Link href="/tortilla-foodservice-supplier" className="text-gray-400 hover:text-white transition-colors">Foodservice Supplier</Link></li>
            </ul>
          </div>

          {/* Wholesale */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-3 uppercase tracking-wide">Wholesale</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/tortilla-wholesale" className="text-gray-400 hover:text-white transition-colors">Tortilla Wholesale</Link></li>
              <li><Link href="/bulk-tortilla-supplier" className="text-gray-400 hover:text-white transition-colors">Bulk Tortilla Supplier</Link></li>
              <li><Link href="/tortilla-wholesale-supplier" className="text-gray-400 hover:text-white transition-colors">Tortilla Wholesale Supplier</Link></li>
              <li><Link href="/private-label-tortilla-manufacturer" className="text-gray-400 hover:text-white transition-colors">Private Label Manufacturer</Link></li>
              <li><Link href="/tortilla-importer-supply" className="text-gray-400 hover:text-white transition-colors">Tortilla Importer Supply</Link></li>
              <li><Link href="/flour-tortilla-wholesale" className="text-gray-400 hover:text-white transition-colors">Flour Tortilla Wholesale</Link></li>
              <li><Link href="/corn-tortilla-wholesale" className="text-gray-400 hover:text-white transition-colors">Corn Tortilla Wholesale</Link></li>
              <li><Link href="/wrap-bread-wholesale" className="text-gray-400 hover:text-white transition-colors">Wrap Bread Wholesale</Link></li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-3 uppercase tracking-wide">Countries</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/tortilla-supplier-uk" className="text-gray-400 hover:text-white transition-colors">Tortilla Supplier UK</Link></li>
              <li><Link href="/tortilla-supplier-usa" className="text-gray-400 hover:text-white transition-colors">Tortilla Supplier USA</Link></li>
              <li><Link href="/tortilla-supplier-europe" className="text-gray-400 hover:text-white transition-colors">Tortilla Supplier Europe</Link></li>
              <li><Link href="/tortilla-supplier-spain" className="text-gray-400 hover:text-white transition-colors">Tortilla Supplier Spain</Link></li>
              <li><Link href="/tortilla-supplier-germany" className="text-gray-400 hover:text-white transition-colors">Tortilla Supplier Germany</Link></li>
              <li><Link href="/tortilla-supplier-france" className="text-gray-400 hover:text-white transition-colors">Tortilla Supplier France</Link></li>
              <li><Link href="/tortilla-supplier-netherlands" className="text-gray-400 hover:text-white transition-colors">Tortilla Supplier Netherlands</Link></li>
              <li><Link href="/tortilla-supplier-italy" className="text-gray-400 hover:text-white transition-colors">Tortilla Supplier Italy</Link></li>
            </ul>
          </div>
        </div>

        {/* Certifications strip */}
        <div className="py-4 border-t border-gray-700 border-b mb-6">
          <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Certifications</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>BRCGS</span>
            <span>IFS</span>
            <span>ISO 22000</span>
            <span>HACCP</span>
            <span>Halal Certified</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} TortillaSupplier. All rights reserved.</p>
          <p className="text-xs text-gray-500">Wholesale tortilla supplier for international markets.</p>
        </div>
      </div>
    </footer>
  );
}
