import { useEffect, useState } from 'react';
import { PostDto } from '../types';
import { postsApi } from '../api/postsApi';

export const usePostBySlug = (slug: string) => {
  const [post, setPost] = useState<PostDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await postsApi.getBySlug(slug);
        if (response.error) setError(response.error);
        else setPost(response.item || null);
      } catch {
        setError('Failed to fetch post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
};
