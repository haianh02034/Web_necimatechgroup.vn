import axios, { AxiosResponse } from 'axios';
import { store } from '../store/store';
import { apiUrl } from '../utils/apiUrl';

const axiosClient = axios.create({
  baseURL: apiUrl('api'),
  headers: { 'Content-Type': 'application/json' },
  timeout: 20000, // tránh treo vì request quá lâu
  validateStatus: (status) => status >= 200 && status < 300, // chỉ 2xx là success
});

axiosClient.interceptors.request.use((config: any) => {
  const headers: { Authorization?: string; Language?: string } = {};
  const accessToken = store.getState().auth?.accessToken || '';
  if (accessToken?.length) headers.Authorization = `Bearer ${accessToken}`;
  headers.Language = 'en';
  return { ...config, headers: { ...config.headers, ...headers } };
});

// ✅ Luôn chuẩn hoá cả success và error thành cùng shape { error, errors, ...data }
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // 2xx
    const data = response?.data ?? {};
    return {
      ...data,
      error: typeof data?.error === 'string' ? data.error : '',
      errors: data?.errors && typeof data.errors === 'object' ? data.errors : {},
      status: response.status,
    };
  },
  (error) => {
    // !2xx hoặc network error/timeout
    const resp = error?.response;
    const data = resp?.data ?? {};
    const status = resp?.status ?? 0;

    // message ưu tiên theo thứ tự: data.error -> data.message -> error.message -> fallback
    const message =
      (typeof data?.error === 'string' && data.error) ||
      (typeof data?.message === 'string' && data.message) ||
      (error?.message || 'Network error');

    // luôn resolve để các hook .subscribe(next) nhận được và set trạng thái kết thúc
    return Promise.resolve({
      ...data,
      error: String(message),
      errors: data?.errors && typeof data.errors === 'object' ? data.errors : {},
      status,
    });
  }
);

export default axiosClient;
