# Day 16: Context API & Global State

This day builds a simple React Native app that shares state across components with the React Context API.

## Concepts Covered

- Expo blank app
- `createContext`
- Context `Provider`
- `useContext`
- Global state for a profile, theme mode, and counter
- Avoiding prop drilling
- When Context is useful and when it can become too much

## What the App Demonstrates

`AppContext` stores shared state:

- `profile`
- `themeMode`
- `counter`
- `toggleTheme`
- `updateProfileRole`
- `incrementCounter`
- `decrementCounter`
- `resetCounter`

`App.js` wraps the screen in `AppProvider`. Child components then call `useContext(AppContext)` to read and update shared state without receiving those values as props.

## Why Context Helps

Without Context, `App.js` would need to pass the same state and functions through every component layer that sits between the state owner and the component that needs it. That is called prop drilling.

Context is useful for state many parts of an app need, such as the signed-in user, theme, language, or app settings. It can become too much if every small local state value is placed in Context, because the app becomes harder to reason about and unrelated components may re-render together.

## Project Structure

```text
day-16-rn-context-api/
├── App.js
├── app.json
├── assets/
├── components/
│   ├── CounterControls.js
│   ├── ProfileCard.js
│   └── ThemeToggle.js
├── context/
│   └── AppContext.js
├── index.js
├── package.json
└── README.md
```

## How to Run

```bash
cd day-16-rn-context-api
npm install
npx expo start
```

Use Expo Go on a device, or press `i` or `a` in the Expo terminal to launch an available simulator or emulator.
