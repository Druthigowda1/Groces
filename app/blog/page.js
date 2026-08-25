import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { mockBlogs } from '../../lib/data/mockBlogs';

export const metadata = {
  title: 'Blog | Grocery Hub',
  description: 'Read our latest articles on health, food storage, and recipes.',
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">The Grocery Hub Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Tips, tricks, recipes, and insights to help you make the most out of your fresh groceries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockBlogs.map((blog) => (
          <Link 
            key={blog.id} 
            href={`/blog/${blog.id}`}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
          >
            <div className="relative h-56 w-full overflow-hidden bg-brand-light">
              <Image 
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-brand-primary rounded-full uppercase tracking-wider">
                {blog.category}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> {blog.author}</span>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                {blog.title}
              </h2>
              
              <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center text-brand-primary font-semibold text-sm">
                Read Article <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
