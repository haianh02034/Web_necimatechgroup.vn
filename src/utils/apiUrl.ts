import { config } from '../configs/config';
import { objFilters } from './objFilters';

export const apiUrl = (action?: string, params?: Record<string, any>): string => {
  const baseUrl = (config?.apiUrl || window.location.origin).replace(/[\\/\\]*$/, '');
  const strAction = action?.length ? action.replace(/^[\\/\\]*/, '') : '';
  const queryParams = params ? `?${new URLSearchParams(objFilters(params))}` : '';

  return `${baseUrl}/${strAction}${queryParams}`;
};
