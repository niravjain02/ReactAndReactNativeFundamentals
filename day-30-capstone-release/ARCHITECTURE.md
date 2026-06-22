# Architecture Reference

This document captures the architecture patterns used in the capstone and explains how they map to production React Native conventions and iOS/Swift equivalents.

---

## Production Folder Structure

```
src/
├── components/         Reusable UI primitives — know nothing about business logic
│   ├── AppButton.tsx
│   ├── AppCard.tsx
│   ├── EmptyState.tsx
│   ├── ErrorView.tsx
│   ├── FavoriteButton.tsx
│   ├── LoadingView.tsx
│   ├── SearchBar.tsx
│   └── UserCard.tsx
│
├── screens/            One file per destination in the navigator
│   ├── UserListScreen.tsx
│   ├── FavoritesScreen.tsx
│   └── UserDetailScreen.tsx
│
├── hooks/              Custom hooks — logic that multiple screens share
│   ├── useUsers.ts     Fetch + loading/error/retry state
│   └── useFavorites.ts Context + hook for favorites
│
├── services/           Network layer — all fetch() calls live here
│   └── userService.ts
│
├── storage/            Persistence layer — all AsyncStorage calls live here
│   └── favoritesStorage.ts
│
├── models/             TypeScript interfaces only — no logic
│   └── User.ts
│
├── theme/              Design tokens — no components, no logic
│   ├── colors.ts
│   ├── radii.ts
│   ├── shadows.ts
│   ├── spacing.ts
│   ├── typography.ts
│   └── index.ts        Barrel export
│
└── utils/              Pure functions — no React, no network, no storage
    └── userFilters.ts
```

---

## Dependency Rule

Each layer may only import from layers below it. Violations make code untestable and hard to refactor.

```
App.tsx
  └── screens/
        └── hooks/ + components/
              └── services/ + storage/ + utils/ + models/ + theme/
```

**Allowed:**
- A screen imports a hook, a component, the theme
- A hook imports a service, a storage module, a model
- A component imports the theme and models (for prop types)

**Forbidden:**
- A service imports a hook
- A storage module imports a service
- A component calls `fetch` directly
- A utility imports from React

---

## Components vs Screens

| | Components | Screens |
|---|---|---|
| Purpose | Reusable UI building blocks | Full destinations in the navigator |
| Navigation | Never navigate | Own `navigation` and `route` props |
| Business logic | None | Minimal — delegate to hooks |
| State | UI state only (pressed, focused) | Orchestrate hook state |
| Reuse | Used in many screens | Each is used once |
| iOS analogy | `UIView` subclass | `UIViewController` |

A component that needs to call `navigation.navigate` is a screen in disguise — pull it out.

---

## Hooks vs Services

| | Hooks | Services |
|---|---|---|
| Purpose | Manage React state derived from external data | Talk to the network or device APIs |
| React dependency | Yes — uses `useState`, `useEffect` | No — plain async functions |
| Return value | `{ data, isLoading, error, refetch }` | `Promise<Data>` |
| Testability | Tested with `renderHook` | Tested with `jest.fn()` mock of `fetch` |
| iOS analogy | ViewModel (`@Observable` class) | Repository / network layer |

Hooks call services; services never call hooks. This keeps services pure and independently testable.

---

## Theme & Design System

### Token hierarchy

```
Primitive tokens (raw values)
  colors.ts    → "#3157D5"
  spacing.ts   → 16
  radii.ts     → 18
  shadows.ts   → { shadowColor, shadowOffset, ... }
  typography.ts → { sizes: { body: 15 }, weights: { bold: '700' } }

Semantic usage (in components)
  backgroundColor: colors.primary      ← not "#3157D5"
  borderRadius:    radii.lg            ← not 18
  padding:         spacing.lg          ← not 16
```

### Why tokens matter
- Change the brand colour in one place (`colors.primary`) and every component updates
- Designers and developers speak the same language: "spacing-lg" not "16"
- Dark mode: swap the token values, not every component

