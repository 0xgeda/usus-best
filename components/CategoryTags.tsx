'use client';

import { Category } from '@/types';

interface CategoryTagsProps {
  categories: Category[];
  selectedCategory: number | null;
  onSelect: (categoryId: number | null) => void;
}

export default function CategoryTags({ categories, selectedCategory, onSelect }: CategoryTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center py-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-5 py-2 rounded-xl text-sm font-medium tracking-wide
          transition-all duration-500 ease-out
          ${!selectedCategory 
            ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.12)] scale-[1.02]' 
            : 'bg-white dark:bg-[#1d1d1f] text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#2d2d2f] shadow-[0_2px_10px_rgb(0,0,0,0.04)] dark:shadow-[0_2px_10px_rgb(0,0,0,0.2)]'
          }`}
      >
        全部
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 flex items-center space-x-1
            ${selectedCategory === category.id 
              ? 'bg-blue-500 text-white shadow-sm' 
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            } border border-transparent`}
        >
          <span className="text-sm">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
