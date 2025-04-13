export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    icon: string | null;
    sort_order: number;
  }

  export interface Website {
    id: number;
    title: string;
    url: string;
    description: string | null;
    category_id: number;
    image_url: string | null;
    is_featured: boolean;
    sort_order: number;
  }