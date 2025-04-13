'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              USUS.BEST
            </Link>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
