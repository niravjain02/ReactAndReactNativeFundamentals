const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// Services own communication with external systems such as APIs or storage.
// A service is similar to a Swift APIClient or networking service.
export async function fetchUsers() {
  const response = await fetch(USERS_URL);

  if (!response.ok) {
    throw new Error('Unable to load users. Please try again.');
  }

  return response.json();
}
