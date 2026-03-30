'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-[#1a1a1a] tracking-tight">
            TortillaSupplier
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-[#2d7a3a] transition-colors">Products</Link>
            <Link href="/tortilla-supplier-uk" className="text-sm font-medium text-gray-700 hover:text-[#2d7a3a] transition-colors">UK</Link>
            <Link href="/tortilla-supplier-usa" className="text-sm font-medium text-gray-700 hover:text-[#2d7a3a] transition-colors">USA</Link>
            <Link href="/tortilla-supplier-europe" className="text-sm font-medium text-gray-700 hover:text-[#2d7a3a] transition-colors">Europe</Link>
            <Link href="/frozen-tortilla-supplier" className="text-sm font-medium text-gray-700 hover:text-[#2d7a3a] transition-colors">Frozen</Link>
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
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2">
          <Link href="/products" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/tortilla-supplier-uk" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMenuOpen(false)}>UK</Link>
          <Link href="/tortilla-supplier-usa" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMenuOpen(false)}>USA</Link>
          <Link href="/tortilla-supplier-europe" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Europe</Link>
          <Link href="/frozen-tortilla-supplier" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Frozen</Link>
          <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/contact" className="block mt-2 px-4 py-2 bg-[#2d7a3a] text-white text-sm font-semibold rounded-md text-center" onClick={() => setMenuOpen(false)}>Request Quote</Link>
        </div>
      )}
    </nav>
  );
}
