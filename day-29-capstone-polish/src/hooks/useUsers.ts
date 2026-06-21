import { useCallback, useEffect, useState } from 'react';
import type { User } from '../models/User';
import { fetchUsers } from '../services/userService';

interface UseUsersResult {
  users: User[];
  isLoading: boolean;
  error: string | null;
  retry: () => void;
}

export function useUsers(): UseUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [requestKey, setRequestKey] = useState(0);

  const retry = useCallback(() => {
    setRequestKey((k) => k + 1);
  }, []);

  useEffect(() => {
    let isActive = true;

    async function loadUsers() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchUsers();
        if (isActive) setUsers(data);
      } catch (err) {
        if (isActive) {
          setError(err instanceof Error ? err.message : 'Something went wrong while loading users.');
        }
      } finally {
        if (isActive) setIsLoading(false);
      }
    }

    loadUsers();

    return () => {
      isActive = false;
    };
  }, [requestKey]);

  return { users, isLoading, error, retry };
}
