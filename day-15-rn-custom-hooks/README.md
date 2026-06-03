# Day 15: Custom Hooks

This day builds a React Native user directory that fetches real API data through a reusable custom hook.

## Concepts Covered

- Expo blank app
- Custom hooks
- Separating UI rendering from business logic
- Fetching users from JSONPlaceholder
- Loading and error state inside a hook
- Retry button
- Pull-to-refresh with `FlatList`
- Reusable `UserCard` component

## What Is a Custom Hook?

A custom hook is a JavaScript function whose name starts with `use` and can call React hooks like `useState`, `useEffect`, and `useCallback`.

In this project, `useUsers` owns the API logic:

- `loading`
- `error`
- `users`
- `refreshUsers`

That means `App.js` can focus on rendering the screen instead of managing request details.

## Why Hooks Improve Code Reuse

If another screen needed the same users API, it could call `useUsers()` and receive the same data, loading state, error state, and refresh function. This avoids copying API code between components.

## Project Structure

```text
day-15-rn-custom-hooks/
├── App.js
├── app.json
├── assets/
├── components/
│   └── UserCard.js
├── hooks/
│   └── useUsers.js
├── index.js
├── package.json
└── README.md
```

## How to Run

```bash
cd day-15-rn-custom-hooks
npm install
npx expo start
```

Use Expo Go on a device, or press `i`/`a` in the Expo terminal to launch an available simulator or emulator.
