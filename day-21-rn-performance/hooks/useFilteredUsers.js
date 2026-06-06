import { useMemo } from 'react';

export default function useFilteredUsers(users, searchText) {
  // useMemo caches the filtered array until users or searchText changes.
  // Counter updates can therefore skip this work and reuse the previous result.
  return useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    if (!normalizedSearch) {
      return users;
    }

    return users.filter((user) =>
      user.name.toLowerCase().includes(normalizedSearch)
    );
  }, [users, searchText]);
}
