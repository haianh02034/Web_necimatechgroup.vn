import { useEffect, useState } from 'react';
import { PostDto } from '../types';
import { postsApi } from '../api/postsApi';

export const usePosts = (params?: { categoryId?: string }) => {
  const [posts, setPosts] = useState<PostDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await postsApi.list(params);
        if (response.error) setError(response.error);
        else setPosts(response.items || []);
      } catch {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [JSON.stringify(params)]); // dependency để tự reload khi params thay đổi

  return { posts, loading, error };
};
