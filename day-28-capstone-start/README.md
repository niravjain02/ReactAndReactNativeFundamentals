# Day 28: Capstone Start - User Directory App

Day 28 starts the final React Native capstone: a polished User Directory and Profile Manager built with Expo and TypeScript. The project combines API networking, reusable UI states, search, navigation, typed models, and a shared theme in one portfolio-ready app.

## Current Scope

This first capstone day establishes the architecture and read-only user experience. The app fetches remote users, presents a searchable directory, and opens a complete profile screen for each person.

## Features Implemented

- Native stack navigation with typed screen params
- Users fetched from JSONPlaceholder
- Efficient user rendering with `FlatList`
- Loading, error with retry, and empty states
- Search by name, email, username, or company name
- Reusable user cards and search input
- Profile details for name, username, email, phone, website, company, and city
- Strict TypeScript models for API data, props, navigation, and hook results
- Shared color, spacing, and typography constants

## Folder Architecture

```text
day-28-capstone-start/
├── src/
│   ├── components/
│   │   ├── UserCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── LoadingView.tsx
│   │   ├── ErrorView.tsx
│   │   └── EmptyState.tsx
│   ├── screens/
│   │   ├── UserListScreen.tsx
│   │   └── UserDetailScreen.tsx
│   ├── services/
│   │   └── userService.ts
│   ├── hooks/
│   │   └── useUsers.ts
│   ├── models/
│   │   └── User.ts
│   ├── theme/
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   └── index.ts
│   └── utils/
│       └── userFilters.ts
├── App.tsx
└── README.md
```

The architecture separates responsibilities: screens assemble complete destinations, components render reusable UI, hooks coordinate screen state, services communicate with APIs, models define data contracts, utilities contain pure filtering logic, and the theme keeps visual choices consistent.

## Data Flow

1. `UserListScreen` calls `useUsers`.
2. `useUsers` asks `userService` to fetch the API data.
3. The hook exposes users plus loading, error, and retry state.
4. `userFilters` applies the current search query.
5. `FlatList` renders each matching user with `UserCard`.
6. A card press sends a typed `User` param to `UserDetailScreen`.

## How to Run

```bash
cd day-28-capstone-start
npm install
npx expo start
```

Then open the app in Expo Go, the iOS Simulator, an Android emulator, or a web browser. Run the TypeScript check with:

```bash
npm run typecheck
```

## Next Capstone Days

### Day 29

Add user creation and editing, form validation, local persistence, and shared form components so the directory becomes a profile manager instead of a read-only browser.

### Day 30

Complete the capstone with deletion and confirmation flows, UX refinements, testing, accessibility checks, final documentation, and production cleanup.

## iOS and Swift Mapping

| React Native architecture | iOS / Swift equivalent |
| --- | --- |
| `models/` | Swift structs |
| `services/` | Networking layer |
| `hooks/` | ViewModel-like logic |
| `components/` | Reusable SwiftUI views |
| `screens/` | ViewControllers or feature screens |

The mapping is conceptual: React hooks are functions, while Swift ViewModels are commonly observable classes, but both can coordinate data and UI state outside a visual component.
