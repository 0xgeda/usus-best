'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import Navbar from '../components/Navbar';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import BackToTop from '../components/BackToTop';
import CategoryTags from '../components/CategoryTags';
import Loading from '../components/Loading';
import { Category, Website } from '../types';

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [websites, setWebsites] = useState<Website[]>([]);
  const [filteredWebsites, setFilteredWebsites] = useState<Website[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesRes, websitesRes] = await Promise.all([
          supabase
            .from('categories')
            .select('*')
            .order('sort_order'),
          supabase
            .from('websites')
            .select('*')
            .order('sort_order'),
        ]);

        setCategories(categoriesRes.data || []);
        setWebsites(websitesRes.data || []);
        setFilteredWebsites(websitesRes.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...websites];
    
    // 应用分类筛选
    if (selectedCategory) {
      filtered = filtered.filter(website => website.category_id === selectedCategory);
    }
    
    // 应用搜索筛选
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        website =>
          website.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          website.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredWebsites(filtered);
  }, [selectedCategory, searchQuery, websites]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 dark:text-white tracking-tight whitespace-nowrap">
            Find The Best Tools For <span className="text-[#E84B23]">Business Consultants</span>
          </h1>
        </div>

        <div className="mb-6">
          <Search onSearch={handleSearch} totalWebsites={websites.length} />
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <CategoryTags
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <CategoryList categories={categories} websites={filteredWebsites} />
          </>
        )}
      </div>
      <BackToTop />
    </main>
  );
}