### Adding dark mode (next step)
```ts
// theme/colors.ts
export const lightColors = { background: '#F4F7FB', text: '#17213A', ... };
export const darkColors  = { background: '#0D1117', text: '#F0F6FC', ... };

// hooks/useThemeColors.ts
export function useThemeColors() {
  const scheme = useColorScheme();
  return scheme === 'dark' ? darkColors : lightColors;
}
```

---

## Storage & Persistence

### Layers

```
React state (in-memory, lost on unmount)
  ↕ synced by hook
AsyncStorage (on-device, survives restarts)
  ↕ synced by storage module
```

### The storage module pattern
```ts
// storage/favoritesStorage.ts — no React, no hooks
export async function loadFavorites(): Promise<User[]> { ... }
export async function saveFavorites(users: User[]): Promise<void> { ... }
```

```ts
// hooks/useFavorites.ts — React, no AsyncStorage calls directly
useEffect(() => {
  loadFavorites().then(setFavorites);   // load on mount
}, []);

const toggle = useCallback((user) => {
  setFavorites((curr) => {
    const next = ...;
    saveFavorites(next);                // write on change
    return next;
  });
}, []);
```

Keeping storage calls out of hooks means you can swap AsyncStorage for SQLite, MMKV, or Realm by editing only the storage module — the hook and all screens are untouched.

### What NOT to store in AsyncStorage
| Data | Use instead |
|---|---|
| Auth tokens, passwords | `expo-secure-store` (Keychain/Keystore) |
| Large binary blobs | File system (`expo-file-system`) |
| Relational / queryable data | SQLite (`expo-sqlite`) or WatermelonDB |
| High-frequency writes | MMKV (synchronous, C++ backed) |

---

## iOS / Swift Architecture Mapping

| React Native | Swift / iOS |
|---|---|
| `App.tsx` | `AppDelegate` / `SceneDelegate` / SwiftUI `App` |
| `NavigationContainer` | `UINavigationController` / SwiftUI `NavigationStack` |
| `createNativeStackNavigator` | `UINavigationController` push/pop |
| Screen component | `UIViewController` |
| `useLayoutEffect` + `setOptions` | `viewDidLoad` → `navigationItem.rightBarButtonItem` |
| `FlatList` | `UITableView` / SwiftUI `List` |
| `ScrollView` | `UIScrollView` |
| `Pressable` | `UIButton` / `UITapGestureRecognizer` |
| `StyleSheet.create` | `UIAppearance` / SwiftUI `ViewModifier` |
| Custom hook | `@Observable` ViewModel class |
| `FavoritesProvider` (Context) | `@EnvironmentObject` in SwiftUI |
| `AsyncStorage` | `UserDefaults` (small data) |
| `expo-secure-store` | Keychain (`SecItemAdd`) |
| `services/userService.ts` | `URLSession` + `Codable` repository |
| `models/User.ts` interface | `Codable` struct |
| `useEffect` + `isActive` flag | `Task { }` + `task.cancel()` in `onDisappear` |
| `useMemo` filter | Computed property on ViewModel |
| `React.memo` | SwiftUI's `Equatable` conformance on View |
| `theme/colors.ts` | `Assets.xcassets` color set / SwiftUI `Color` extension |
| `theme/spacing.ts` | Design token enum in Swift |
| Jest unit test | XCTest unit test |

### Data flow comparison

**React Native:**
```
Screen
  └─ useFavorites() hook      (ViewModel)
        ├─ FavoritesContext    (shared state)
        └─ favoritesStorage   (AsyncStorage)
              └─ AsyncStorage  (UserDefaults equivalent)
```

**SwiftUI:**
```
View
  └─ @StateObject FavoritesViewModel
        ├─ @Published favorites: [User]
        └─ UserDefaultsRepository
              └─ UserDefaults
```

The shape is identical — only the syntax differs.
