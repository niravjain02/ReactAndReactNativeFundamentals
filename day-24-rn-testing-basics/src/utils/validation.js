// Pure utility functions are a good first testing target because the same input
// always produces the same output. They do not depend on UI, network, or storage.

export function validateEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }

  const trimmedEmail = email.trim();
  const simpleEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return simpleEmailPattern.test(trimmedEmail);
}

export function validateRequired(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function validateExperience(value) {
  if (value === '' || value === null || value === undefined) {
    return false;
  }

  const years = Number(value);

  return Number.isFinite(years) && years >= 0 && years <= 50;
}
