# Day 27: TypeScript for React Native

This Expo project builds a typed Profile Dashboard while introducing TypeScript fundamentals for React Native. The screen displays a user, toggles account status, and increments years of experience.

## TypeScript Basics

TypeScript adds static types to JavaScript. A type describes what kind of value a variable, function parameter, return value, or object property may contain. The TypeScript compiler checks these rules before the app runs.

This project enables `strict` mode in `tsconfig.json`, which provides stronger checks for missing values and incorrect types.

Common types used here include:

- `string` for names, roles, IDs, and email addresses;
- `number` for years of experience;
- `boolean` for active status;
- union types such as `'primary' | 'secondary'` for limited choices;
- function types such as `() => void` for button callbacks.

## Project Structure

```text
day-27-rn-typescript/
├── src/
│   ├── components/
│   │   ├── ProfileCard.tsx
│   │   ├── StatBadge.tsx
│   │   └── AppButton.tsx
│   ├── models/
│   │   └── User.ts
│   ├── utils/
│   │   └── userFormatter.ts
│   └── screens/
│       └── HomeScreen.tsx
├── App.tsx
└── tsconfig.json
```

Files containing JSX use the `.tsx` extension. Files containing TypeScript without JSX use `.ts`.

## Type-Safe Models

The `User` interface defines one consistent shape for user data:

```ts
interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  yearsOfExperience: number;
  active: boolean;
}
```

Both `type` and `interface` can describe objects. This project uses an interface for the `User` model and component props, while type aliases describe union types such as button variants and user status labels.

## Type-Safe Props

Each component declares the props it accepts. For example, `ProfileCard` requires `user: User`, and `AppButton` requires a string title plus an `onPress` function. Passing a number as a button title or a string as the user produces a compile-time error.

Typed props make a component's API visible in the editor and safer to reuse.

## Type-Safe State

`HomeScreen` uses `useState<User>`, so every state value and update must remain a complete `User`. TypeScript catches missing properties and values with the wrong type while code is being written.

The state update functions use the previous user and return a new object. One toggles the boolean `active` property, and one increments the numeric `yearsOfExperience` property.

## Typed Utility Functions

The formatter functions declare parameter and return types:

- `formatUserDisplayName(user: User): string`
- `formatExperience(years: number): string`
- `getStatusLabel(active: boolean): UserStatus`

This prevents a caller from passing unrelated data and documents what each helper returns.

## iOS and Swift Mapping

| TypeScript / React Native | iOS / Swift |
| --- | --- |
| TypeScript types and interfaces | Swift structs and strongly typed models |
| Typed component props | Typed initializer parameters in SwiftUI or UIKit |
| TypeScript compiler checks | Swift compiler checks |
| `useState<User>` | A typed stored property or SwiftUI `@State` model |
| String union type | Swift enum with a fixed set of cases |

TypeScript and Swift use different syntax, but both encourage models with known fields and compile-time checks. These checks reduce invalid values moving through the application.

## Run the App

```bash
cd day-27-rn-typescript
npm install
npx expo start
```

Then open the app in Expo Go, the iOS Simulator, an Android emulator, or a web browser.

Check the TypeScript project without starting Expo:

```bash
npx tsc --noEmit
```
