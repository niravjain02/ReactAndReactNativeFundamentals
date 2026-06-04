# Day 17: AsyncStorage & Local Persistence

This day builds a simple React Native settings/profile screen that saves data locally with AsyncStorage.

## Concepts Covered

- Expo blank app
- `@react-native-async-storage/async-storage`
- Saving local data
- Restoring saved data when the app launches
- Clearing saved data
- `JSON.stringify` and `JSON.parse`
- Simple settings UI with `TextInput`, `Switch`, and `Pressable`

## What Is AsyncStorage?

AsyncStorage is a small key-value storage API for React Native. It is useful for lightweight local data such as settings, preferences, draft form values, and simple profile details.

AsyncStorage stores strings. That is why this project uses:

- `JSON.stringify` before saving an object
- `JSON.parse` after reading the saved string

## App Flow

Save flow:

1. The user edits name, role, or dark mode.
2. `App.js` sends the current values to `saveProfileSettings`.
3. `profileStorage.js` converts the object to a string and writes it to AsyncStorage.

Restore flow:

1. The app launches.
2. `App.js` calls `loadProfileSettings`.
3. If saved data exists, the screen state is rebuilt from that saved object.

Clear flow:

1. The user taps Clear Saved Data.
2. `profileStorage.js` removes the saved key.
3. `App.js` resets the screen to default values.

## Why Persistence Matters

Mobile users expect settings and profile details to stay available after closing and reopening an app. Local persistence makes small app preferences feel stable without needing a backend.

## Project Structure

```text
day-17-rn-asyncstorage/
├── App.js
├── app.json
├── assets/
├── components/
│   ├── ProfileForm.js
│   └── ProfilePreview.js
├── storage/
│   └── profileStorage.js
├── index.js
├── package.json
└── README.md
```

## How to Run

```bash
cd day-17-rn-asyncstorage
npm install
npx expo install @react-native-async-storage/async-storage
npx expo start
```

Use Expo Go on a device, or press `i` or `a` in the Expo terminal to launch an available simulator or emulator.
