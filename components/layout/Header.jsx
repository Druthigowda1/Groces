'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu } from 'lucide-react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button className="md:hidden text-gray-700">
              <Menu size={24} />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">G</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-brand-dark tracking-tight leading-none">Grocery Hub</h1>
                <p className="text-[10px] text-brand-secondary font-semibold uppercase tracking-wider">Quality Meets Value</p>
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-auto">
            <form 
              className="relative group"
              onSubmit={handleSearch}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400 group-focus-within:text-brand-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search for groceries, snacks, cleaning products..."
                className="block w-full pl-10 pr-3 py-2.5 border-2 border-gray-100 rounded-xl leading-5 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-brand-primary focus:ring-0 sm:text-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute inset-y-1.5 right-1.5 px-4 bg-brand-primary text-white text-xs font-semibold rounded-lg hover:bg-brand-dark transition-colors flex items-center justify-center">
                Search
              </button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/categories" className="text-gray-700 font-semibold hover:text-brand-primary transition-colors">
              Products
            </Link>
            <Link href="/offers" className="text-gray-700 font-semibold hover:text-brand-primary transition-colors">
              Offers
            </Link>
            <Link href="/blog" className="text-gray-700 font-semibold hover:text-brand-primary transition-colors">
              Blog
            </Link>
          </nav>
          
        </div>
      </div>
    </header>
  );
}
