import { useCallback, useEffect, useRef, useState } from 'react';

import { fetchPosts } from '../services/postService';

const PAGE_SIZE = 10;

export default function usePaginatedPosts() {
  const [posts, setPosts] = useState([]);
  // page stores the last page that loaded successfully.
  const [page, setPage] = useState(0);
  // hasMore becomes false when the server has no additional posts.
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const isRequestRunning = useRef(false);
  const abortController = useRef(null);

  const loadPage = useCallback(async (nextPage, mode) => {
    // A refresh may replace an older request. Load-more calls are ignored while
    // another request is running, which prevents duplicate pages.
    if (isRequestRunning.current && mode === 'more') {
      return;
    }

    if (mode === 'refresh') {
      abortController.current?.abort();
    }

    const controller = new AbortController();
    abortController.current = controller;
    isRequestRunning.current = true;
    setError(null);

    if (mode === 'initial') setIsInitialLoading(true);
    if (mode === 'refresh') setIsRefreshing(true);
    if (mode === 'more') setIsLoadingMore(true);

    try {
      const result = await fetchPosts(nextPage, PAGE_SIZE, controller.signal);

      setPosts((currentPosts) =>
        mode === 'more' ? [...currentPosts, ...result.posts] : result.posts
      );

      // JSONPlaceholder returns x-total-count. The fallback handles APIs
      // that only signal the end with a short or empty page.
      const morePagesExist = result.totalCount !== null
        ? nextPage * PAGE_SIZE < result.totalCount
        : result.posts.length === PAGE_SIZE;
      setHasMore(morePagesExist);
      setPage(nextPage);
    } catch (requestError) {
      if (requestError.name !== 'AbortError') {
        setError(requestError.message || 'Unable to load posts.');
      }
    } finally {
      if (abortController.current === controller) {
        isRequestRunning.current = false;
        setIsInitialLoading(false);
        setIsRefreshing(false);
        setIsLoadingMore(false);
      }
    }
  }, []);

  useEffect(() => {
    loadPage(1, 'initial');

    return () => abortController.current?.abort();
  }, [loadPage]);

  const refresh = useCallback(() => {
    // Refresh starts again at page 1 and replaces the current list.
    loadPage(1, 'refresh');
  }, [loadPage]);

  const loadMore = useCallback(() => {
    if (!hasMore || isRequestRunning.current) {
      return;
    }

    loadPage(page + 1, 'more');
  }, [hasMore, loadPage, page]);

  const retry = useCallback(() => {
    if (posts.length === 0) {
      loadPage(1, 'initial');
    } else {
      loadMore();
    }
  }, [loadMore, loadPage, posts.length]);

  return {
    posts,
    error,
    hasMore,
    isInitialLoading,
    isRefreshing,
    isLoadingMore,
    refresh,
    loadMore,
    retry,
  };
}
