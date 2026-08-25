import Link from 'next/link';
import { Tag } from 'lucide-react';

export default function OffersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6">
        <Tag size={40} className="text-brand-primary" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Special Offers</h1>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        Use code <span className="font-bold text-brand-primary">WELCOME10</span> to get 10% off your first order! Or use <span className="font-bold text-brand-primary">SAVE100</span> for flat ₹100 off.
      </p>
      <Link href="/categories" className="inline-flex bg-brand-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors">
        Shop Now
      </Link>
    </div>
  );
}
