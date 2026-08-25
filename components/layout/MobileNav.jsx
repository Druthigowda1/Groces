'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Search, Tag, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Categories', href: '/categories', icon: LayoutGrid },
    { name: 'Search', href: '/search', icon: Search },
    { name: 'Offers', href: '/offers', icon: Tag },
    { name: 'Blog', href: '/blog', icon: BookOpen },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 pb-safe">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name}
              href={item.href}
              className="relative flex flex-col items-center justify-center w-full h-full space-y-1"
            >
              <div className="relative">
                <Icon 
                  size={22} 
                  className={cn(
                    "transition-colors duration-200",
                    isActive ? "text-brand-primary" : "text-gray-500"
                  )} 
                />
              </div>
              <span className={cn(
                "text-[10px] font-medium transition-colors duration-200",
                isActive ? "text-brand-primary font-semibold" : "text-gray-500"
              )}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
