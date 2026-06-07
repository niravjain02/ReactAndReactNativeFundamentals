# Day 25: Debugging & DevTools

This Expo app is a small debugging playground for practicing predictable loading, success, failure, error, and retry states.

Good debugging starts with a reproducible problem. The service in this project deliberately provides one request that always succeeds and one that always fails. This removes network randomness while you learn how to inspect state changes and logs.

## Project Structure

```text
day-25-rn-debugging-devtools/
├── src/
│   ├── components/
│   │   ├── DebugPanel.js
│   │   ├── ErrorState.js
│   │   └── NetworkStatusCard.js
│   ├── services/
│   │   └── debugApiService.js
│   ├── utils/
│   │   └── logger.js
│   └── constants/
│       └── debugMessages.js
├── App.js
└── README.md
```

## Run the App

```bash
cd day-25-rn-debugging-devtools
npm install
npx expo start
```

Then open the app in Expo Go, an Android emulator, or the iOS Simulator.

## Debug Buttons

### Fetch Success

Starts a simulated async request, displays the loading state, returns example data, and writes informational messages to both the terminal console and the on-screen debug panel.

### Fetch Failure

Starts the same loading flow but throws a controlled service error. The screen shows a user-friendly error while the debug log records technical details for the developer.

### Clear Logs

Removes the on-screen log history. It also demonstrates `console.warn` for an unusual but recoverable developer event.

### Retry Request

Appears after a failure and repeats the previous request type. In this learning project, retrying the deterministic failure continues to fail so the error path remains reproducible.

## Open the Expo Developer Menu

- **Physical device with Expo Go:** Shake the device.
- **iOS Simulator:** Press `Control + Command + Z` or choose **Device > Shake**.
- **Android Emulator:** Press `Command + M` on macOS or `Control + M` on Windows/Linux.
- **Expo terminal:** Press `m` while the Expo development server is focused.

The available options can vary by Expo and React Native version. Common tools include reload, element inspection, performance monitoring, and opening React Native DevTools.

## Common Debugging Commands

Start the Expo development server:

```bash
npx expo start
```

Clear Metro's cache when stale bundler data is suspected:

```bash
npx expo start --clear
```

Launch a platform directly:

```bash
npm run ios
npm run android
```

Check the installed Expo dependencies for compatible versions:

```bash
npx expo-doctor
```

While Expo is running, terminal shortcuts commonly include `r` to reload, `m` to open the developer menu, and `j` to open React Native DevTools.

## Logging Strategy

- Use `console.log` for normal development milestones such as request start and success.
- Use `console.warn` for unexpected but recoverable behavior.
- Use `console.error` for failures that need investigation.
- Include useful context, but never log passwords, access tokens, or private user data.
- Keep technical details in developer logs and show clear recovery instructions in user-facing UI.

Logging before and after an `await` call helps reveal where an asynchronous workflow stopped. Breakpoints can then pause execution so variables and call stacks can be inspected at that exact point.

## iOS and Swift Mapping

| React Native debugging | iOS / Swift equivalent |
| --- | --- |
| `console.log` | `print` or `os_log` / `Logger` |
| User-facing error state | User-facing SwiftUI or UIKit error UI |
| Retry flow | Recoverable network handling |
| Expo Developer Menu | Xcode debug tools |
| JavaScript breakpoints | Xcode breakpoints |
| React Native DevTools console | Xcode debug console |

In production iOS apps, Apple's unified logging system provides structured log levels and better filtering than basic `print` statements. The same principle applies here: choose intentional log levels and keep messages useful.

