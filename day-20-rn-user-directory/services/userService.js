const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// The service layer keeps API details out of screens, so UI code can focus on rendering.
export async function fetchUsers() {
  const response = await fetch(USERS_URL);

  if (!response.ok) {
    throw new Error('Unable to load users. Please try again.');
  }

  return response.json();
}
