'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Filter, SlidersHorizontal, ChevronRight } from 'lucide-react';
import ProductCard from '../../components/product/ProductCard';
import { mockProducts } from '../../lib/data/mockProducts';
import { mockCategories } from '../../lib/data/mockCategories';

export default function CategoriesPage() {
  const [sortBy, setSortBy] = useState('popular');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...mockProducts];
    
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        result.sort((a, b) => b.discount - a.discount);
        break;
      default:
        // 'popular' - sort by reviews/rating
        result.sort((a, b) => b.reviews - a.reviews);
    }
    
    return result;
  }, [sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight size={14} />
        <span className="text-gray-900 font-medium capitalize">Categories</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand-dark">All Products</h1>
        <div className="flex gap-2">
          <button 
            className="md:hidden flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <Filter size={16} /> Filters
          </button>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5">
            <SlidersHorizontal size={16} className="text-gray-500" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
            >
              <option value="popular">Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Best Discounts</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className={`${showMobileFilters ? 'block' : 'hidden'} md:block w-full md:w-64 shrink-0`}>
          <div className="sticky top-24 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/categories"
                  className="w-full block text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-brand-light text-brand-primary"
                >
                  All Categories
                </Link>
              </li>
              {mockCategories.map(cat => (
                <li key={cat.id}>
                  <Link 
                    href={`/categories/${cat.id}`}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors text-gray-600 hover:bg-gray-50"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{cat.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
