'use client';
import { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../../components/product/ProductCard';
import { mockProducts } from '../../lib/data/mockProducts';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return mockProducts.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.category.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery) ||
      p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }, [query]);

  if (!query.trim()) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Use the search bar at the top to find products.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Search Results for "{query}"
      </h2>
      
      {searchResults.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 mb-2 text-lg">No products found matching your search.</p>
          <p className="text-gray-400 text-sm">Try using different keywords or checking for typos.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {searchResults.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading search results...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
