import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, ShieldCheck, Banknote, ShoppingBasket, ThumbsUp } from 'lucide-react';
import CategoryCard from '../components/product/CategoryCard';
import ProductCard from '../components/product/ProductCard';
import { mockCategories } from '../lib/data/mockCategories';
import { trendingProducts } from '../lib/data/mockProducts';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
      
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-brand-light min-h-[300px] md:min-h-[400px] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
            alt="Grocery Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-brand-accent text-white text-sm font-bold rounded-full mb-4">
            Discover Our Wide Range of Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 leading-tight">
            Everything Your Home Needs, Available In-Store.
          </h2>
          <p className="text-gray-700 md:text-lg mb-8 max-w-xl">
            Fresh groceries, daily essentials, household products and much more — all in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/categories" className="bg-brand-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors inline-flex items-center gap-2">
              Explore Products <ArrowRight size={20} />
            </Link>
            <Link href="/offers" className="bg-white text-brand-dark px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
              <Tag size={20} /> View Offers
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-brand-dark">Shop by Category</h2>
          <Link href="/categories" className="text-brand-primary font-semibold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {mockCategories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Deals & Offers (Countdown) */}
      <section className="bg-gradient-to-r from-brand-dark to-brand-primary rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Save up to 40% on Household Essentials</h2>
          <p className="text-brand-light/90">Limited time in-store offer on top brands. Visit us now!</p>
        </div>
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">12</span>
            <span className="text-[10px] uppercase tracking-wider">Hours</span>
          </div>
          <span className="text-2xl font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">45</span>
            <span className="text-[10px] uppercase tracking-wider">Mins</span>
          </div>
          <span className="text-2xl font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">30</span>
            <span className="text-[10px] uppercase tracking-wider">Secs</span>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-brand-dark">Best Sellers</h2>
        </div>
        <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide snap-x">
          {trendingProducts.map(product => (
            <div key={product.id} className="min-w-[200px] md:min-w-[240px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Why Choose Grocery Hub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-light text-brand-primary rounded-full flex items-center justify-center mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
            <p className="text-gray-500 text-sm">We source only the freshest produce and highest quality goods for our shelves.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-light text-brand-primary rounded-full flex items-center justify-center mb-4">
              <Banknote size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Unbeatable Value</h3>
            <p className="text-gray-500 text-sm">Enjoy everyday low prices and incredible in-store offers on your favorite brands.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-light text-brand-primary rounded-full flex items-center justify-center mb-4">
              <ShoppingBasket size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Wide Selection</h3>
            <p className="text-gray-500 text-sm">Find everything you need under one roof, from daily essentials to exotic ingredients.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-light text-brand-primary rounded-full flex items-center justify-center mb-4">
              <ThumbsUp size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Exceptional Service</h3>
            <p className="text-gray-500 text-sm">Our friendly staff is always ready to assist you and make your shopping experience delightful.</p>
          </div>
        </div>
      </section>

      {/* Shop By Need */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">What are you looking for today?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Daily Essentials', color: 'bg-orange-100', text: 'text-orange-800', href: '/categories/fresh' },
            { name: 'Monthly Grocery', color: 'bg-blue-100', text: 'text-blue-800', href: '/categories/grocery' },
            { name: 'Fresh & Healthy', color: 'bg-green-100', text: 'text-green-800', href: '/categories/fresh' },
            { name: 'Home Cleaning', color: 'bg-purple-100', text: 'text-purple-800', href: '/categories/home' },
          ].map(need => (
            <Link 
              key={need.name} 
              href={need.href} 
              className={`${need.color} ${need.text} p-6 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center min-h-[120px] text-center`}
            >
              {need.name}
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
