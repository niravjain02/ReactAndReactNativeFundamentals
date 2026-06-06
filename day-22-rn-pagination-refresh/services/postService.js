const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchPosts(page, limit, signal) {
  const url = `${POSTS_URL}?_page=${page}&_limit=${limit}`;
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Unable to load posts (${response.status}).`);
  }

  const posts = await response.json();
  const totalCountHeader = response.headers.get('x-total-count');
  const totalCount = totalCountHeader ? Number(totalCountHeader) : null;

  return { posts, totalCount };
}
