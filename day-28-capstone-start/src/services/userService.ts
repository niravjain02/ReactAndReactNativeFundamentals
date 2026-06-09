import type { UserServiceResponse } from '../models/User';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// The service layer owns networking so screens do not need fetch details.
export async function fetchUsers(): Promise<UserServiceResponse> {
  const response = await fetch(USERS_URL);

  if (!response.ok) {
    throw new Error(`Unable to load users (${response.status}).`);
  }

  return (await response.json()) as UserServiceResponse;
}
