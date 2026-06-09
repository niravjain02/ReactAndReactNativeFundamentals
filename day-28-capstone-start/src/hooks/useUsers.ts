import { useCallback, useEffect, useState } from 'react';
import type { User } from '../models/User';
import { fetchUsers } from '../services/userService';

interface UseUsersResult {
  users: User[];
  isLoading: boolean;
  error: string | null;
  retry: () => void;
}

// A custom hook keeps ViewModel-like loading and error logic outside the UI.
export function useUsers(): UseUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [requestKey, setRequestKey] = useState(0);

  const retry = useCallback(() => {
    setRequestKey((currentKey) => currentKey + 1);
  }, []);

  useEffect(() => {
    let isActive = true;

    async function loadUsers() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchUsers();

        if (isActive) {
          setUsers(response);
        }
      } catch (requestError) {
        if (isActive) {
          const message =
            requestError instanceof Error
              ? requestError.message
              : 'Something went wrong while loading users.';
          setError(message);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    loadUsers();

    return () => {
      isActive = false;
    };
  }, [requestKey]);

  return { users, isLoading, error, retry };
}
