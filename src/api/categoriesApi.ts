import { CategoryDto, PaginatorDto } from '../types';
import { IApiResponse } from '../types';
import axiosClient from './axiosClient';

const prefix = '/categories';

// unwrap cực kỳ phòng thủ
const unwrap = (res: any) => {
  // AxiosResponse
  if (res && typeof res === 'object' && 'data' in res) return res.data;
  return res;
};

// object có numeric-keys -> chuyển thành mảng
const toArrayFromNumericKeys = (obj: any) => {
  if (!obj || typeof obj !== 'object') return [];
  const numericKeys = Object.keys(obj)
    .filter(k => String(+k) === k) // là số
    .sort((a, b) => +a - +b);
  if (!numericKeys.length) return [];
  return numericKeys.map(k => obj[k]);
};

function normalizeCategoriesList(
  res: any
): IApiResponse<{ items?: CategoryDto[]; paginate?: PaginatorDto<CategoryDto> }> {
  // Nhiều backend bọc data ở nhiều lớp
  const a = unwrap(res);
  const b = unwrap(a?.data);
  const data = b ?? a;

  // 1) Trả hẳn mảng
  if (Array.isArray(data)) {
    return { items: data, error: '', errors: {} } as any;
  }

  // 2) data.items là mảng
  if (data && typeof data === 'object' && Array.isArray(data.items)) {
    return {
      ...data,
      items: data.items,
      paginate: data.paginate,
      error: data.error || '',
      errors: data.errors || {},
    };
  }

  // 3) object có numeric-keys (mảng bị spread)
  const maybeArray = toArrayFromNumericKeys(data);
  if (maybeArray.length) {
    return { items: maybeArray, error: data?.error || '', errors: data?.errors || {} } as any;
  }

  // 4) Một số interceptor trả { success, data: [...] }
  if (data && typeof data === 'object' && Array.isArray(data.data)) {
    return { items: data.data, error: data?.error || '', errors: data?.errors || {} } as any;
  }

  // 5) Fallback
  return { items: [], error: data?.error || '', errors: data?.errors || {} } as any;
}

export const categoriesApi = {
  list: async (
    params?: { parentId?: string }
  ): Promise<IApiResponse<{ items?: CategoryDto[]; paginate?: PaginatorDto<CategoryDto> }>> => {
    const res = await axiosClient.get(`${prefix}`, { params });

    return normalizeCategoriesList(res);
  },
};
