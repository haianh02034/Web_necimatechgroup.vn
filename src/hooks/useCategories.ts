import { useState, useEffect } from 'react';
import { CategoryDto } from '../types';
import { categoriesApi } from '../api/categoriesApi';

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await categoriesApi.list();
        if (response.error) {
          setError(response.error);
        } else {
          setCategories(response.items || []);
        }
      } catch (err) {
        setError('Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
