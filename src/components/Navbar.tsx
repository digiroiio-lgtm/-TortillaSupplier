'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const suppliersLinks = [
  { label: 'Tortilla Supplier', href: '/tortilla-supplier' },
  { label: 'Flour Tortilla Supplier', href: '/flour-tortilla-supplier' },
  { label: 'Corn Tortilla Supplier', href: '/corn-tortilla-supplier' },
  { label: 'Frozen Tortilla Supplier', href: '/frozen-tortilla-supplier' },
  { label: 'Flatbread Supplier', href: '/flatbread-supplier' },
  { label: 'Wrap Bread Supplier', href: '/wrap-bread-supplier' },
  { label: 'Tortilla Distributor', href: '/tortilla-distributor' },
];

const wholesaleLinks = [
  { label: 'Tortilla Wholesale', href: '/tortilla-wholesale' },
  { label: 'Bulk Tortilla Supplier', href: '/bulk-tortilla-supplier' },
  { label: 'Private Label Manufacturer', href: '/private-label-tortilla-manufacturer' },
  { label: 'Tortilla Importer Supply', href: '/tortilla-importer-supply' },
  { label: 'Flour Tortilla Wholesale', href: '/flour-tortilla-wholesale' },
  { label: 'Corn Tortilla Wholesale', href: '/corn-tortilla-wholesale' },
];

function NavDropdown({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        aria-expanded={open}
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2.5 w-52 bg-white border border-gray-100 rounded-xl shadow-xl shadow-black/5 z-50 py-1.5 overflow-hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [suppliersOpen, setSuppliersOpen] = useState(false);
  const [wholesaleOpen, setWholesaleOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-7 h-7 bg-[#2d7a3a] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#245f2d] transition-colors">
              <span className="text-white font-bold text-xs">T</span>
            </span>
            <span className="text-base font-bold text-gray-900 tracking-tight">TortillaSupplier</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/products" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
              Products
            </Link>
            <NavDropdown label="Suppliers" links={suppliersLinks} />
            <NavDropdown label="Wholesale" links={wholesaleLinks} />
            <Link href="/tortilla-supplier-uk" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
              UK
            </Link>
            <Link href="/tortilla-supplier-usa" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
              USA
            </Link>
            <Link href="/tortilla-supplier-europe" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
              Europe
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/contact"
              className="px-4 py-2 bg-[#0a0a0a] text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get Distributor Pricing
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-0.5">
          <Link href="/products" className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Products</Link>
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
              onClick={() => setSuppliersOpen(!suppliersOpen)}
            >
              Suppliers
              <svg className={`w-3.5 h-3.5 transition-transform ${suppliersOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {suppliersOpen && (
              <div className="pl-4 mt-0.5 space-y-0.5">
                {suppliersLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
              onClick={() => setWholesaleOpen(!wholesaleOpen)}
            >
              Wholesale
              <svg className={`w-3.5 h-3.5 transition-transform ${wholesaleOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {wholesaleOpen && (
              <div className="pl-4 mt-0.5 space-y-0.5">
                {wholesaleLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/tortilla-supplier-uk" className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>UK</Link>
          <Link href="/tortilla-supplier-usa" className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>USA</Link>
          <Link href="/tortilla-supplier-europe" className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Europe</Link>
          <Link href="/contact" className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="pt-2 pb-1">
            <Link href="/contact" className="block px-4 py-2.5 bg-[#0a0a0a] text-white text-sm font-medium rounded-lg text-center" onClick={() => setMenuOpen(false)}>
              Get Distributor Pricing
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
