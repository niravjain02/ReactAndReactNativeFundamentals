import type { User } from '../models/User';

export function filterUsers(users: User[], query: string): User[] {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return users;
  }

  return users.filter((user) =>
    [user.name, user.email, user.username, user.company.name].some((field) =>
      field.toLowerCase().includes(normalized),
    ),
  );
}
