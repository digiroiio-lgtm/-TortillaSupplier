import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-white font-bold text-lg mb-3">TortillaSupplier</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium wholesale tortilla and flatbread supplier for UK, USA and Europe markets.
            </p>
            <div className="mt-4 space-y-1">
              <a href="mailto:info@tortillasupplier.com" className="block text-sm text-gray-400 hover:text-white transition-colors">
                info@tortillasupplier.com
              </a>
              <a href="tel:+905XXXXXXXXX" className="block text-sm text-gray-400 hover:text-white transition-colors">
                WhatsApp: +90 5XX XXX XX XX
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/frozen-tortilla-supplier" className="text-gray-400 hover:text-white transition-colors">Frozen Tortillas</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Flour Tortillas</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Corn Tortillas</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Flatbreads &amp; Wraps</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Regions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tortilla-supplier-uk" className="text-gray-400 hover:text-white transition-colors">UK Market</Link></li>
              <li><Link href="/tortilla-supplier-usa" className="text-gray-400 hover:text-white transition-colors">USA Market</Link></li>
              <li><Link href="/tortilla-supplier-europe" className="text-gray-400 hover:text-white transition-colors">Europe Market</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Certifications</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">BRCGS</span></li>
              <li><span className="text-gray-400">IFS</span></li>
              <li><span className="text-gray-400">ISO 22000</span></li>
              <li><span className="text-gray-400">HACCP</span></li>
              <li><span className="text-gray-400">Halal</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} TortillaSupplier. All rights reserved.</p>
          <p className="text-xs text-gray-500">Wholesale tortilla supplier for international markets.</p>
        </div>
      </div>
    </footer>
  );
}
