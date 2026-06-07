import { useCallback, useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

// Hooks coordinate state and side effects for the UI. In an iOS MVVM app,
// this responsibility often belongs to an ObservableObject ViewModel.
export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const loadUsers = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const nextUsers = await fetchUsers();
      setUsers(nextUsers);
    } catch (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { users, isLoading, errorMessage, reloadUsers: loadUsers };
}
