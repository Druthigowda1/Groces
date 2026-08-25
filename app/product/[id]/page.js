'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { ChevronRight, ShieldCheck, Truck } from 'lucide-react';
import ProductCard from '../../../components/product/ProductCard';
import { mockProducts } from '../../../lib/data/mockProducts';
import { mockCategories } from '../../../lib/data/mockCategories';
import { formatPrice } from '../../../lib/utils';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = mockProducts.find(p => p.id === id);
    if (found) {
      setProduct(found);
    } else {
      notFound();
    }
  }, [id]);

  if (!product) return <div className="p-8 text-center">Loading...</div>;

  const relatedProducts = mockProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight size={14} />
        <Link href="/categories" className="hover:text-brand-primary">Categories</Link>
        <ChevronRight size={14} />
        <Link href={`/categories/${product.category}`} className="hover:text-brand-primary capitalize">
          {mockCategories.find(c => c.id === product.category)?.name || product.category}
        </Link>
        <ChevronRight size={14} />
        <span className="text-gray-900 font-medium truncate max-w-[150px]">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 bg-white p-4 md:p-8 rounded-3xl border border-gray-100 mb-12">
        
        {/* Images */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group">
            {product.discount > 0 && (
              <div className="absolute top-4 left-4 bg-brand-accent text-white text-sm font-bold px-3 py-1.5 rounded-lg z-10 shadow-sm">
                {product.discount}% OFF
              </div>
            )}
            <Image 
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="text-sm font-medium text-brand-primary uppercase tracking-wider bg-brand-light inline-block px-3 py-1 rounded-full mb-4">
              {product.brand}
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-gray-400 line-through mb-1">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
            </div>
            
            <p className="text-gray-500">{product.description}</p>
          </div>

          <div className="mb-8 p-4 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-between">
            <span className="font-semibold text-gray-700">Available Weight/Quantity</span>
            <span className="font-medium text-gray-900 bg-white px-4 py-1.5 rounded-lg border border-gray-200">{product.weight}</span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-brand-light/50 rounded-xl">
              <ShieldCheck size={24} className="text-brand-primary" />
              <span className="text-xs font-semibold text-brand-dark">Quality Assured</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-brand-light/50 rounded-xl">
              <Truck size={24} className="text-brand-primary" />
              <span className="text-xs font-semibold text-brand-dark">Available in Store</span>
            </div>
          </div>

        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
