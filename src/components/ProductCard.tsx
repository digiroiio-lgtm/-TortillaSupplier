import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Product photo */}
      <div className="relative w-full h-48 bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-base font-semibold text-[#1a1a1a]">{product.name}</h3>
          {product.privateLabelAvailable && (
            <span className="text-xs bg-[#2d7a3a]/10 text-[#2d7a3a] px-2 py-0.5 rounded-full font-medium ml-2 flex-shrink-0">
              Private Label
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
        <ul className="space-y-1 mb-4">
          <li className="text-sm text-gray-700 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#2d7a3a] rounded-full flex-shrink-0"></span>
            Diameter: {product.diameterCm}cm · Weight: {product.weightG}g
          </li>
          <li className="text-sm text-gray-700 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#2d7a3a] rounded-full flex-shrink-0"></span>
            Pack: {product.packCount} pcs · Pallet: {product.palletCases} cases
          </li>
          <li className="text-sm text-gray-700 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#2d7a3a] rounded-full flex-shrink-0"></span>
            Shelf Life: {product.shelfLife}
          </li>
        </ul>
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{tag}</span>
          ))}
        </div>
        <Link href="/contact" className="block text-center px-4 py-2 bg-[#2d7a3a] text-white text-sm font-semibold rounded-md hover:bg-[#245f2d] transition-colors">
          Request Quote
        </Link>
      </div>
    </div>
  );
}
