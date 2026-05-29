# Day 14: Reusable Loading, Error & Empty States

This day builds a React Native user list screen that simulates common API states.

## Concepts Covered

- Expo blank app
- Loading, success, error, and empty UI states
- Conditional rendering
- Reusable UI state components
- `FlatList` for successful data rendering
- `Pressable` controls for switching between simulated states
- Beginner-friendly production UX thinking

## Why These States Matter

Production apps rarely show data instantly every time. Screens need a clear loading state while work is happening, an error state when something fails, and an empty state when the request succeeds but there is nothing to show.

Separating these into reusable components keeps the screen easier to read and helps the app feel consistent as it grows.

## Project Structure

```text
day-14-rn-ui-states/
├── App.js
├── app.json
├── assets/
├── components/
│   ├── EmptyState.js
│   ├── ErrorView.js
│   ├── LoadingView.js
│   └── UserCard.js
├── index.js
├── package.json
└── README.md
```

## How to Run

```bash
cd day-14-rn-ui-states
npm install
npx expo start
```

Use Expo Go on a device, or press `i`/`a` in the Expo terminal to launch an available simulator or emulator.
