import {
  validateEmail,
  validateExperience,
  validateRequired,
} from '../utils/validation';

// Jest is the test runner. It discovers this file, runs each test, and provides
// expect matchers that compare actual values with expected values.
describe('validation utilities', () => {
  describe('validateEmail', () => {
    test('returns true for a valid email', () => {
      // Arrange
      const email = 'learner@example.com';

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBe(true);
    });

    test('returns false for invalid emails', () => {
      expect(validateEmail('learner@example')).toBe(false);
      expect(validateEmail('not-an-email')).toBe(false);
      expect(validateEmail('')).toBe(false);
      expect(validateEmail(null)).toBe(false);
    });
  });

  describe('validateRequired', () => {
    test('accepts text with visible characters', () => {
      expect(validateRequired('React Native')).toBe(true);
    });

    test('rejects empty, whitespace, and non-string values', () => {
      expect(validateRequired('')).toBe(false);
      expect(validateRequired('   ')).toBe(false);
      expect(validateRequired(null)).toBe(false);
    });
  });

  describe('validateExperience', () => {
    test('accepts experience from 0 through 50 years', () => {
      expect(validateExperience(0)).toBe(true);
      expect(validateExperience('5')).toBe(true);
      expect(validateExperience(50)).toBe(true);
    });

    test('rejects experience outside the allowed range', () => {
      expect(validateExperience(-1)).toBe(false);
      expect(validateExperience(51)).toBe(false);
      expect(validateExperience('')).toBe(false);
      expect(validateExperience('many')).toBe(false);
    });
  });
});
