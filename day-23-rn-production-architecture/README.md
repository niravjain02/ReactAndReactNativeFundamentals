# Day 23: Production Folder Architecture

This Expo app builds a small User Directory while demonstrating how a React Native project can be divided by responsibility.

Folder architecture matters because an app becomes harder to understand when networking, state, navigation, and UI all live in one file. Clear folders help developers find code, test one responsibility at a time, and grow features without turning screens into large components.

## Features

- Fetches users from JSONPlaceholder
- Displays loading, error, empty, and success states
- Searches by name, email, or company
- Renders users efficiently with `FlatList`
- Navigates from the directory to a user detail screen
- Shows name, email, phone, website, company, and city

## Folder Structure

```text
day-23-rn-production-architecture/
├── src/
│   ├── components/
│   │   ├── UserCard.js
│   │   ├── SearchBar.js
│   │   ├── LoadingView.js
│   │   ├── ErrorView.js
│   │   └── EmptyState.js
│   ├── screens/
│   │   ├── UserListScreen.js
│   │   └── UserDetailScreen.js
│   ├── hooks/
│   │   └── useUsers.js
│   ├── services/
│   │   └── userService.js
│   ├── constants/
│   │   └── colors.js
│   └── utils/
│       └── userFilters.js
├── App.js
└── README.md
```

## Folder Responsibilities

### `components/`

Small, reusable UI pieces. Components receive data and callbacks through props and do not control a complete app destination.

### `screens/`

Full pages registered with React Navigation. Screens connect reusable components to hooks, route params, and navigation actions.

### `hooks/`

Reusable React state and side-effect logic. `useUsers` asks the service for data and exposes users, loading state, error state, and a retry function.

### `services/`

Code that communicates with systems outside the UI. `userService` owns the API URL, the `fetch` call, and HTTP error handling.

### `constants/`

Shared values that should remain consistent across the app. `colors.js` acts as a small design system and prevents repeated color strings.

### `utils/`

Small functions that transform or inspect data without rendering UI or making network requests. `filterUsers` contains the directory search rules.

## Data Flow

1. `UserListScreen` calls the `useUsers` hook.
2. `useUsers` calls `fetchUsers` in `userService`.
3. The service requests users from `https://jsonplaceholder.typicode.com/users`.
4. The hook stores the result and exposes loading, error, users, and retry values.
5. The screen chooses which state component to render.
6. `filterUsers` creates a filtered list from the search text.
7. `FlatList` renders each result with `UserCard`.
8. Pressing a card passes the selected user to `UserDetailScreen` through React Navigation.

This one-direction flow is common in production apps: the screen requests state, the hook coordinates it, the service accesses data, and components render the result.

## iOS and Swift Mapping

| React Native | iOS / Swift equivalent | Responsibility |
| --- | --- | --- |
| `components/` | Small SwiftUI `View` types or reusable UIKit views | Reusable visual building blocks |
| `screens/` | Feature-level SwiftUI views or `UIViewController` types | Complete destinations and navigation |
| `useUsers` hook | `ObservableObject` ViewModel | UI state and async workflow coordination |
| `userService` | API client or service type | Networking and external data access |
| `constants/` | Swift constants, enums, or `Color` extensions | Shared design and configuration values |
| `utils/` | Pure Swift helper functions | Data transformation and reusable rules |

The mapping is conceptual rather than exact. React hooks are functions, while an iOS ViewModel is commonly a class, but both keep state-management details away from the visual layer.

## Run the App

```bash
cd day-23-rn-production-architecture
npm install
npx expo start
```

Then open the app in Expo Go, an Android emulator, or the iOS Simulator.

