import type { User } from '../models/User';

export function filterUsers(users: User[], query: string): User[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return users;
  }

  return users.filter((user) =>
    [user.name, user.email, user.username, user.company.name].some((value) =>
      value.toLowerCase().includes(normalizedQuery),
    ),
  );
}
