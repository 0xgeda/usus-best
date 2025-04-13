'use client';

import { useState } from 'react';
import { Website } from '@/types';

interface SearchProps {
  onSearch: (query: string) => void;
  totalWebsites?: number;
}

export default function Search({ onSearch, totalWebsites }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search with keywords"
          className="w-full px-4 py-2.5 pl-10 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          🔍
        </span>
        {totalWebsites !== undefined && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            {totalWebsites} websites
          </span>
        )}
      </div>
    </div>
  );
}
