// A TypeScript model is the shared contract for user data across the app.
// This is similar to defining Codable Swift structs for an API response.
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// The API returns a JSON array whose items must match the User model.
export type UserServiceResponse = User[];
