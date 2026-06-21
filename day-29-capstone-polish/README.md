# Day 29 — Capstone Polish: Favorites & Persistence

Day 28 built a working TypeScript User Directory. Day 29 polishes it into a portfolio-ready app with favorites, AsyncStorage persistence, reusable design primitives, and a cleaner architecture.

---

## What was polished from Day 28

| Area | Day 28 | Day 29 |
|---|---|---|
| Favorites | None | Toggle ♥ on any card or detail screen |
| Persistence | None | AsyncStorage — survives app restarts |
| Reusable button | Raw `Pressable` | `AppButton` with primary / secondary / danger variants |
| Card wrapper | Inline `View` styles | `AppCard` — single source of truth for card UI |
| Theme tokens | colors, spacing, typography | + `radii`, `shadows`, `lineHeights`, `success`, `warning` colors |
| Favorites screen | None | Dedicated screen with count badge on header icon |
| Detail screen | Read-only | Header heart button + bottom action button |
| Empty states | Basic | Flexible props for custom titles and messages |

---

## Favorites persistence

Favorites are stored as a `User[]` array in AsyncStorage under the key `@user_directory/favorites`.

The flow:
1. `FavoritesProvider` (in `App.tsx`) loads favorites from AsyncStorage on mount.
2. `toggleFavorite(user)` adds or removes a user and immediately writes back to AsyncStorage.
3. Any screen calling `useFavorites()` reads from the same in-memory state — no re-fetching.
4. On next launch, `loadFavorites()` restores the saved list.

### Swift equivalent

```swift
// iOS: UserDefaults or a Codable model in a JSON file
@AppStorage("favorites") private var favoritesData: Data = Data()
```

---

## Architecture

```
src/
├── components/
│   ├── AppButton.tsx       Reusable button — primary, secondary, danger variants
│   ├── AppCard.tsx         Reusable card wrapper — border, radius, shadow tokens
│   ├── EmptyState.tsx      Flexible empty message for list and favorites screens
│   ├── ErrorView.tsx       Error UI with AppButton retry action
│   ├── FavoriteButton.tsx  Heart toggle icon — ♡ / ♥
│   ├── LoadingView.tsx     Centered activity indicator
│   ├── SearchBar.tsx       Controlled text input for filtering
│   └── UserCard.tsx        List row — avatar, name, email, FavoriteButton
├── screens/
│   ├── UserListScreen.tsx  Directory with search + header Favorites button
│   ├── FavoritesScreen.tsx Saved users list
│   └── UserDetailScreen.tsx Full profile — header heart, info cards, action button
├── services/
│   └── userService.ts      fetch() wrapper for the JSONPlaceholder API
├── hooks/
│   ├── useFavorites.ts     Context + hook — favorites state, isFavorite, toggleFavorite
│   └── useUsers.ts         Async data fetching with loading / error / retry
├── models/
│   └── User.ts             TypeScript interfaces for User, Address, Company
├── storage/
│   └── favoritesStorage.ts AsyncStorage read / write — isolated from React
├── theme/
│   ├── colors.ts           Brand palette + semantic tokens (success, warning, danger)
│   ├── radii.ts            Border radius scale (sm → xl → full)
│   ├── shadows.ts          iOS + Android shadow presets (sm, md)
│   ├── spacing.ts          8-pt spacing scale (xs → xxxl)
│   ├── typography.ts       Size scale, weights, and line heights
│   └── index.ts            Barrel export
└── utils/
    └── userFilters.ts      Pure function — filter users by name / email / company
```

---

## How to run

```bash
cd day-29-capstone-polish
npm install
npx expo start
```

Scan the QR code with Expo Go (iOS or Android) or press `i` for iOS Simulator.

### Type check

```bash
npm run typecheck
```

---

## iOS / Swift mapping

| React Native | Swift / UIKit |
|---|---|
| `FavoritesProvider` (Context) | `@EnvironmentObject` in SwiftUI |
| `useFavorites` hook | `@StateObject` ViewModel |
| `AsyncStorage` | `UserDefaults` / `FileManager` |
| `useLayoutEffect` + `navigation.setOptions` | `navigationItem.rightBarButtonItem` |
| `AppButton` variants | `UIButton.Configuration` styles |
| `AppCard` | `UIView` with `layer.cornerRadius` + `layer.shadowColor` |
| `FlatList` | `UITableView` / `List` in SwiftUI |
