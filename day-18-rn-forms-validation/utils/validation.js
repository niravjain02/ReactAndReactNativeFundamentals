const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateProfile(values) {
  const errors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedRole = values.role.trim();
  const trimmedYears = values.yearsOfExperience.trim();
  const yearsNumber = Number(trimmedYears);

  if (!trimmedName) {
    errors.name = "Name is required.";
  }

  if (!trimmedEmail) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = "Enter a valid email address.";
  }

  if (!trimmedRole) {
    errors.role = "Role is required.";
  }

  if (!trimmedYears) {
    errors.yearsOfExperience = "Years of experience is required.";
  } else if (!Number.isFinite(yearsNumber) || yearsNumber < 0) {
    errors.yearsOfExperience = "Years of experience must be a non-negative number.";
  }

  return errors;
}

export function hasValidationErrors(errors) {
  return Object.keys(errors).length > 0;
}
