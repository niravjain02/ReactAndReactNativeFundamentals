import {
  formatExperience,
  formatUserName,
  formatUserRole,
} from '../utils/userFormatter';

// Unit tests focus on one small unit of behavior. Utilities are ideal starting
// points because they do not need a simulator or rendered React Native screen.
describe('user formatter utilities', () => {
  describe('formatUserName', () => {
    test('combines a first and last name', () => {
      const user = { firstName: 'Maya', lastName: 'Patel' };

      const result = formatUserName(user);

      expect(result).toBe('Maya Patel');
    });

    test('returns a fallback when a name is unavailable', () => {
      expect(formatUserName({})).toBe('Unknown User');
      expect(formatUserName(null)).toBe('Unknown User');
    });
  });

  describe('formatUserRole', () => {
    test('includes the company when it is available', () => {
      const user = { role: 'Developer', company: 'Mobile Studio' };

      expect(formatUserRole(user)).toBe('Developer at Mobile Studio');
    });

    test('returns the role alone when there is no company', () => {
      expect(formatUserRole({ role: 'Designer' })).toBe('Designer');
    });

    test('returns a fallback when the role is unavailable', () => {
      expect(formatUserRole({})).toBe('Role not provided');
    });
  });

  describe('formatExperience', () => {
    test('uses the singular form for one year', () => {
      expect(formatExperience(1)).toBe('1 year of experience');
    });

    test('uses the plural form for other valid values', () => {
      expect(formatExperience(0)).toBe('0 years of experience');
      expect(formatExperience(4)).toBe('4 years of experience');
    });

    test('returns a fallback for invalid experience', () => {
      expect(formatExperience(-1)).toBe('Experience not provided');
      expect(formatExperience('')).toBe('Experience not provided');
      expect(formatExperience('unknown')).toBe('Experience not provided');
    });
  });
});
