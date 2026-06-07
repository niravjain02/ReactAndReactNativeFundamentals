// Formatters keep display rules in one place instead of repeating them in views.
// Their clear inputs and outputs make them straightforward to unit test.

export function formatUserName(user) {
  if (!user) {
    return 'Unknown User';
  }

  const fullName = [user.firstName, user.lastName]
    .filter(Boolean)
    .join(' ')
    .trim();

  return fullName || 'Unknown User';
}

export function formatUserRole(user) {
  if (!user?.role) {
    return 'Role not provided';
  }

  return user.company ? `${user.role} at ${user.company}` : user.role;
}

export function formatExperience(years) {
  if (years === '' || years === null || years === undefined) {
    return 'Experience not provided';
  }

  const numericYears = Number(years);

  if (!Number.isFinite(numericYears) || numericYears < 0) {
    return 'Experience not provided';
  }

  return `${numericYears} ${numericYears === 1 ? 'year' : 'years'} of experience`;
}
