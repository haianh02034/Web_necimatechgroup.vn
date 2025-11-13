import { IApiResponse, PaginatorDto, PostDto } from '../types';
import axiosClient from './axiosClient';

const prefix = '/posts';

// unwrap để bóc lớp data
const unwrap = (res: any) => {
  if (res && typeof res === 'object' && 'data' in res) return res.data;
  return res;
};

const toArrayFromNumericKeys = (obj: any) => {
  if (!obj || typeof obj !== 'object') return [];
  const numericKeys = Object.keys(obj)
    .filter(k => String(+k) === k)
    .sort((a, b) => +a - +b);
  if (!numericKeys.length) return [];
  return numericKeys.map(k => obj[k]);
};

function normalizePostsList(
  res: any
): IApiResponse<{ items?: PostDto[]; paginate?: PaginatorDto<PostDto> }> {
  const a = unwrap(res);
  const b = unwrap(a?.data);
  const data = b ?? a;

  if (Array.isArray(data)) return { items: data, error: '', errors: {} } as any;
  if (data && Array.isArray(data.items))
    return { ...data, items: data.items, paginate: data.paginate, error: data.error || '', errors: data.errors || {} };
  const maybeArray = toArrayFromNumericKeys(data);
  if (maybeArray.length) return { items: maybeArray, error: data?.error || '', errors: data?.errors || {} } as any;
  if (data && Array.isArray(data.data))
    return { items: data.data, error: data?.error || '', errors: data?.errors || {} } as any;

  return { items: [], error: data?.error || '', errors: data?.errors || {} } as any;
}

export const postsApi = {
  list: async (
    params?: { categoryId?: string; limit?: number; offset?: number }
  ): Promise<IApiResponse<{ items?: PostDto[]; paginate?: PaginatorDto<PostDto> }>> => {
    let url = prefix;
    const queryParams: any = {};

    if (params?.categoryId) {
      url = `${prefix}/category/${params.categoryId}`;
    }

    if (params?.limit) queryParams.limit = params.limit;
    if (params?.offset !== undefined) queryParams.offset = params.offset;

    const res = await axiosClient.get(url, { params: queryParams });
    return normalizePostsList(res);
  },

  getBySlug: async (slug: string): Promise<IApiResponse<{ item?: PostDto }>> => {
    const res = await axiosClient.get(`${prefix}/slug/${slug}`);

    // Dữ liệu chi tiết (không cần normalize nhiều)
    const data = unwrap(res);
    const post = unwrap(data?.data ?? data);

    return {
      item: post,
      error: post?.error || '',
      errors: post?.errors || {},
    } as any;
  },
};
