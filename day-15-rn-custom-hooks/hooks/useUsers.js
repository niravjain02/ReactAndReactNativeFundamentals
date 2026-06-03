import { useCallback, useEffect, useState } from "react";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // A custom hook is a reusable function that can use React hooks inside it.
  // Custom hook names start with "use" so React can enforce the Rules of Hooks.
  const refreshUsers = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(USERS_URL);

      if (!response.ok) {
        throw new Error("The server returned an error.");
      }

      const data = await response.json();
      setUsers(data);
    } catch (requestError) {
      setUsers([]);
      setError(requestError.message || "Something went wrong while loading users.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUsers();
  }, [refreshUsers]);

  // Hooks improve code reuse because another screen could call useUsers()
  // without copying fetch, loading, error, or refresh logic into that screen.
  // This separates business logic from UI: the hook decides how data is loaded,
  // and App.js decides how that data should look on the screen.
  return {
    loading,
    error,
    users,
    refreshUsers
  };
}
