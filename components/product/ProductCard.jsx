'use client';
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '../../lib/utils';

export default function ProductCard({ product }) {
  return (
    <Link 
      href={`/product/${product.id}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 p-3 hover:shadow-lg transition-all duration-300 relative h-full"
    >
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-3 left-3 bg-brand-accent text-white text-[10px] font-bold px-2 py-1 rounded-md z-10">
          {product.discount}% OFF
        </div>
      )}

      {/* Image */}
      <div className="relative w-full aspect-square mb-3 bg-gray-50 rounded-xl overflow-hidden group-hover:bg-gray-100 transition-colors">
        <Image 
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 250px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1">
        <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">
          {product.brand}
        </div>
        <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <div className="text-xs text-gray-500 mb-2">
          {product.weight}
        </div>

        <div className="mt-auto">
          <div className="flex items-end gap-2">
            <span className="font-bold text-gray-900 leading-none">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through leading-none mb-0.5">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
