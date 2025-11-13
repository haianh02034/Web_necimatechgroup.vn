export interface IApiResponse<T = any> {
  error: string;
  errors: Record<string, any>;
  status?: number;
  [key: string]: any;
}

export interface CategoryDto {
  _id: string;
  name: string;
  slug: string;
  description: string;
  parentId: string | null;
  isActive: boolean;
  order: string | number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImageUrl: string;
  };
  ancestors: any[];
  createdAt: string;
  updatedAt: string;
}

export interface PostDto {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  contentHtml: string;
  categoryId: string;
  category?: CategoryDto;
  author: string;
  tags: string | string[];
  status?: string;
  isFeatured?: boolean;
  publishedAt: string;
  authorId?: string;
  previewToken?: string;
  previewTokenExpiresAt?: string;
  viewCount?: number;
  likeCount?: number;
  revisionsCount?: number;
  isDeleted?: boolean;
  createdAt: string;
  updatedAt: string;
  seo?: {
    metaTitle: string;
    metaDescription: string;
    ogImageUrl: string;
  };
}

export interface PaginatorDto<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
