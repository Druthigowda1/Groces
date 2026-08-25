import Link from 'next/link';
import Image from 'next/image';

export default function CategoryCard({ category }) {
  return (
    <Link 
      href={`/categories/${category.id}`}
      className="group flex flex-col items-center justify-center bg-brand-light/30 border border-brand-light hover:bg-brand-light hover:border-brand-primary/30 rounded-2xl p-4 transition-all duration-300 text-center"
    >
      <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300 border-2 border-white">
        <Image 
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <h3 className="font-semibold text-gray-800 text-sm mb-1">{category.name}</h3>
      <p className="text-xs text-gray-500">{category.count}+ items</p>
    </Link>
  );
}
