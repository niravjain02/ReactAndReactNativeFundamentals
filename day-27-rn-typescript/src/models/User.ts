// TypeScript matters because it describes the shape of data before the app runs.
// The compiler can warn us when a User is missing a field or has the wrong value type.
export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  yearsOfExperience: number;
  active: boolean;
}

// Both `type` and `interface` can describe object shapes. Interfaces are often
// used for models and component props, while `type` is useful for unions such
// as the button variants below. Consistency is more important than one rule.
export type UserStatus = 'Active' | 'Inactive';
