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
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#2d7a3a] transition-colors"
        aria-expanded={open}
      >
        {label}
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2d7a3a] transition-colors"
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

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-[#1a1a1a] tracking-tight">
            TortillaSupplier
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-[#2d7a3a] transition-colors">Products</Link>
            <NavDropdown label="Suppliers" links={suppliersLinks} />
            <NavDropdown label="Wholesale" links={wholesaleLinks} />
            <Link href="/tortilla-supplier-uk" className="text-sm font-medium text-gray-700 hover:text-[#2d7a3a] transition-colors">UK</Link>
            <Link href="/tortilla-supplier-usa" className="text-sm font-medium text-gray-700 hover:text-[#2d7a3a] transition-colors">USA</Link>
            <Link href="/tortilla-supplier-europe" className="text-sm font-medium text-gray-700 hover:text-[#2d7a3a] transition-colors">Europe</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-[#2d7a3a] transition-colors">Contact</Link>
            <Link href="/contact" className="ml-2 px-4 py-2 bg-[#2d7a3a] text-white text-sm font-semibold rounded-md hover:bg-[#245f2d] transition-colors">
              Request Quote
            </Link>
          </div>
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-1">
          <Link href="/products" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Products</Link>

          {/* Suppliers accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between text-sm font-medium text-gray-700 py-2"
              onClick={() => setSuppliersOpen(!suppliersOpen)}
            >
              Suppliers
              <svg className={`w-3 h-3 transition-transform ${suppliersOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {suppliersOpen && (
              <div className="pl-3 space-y-1 pb-1">
                {suppliersLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-sm text-gray-600 py-1.5" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Wholesale accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between text-sm font-medium text-gray-700 py-2"
              onClick={() => setWholesaleOpen(!wholesaleOpen)}
            >
              Wholesale
              <svg className={`w-3 h-3 transition-transform ${wholesaleOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {wholesaleOpen && (
              <div className="pl-3 space-y-1 pb-1">
                {wholesaleLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-sm text-gray-600 py-1.5" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/tortilla-supplier-uk" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMenuOpen(false)}>UK</Link>
          <Link href="/tortilla-supplier-usa" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMenuOpen(false)}>USA</Link>
          <Link href="/tortilla-supplier-europe" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Europe</Link>
          <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/contact" className="block mt-2 px-4 py-2 bg-[#2d7a3a] text-white text-sm font-semibold rounded-md text-center" onClick={() => setMenuOpen(false)}>Request Quote</Link>
        </div>
      )}
    </nav>
  );
}
