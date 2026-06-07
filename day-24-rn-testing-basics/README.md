# Day 24: Testing Basics with Jest

This Expo project introduces unit testing through small validation and formatting utilities. It uses Jest, a JavaScript test runner included through Expo's `jest-expo` preset.

## Why Testing Matters

Mobile apps contain logic for forms, profiles, calculations, and data formatting. Automated tests confirm that this logic still behaves correctly after code changes. A failing test can reveal a regression before it reaches a simulator, device, or user.

Unit tests are a useful starting point because they verify one small behavior at a time. Pure utility functions are especially approachable: they have clear inputs and outputs and do not depend on navigation, network requests, device APIs, or rendered screens.

## Project Structure

```text
day-24-rn-testing-basics/
├── src/
│   ├── components/
│   │   └── ProfileSummary.js
│   ├── utils/
│   │   ├── validation.js
│   │   └── userFormatter.js
│   └── __tests__/
│       ├── validation.test.js
│       └── userFormatter.test.js
├── App.js
└── package.json
```

## What Is Being Tested

`validation.test.js` verifies:

- `validateEmail(email)` accepts valid email shapes and rejects invalid values.
- `validateRequired(value)` rejects empty or whitespace-only text.
- `validateExperience(value)` accepts values from 0 through 50.

`userFormatter.test.js` verifies:

- `formatUserName(user)` combines names and provides a fallback.
- `formatUserRole(user)` formats a role with an optional company.
- `formatExperience(years)` handles singular, plural, and invalid values.

The tests demonstrate the Arrange / Act / Assert pattern:

1. **Arrange:** Prepare the input and expected result.
2. **Act:** Call the function being tested.
3. **Assert:** Use Jest's `expect` function to verify the result.

## Run the App

```bash
cd day-24-rn-testing-basics
npm install
npx expo start
```

Open the project in Expo Go, an Android emulator, or the iOS Simulator.

## Run the Tests

Run the complete test suite once:

```bash
npm test
```

Rerun affected tests while files change:

```bash
npm run test:watch
```

Jest finds files ending in `.test.js`, runs their test cases, and reports passing and failing expectations.

## iOS and Swift Mapping

| React Native testing | iOS / Swift equivalent |
| --- | --- |
| Jest tests | XCTest test cases |
| JavaScript utility tests | Tests for pure Swift functions |
| React Native component tests | SwiftUI or UIKit snapshot and behavior tests |

The testing goals are similar across both platforms: isolate behavior, provide known input, verify output, and catch regressions automatically.

