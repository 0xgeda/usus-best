'use client';

import { Website } from '@/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface WebsiteCardProps {
  website: Website;
}

export default function WebsiteCard({ website }: WebsiteCardProps) {
  const [imageError, setImageError] = useState(false);
  const [favicon, setFavicon] = useState<string | null>(null);

  useEffect(() => {
    if (!website.image_url && !imageError) {
      try {
        const url = new URL(website.url);
        // 使用Google的favicon服务作为备选
        setFavicon(`https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`);
      } catch (e) {
        console.error('Invalid URL:', website.url);
        setImageError(true);
      }
    }
  }, [website.url, website.image_url, imageError]);

  return (
    <a
      href={website.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 bg-white dark:bg-[#1d1d1f] rounded-xl 
        border border-gray-100/50 dark:border-gray-800/50
        hover:bg-gray-50 dark:hover:bg-[#2d2d2f]
        transition-all duration-500 ease-out
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
        hover:scale-[1.02] hover:-translate-y-1"
    >
      <div className="relative flex items-start gap-3">
        <div className="flex-shrink-0 flex items-center justify-center">
          {!imageError && (website.image_url || favicon) ? (
            <Image
              src={website.image_url || favicon!}
              alt={website.title}
              width={40}
              height={40}
              className="rounded-lg group-hover:scale-110 transition-transform duration-500 ease-out"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-3xl group-hover:scale-110 transition-transform duration-500 ease-out">🌐</span>
          )}
        </div>
        
        <div className="flex-1 min-w-0 space-y-1">
          <h3 className="text-base font-medium text-gray-900 dark:text-white truncate 
            group-hover:text-blue-600 dark:group-hover:text-blue-400 
            transition-colors duration-500">
            {website.title}
          </h3>
          {website.description && (
            <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2
              group-hover:text-gray-600 dark:group-hover:text-gray-300 
              transition-colors duration-500 leading-normal">
              {website.description}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}
