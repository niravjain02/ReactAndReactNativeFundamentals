import { User, UserStatus } from '../models/User';

// Typed utility functions document both their accepted input and returned output.
export function formatUserDisplayName(user: User): string {
  return `${user.name} - ${user.role}`;
}

export function formatExperience(years: number): string {
  return `${years} ${years === 1 ? 'year' : 'years'}`;
}

export function getStatusLabel(active: boolean): UserStatus {
  return active ? 'Active' : 'Inactive';
}
