'use client';
import { useState } from 'react';
import { products, Product } from '@/data/products';
import Link from 'next/link';

interface ProductSpecTableProps {
  filterType?: Product['type'];
}

const ALL_TYPES = ['all', 'flour', 'corn', 'frozen', 'wrap', 'flatbread', 'specialty'] as const;

export default function ProductSpecTable({ filterType }: ProductSpecTableProps) {
  const [activeFilter, setActiveFilter] = useState<string>(filterType || 'all');

  const filtered = products.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.type === activeFilter;
  });

  return (
    <div>
      {!filterType && (
        <div className="flex flex-wrap gap-2 mb-6">
          {ALL_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setActiveFilter(t)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                activeFilter === t
                  ? 'bg-[#2d7a3a] text-white border-[#2d7a3a]'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      )}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Product</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Diameter</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Weight</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Pack</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Storage</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Shelf Life</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Private Label</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((product) => (
              <tr key={product.id} className="bg-white hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900">{product.name}</td>
                <td className="px-4 py-3 text-gray-600">
                  {product.diameterCm}cm{product.diameterInch ? ` / ${product.diameterInch}` : ''}
                </td>
                <td className="px-4 py-3 text-gray-600">{product.weightG}g</td>
                <td className="px-4 py-3 text-gray-600">{product.packCount} pcs</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    product.storageType === 'frozen' ? 'bg-blue-50 text-blue-700' :
                    product.storageType === 'chilled' ? 'bg-orange-50 text-orange-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {product.storageType}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600 text-xs">{product.shelfLife}</td>
                <td className="px-4 py-3 text-center">
                  {product.privateLabelAvailable ? (
                    <span className="text-[#2d7a3a] font-medium">✓</span>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <Link href="/contact" className="text-[#2d7a3a] text-xs font-semibold hover:underline">Quote</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
