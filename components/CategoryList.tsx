import { Category, Website } from '@/types';
import WebsiteCard from './WebsiteCard';

interface CategoryListProps {
  categories: Category[];
  websites: Website[];
}

export default function CategoryList({ categories, websites }: CategoryListProps) {
  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const categoryWebsites = websites.filter(
          (website) => website.category_id === category.id
        );

        if (categoryWebsites.length === 0) return null;

        return (
          <div key={category.id}>
            <div className="flex items-center space-x-2 mb-4">
              {category.icon && (
                <span className="text-3xl">
                  {category.icon}
                </span>
              )}
              <h2 className="text-xl font-medium text-gray-900 dark:text-white tracking-tight">
                {category.name}
              </h2>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                [ {categoryWebsites.length} ]
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {categoryWebsites.map((website) => (
                <WebsiteCard key={website.id} website={website} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
