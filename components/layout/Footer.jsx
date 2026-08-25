import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light pt-12 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-brand-dark font-bold text-xl leading-none">G</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight leading-none">Grocery Hub</h2>
              </div>
            </div>
            <p className="text-brand-light/80 text-sm mb-6">
              Where Quality Meets Value. Your one-stop shop for fresh groceries, daily essentials, and household products.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-brand-light/80">
              <li><Link href="/categories/fresh" className="hover:text-white transition-colors">Fresh & Daily</Link></li>
              <li><Link href="/categories/grocery" className="hover:text-white transition-colors">Grocery & Staples</Link></li>
              <li><Link href="/categories/home" className="hover:text-white transition-colors">Home Care</Link></li>
              <li><Link href="/categories/personal" className="hover:text-white transition-colors">Personal Care</Link></li>
              <li><Link href="/offers" className="hover:text-brand-accent transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2 text-sm text-brand-light/80">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-brand-light/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/partner" className="hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-light/10 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-brand-light/60">
          <p>&copy; {new Date().getFullYear()} Grocery Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
