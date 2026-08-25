import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ChevronLeft } from 'lucide-react';
import { mockBlogs } from '../../../lib/data/mockBlogs';
import ReactMarkdown from 'react-markdown';

export function generateMetadata({ params }) {
  const blog = mockBlogs.find(b => b.id === params.id);
  if (!blog) return { title: 'Not Found | Grocery Hub' };
  
  return {
    title: `${blog.title} | Grocery Hub`,
    description: blog.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const blog = mockBlogs.find(b => b.id === params.id);

  if (!blog) {
    notFound();
  }

  // Related articles (just pick the others)
  const relatedBlogs = mockBlogs.filter(b => b.id !== blog.id).slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      
      {/* Back button */}
      <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-brand-primary hover:underline mb-8">
        <ChevronLeft size={16} className="mr-1" /> Back to Blog
      </Link>
      
      {/* Article Header */}
      <div className="mb-10 text-center">
        <div className="inline-block bg-brand-light text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          {blog.category}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5"><Calendar size={16} /> {blog.date}</span>
          <span className="flex items-center gap-1.5"><User size={16} /> By {blog.author}</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-md">
        <Image 
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-lg prose-brand max-w-none mb-16">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <div className="border-t border-gray-100 pt-12 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <Link 
                key={relatedBlog.id} 
                href={`/blog/${relatedBlog.id}`}
                className="group flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full md:w-32 h-48 md:h-32 rounded-xl overflow-hidden shrink-0">
                  <Image 
                    src={relatedBlog.image}
                    alt={relatedBlog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">
                    {relatedBlog.category}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {relatedBlog.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
