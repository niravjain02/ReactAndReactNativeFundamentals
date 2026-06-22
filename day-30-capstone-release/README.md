# Day 30 — Capstone Release & Portfolio Summary

Day 30 closes the 30-day React and React Native fundamentals series. No new code is written today. Instead, this folder documents the complete journey, the architecture of the final capstone, and what comes next.

---

## The 30-Day Journey

The series is split into three acts:

**Act 1 — React Web (Days 01–07)**
Modern JavaScript foundations, then React on the web: components, state, events, `useEffect`, controlled inputs, lifting state, and composition patterns.

**Act 2 — React Native (Days 08–27)**
Expo setup, then 20 days of React Native covering every major topic: lists, navigation, API calls, custom hooks, Context API, AsyncStorage, forms, performance, pagination, testing, debugging, design systems, and TypeScript.

**Act 3 — TypeScript Capstone (Days 28–30)**
A fully typed, production-architecture User Directory app built in two passes (start → polish) and documented here on Day 30.

---

## Final Capstone Overview

The capstone lives in two folders:

| Folder | Purpose |
|---|---|
| `day-28-capstone-start/` | First pass — typed models, hooks, navigation, fetch, search, loading/error/empty states |
| `day-29-capstone-polish/` | Polished pass — favorites, AsyncStorage persistence, AppButton, AppCard, FavoriteButton, FavoritesScreen, richer theme tokens |

**What the app does:**
- Fetches 10 users from `https://jsonplaceholder.typicode.com/users`
- Displays them in a searchable, filterable list
- Navigates to a full profile detail screen
- Lets the user favorite/unfavorite any user
- Persists favorites across app restarts via AsyncStorage
- Shows a dedicated Favorites screen with a live badge count in the header

**Tech stack:** Expo SDK 56 · React Native 0.85 · React 19 · TypeScript 6 · React Navigation native stack · AsyncStorage 2.2

---

## Key React Concepts Learned

- **JSX and components** — function components as the only building block
- **useState / useReducer** — local state management
- **useEffect** — side effects, data fetching, cleanup with `isActive` flag
- **useCallback / useMemo** — referential stability to prevent unnecessary renders
- **useContext** — global state without prop drilling (favorites in capstone)
- **Custom hooks** — `useUsers`, `useFavorites` encapsulate logic away from UI
- **Component composition** — `AppCard`, `AppButton` as primitives; screens compose them
- **Controlled inputs** — search bar drives filtering via `useState`
- **Lifting state up** — `FavoritesProvider` owns favorites state, children read it

---

## Key React Native Concepts Learned

- **FlatList** — virtualized lists with `keyExtractor`, `renderItem`, `ListHeaderComponent`, `ListEmptyComponent`
- **React Navigation** — native stack, typed `RootStackParamList`, `useNavigation`, `useLayoutEffect` + `setOptions`
- **AsyncStorage** — key/value persistence; isolated in a `storage/` layer
- **Pressable** — preferred over TouchableOpacity; `({ pressed })` style function
- **StyleSheet.create** — static style objects for perf; theme tokens keep values DRY
- **Platform differences** — `elevation` (Android) vs `shadowColor` (iOS) in the shadows theme
- **Safe area** — `react-native-safe-area-context` prevents content hiding behind notches
- **ActivityIndicator** — loading feedback with `accessibilityLiveRegion`

---

## How to Run the Capstone

```bash
# Polished capstone (recommended)
cd day-29-capstone-polish
npm install
npx expo start
```

Scan the QR code with **Expo Go** on iOS or Android, or press `i` for the iOS Simulator.

```bash
# Type check
npm run typecheck
```

---

## Recommended Next Improvements

These were intentionally left out to keep the capstone beginner-focused. They are natural next steps:

1. **Bottom tab navigation** — add a Tabs navigator so Favorites is always one tap away
2. **Dark mode** — extend the theme with a `dark` palette and `useColorScheme`
3. **Animations** — `Animated` or `react-native-reanimated` for card press and heart toggle
4. **Pull-to-refresh** — `FlatList` `onRefresh` / `refreshing` props (covered on Day 22)
5. **Unit tests** — Jest + `@testing-library/react-native` for hooks and filter utils (Day 24)
6. **Real auth** — replace JSONPlaceholder with a real API and add a login screen
7. **Zustand or Redux Toolkit** — replace Context for larger state graphs
8. **EAS Build** — compile a production `.ipa` / `.apk` with Expo Application Services
