# Learning Summary — 30 Days of React & React Native

---

## Day-by-Day Summary Table

| Day | Folder | Topic | Key Takeaway |
|-----|--------|-------|-------------|
| 01 | `day-01-modern-javascript` | Modern JavaScript | `const`/`let`, arrow functions, destructuring, spread, optional chaining, `async/await`, modules |
| 02 | `day-02-react-web-vite` | React Web with Vite | JSX, function components, props, Vite dev server |
| 03 | `day-03-react-state-events` | State & Events | `useState`, event handlers, re-render cycle |
| 04 | `day-04-useeffect-lifecycle` | `useEffect` & Lifecycle | Side effects, dependency array, cleanup functions |
| 05 | `day-05-controlled-inputs` | Controlled Inputs | Controlled vs uncontrolled, form state, `onChange` |
| 06 | `day-06-lifting-state-up` | Lifting State Up | Sharing state between siblings via a common parent |
| 07 | `day-07-component-composition` | Component Composition | `children` prop, slot patterns, reusable UI primitives |
| 08 | `day-08-react-native-expo` | React Native with Expo | `View`, `Text`, `StyleSheet`, Expo Go, Metro bundler |
| 09 | `day-09-rn-state-interactions` | State & Interactions | `Pressable`, `TouchableOpacity`, `useState` in RN |
| 10 | `day-10-rn-flatlist` | FlatList | Virtualised lists, `keyExtractor`, `renderItem`, separators |
| 11 | `day-11-rn-navigation` | Navigation | React Navigation native stack, `createNativeStackNavigator` |
| 12 | `day-12-rn-search-filter` | Search & Filter | `TextInput`, `useMemo` filter, case-insensitive matching |
| 13 | `day-13-rn-api-fetch` | API Fetch | `fetch`, `useEffect` + `async`, abort / cleanup pattern |
| 14 | `day-14-rn-ui-states` | Loading / Error / Empty | `ActivityIndicator`, error boundaries, empty list components |
| 15 | `day-15-rn-custom-hooks` | Custom Hooks | Extracting reusable logic; `useUsers`, `useSearch` |
| 16 | `day-16-rn-context-api` | Context API | `createContext`, `Provider`, `useContext`, avoiding prop drilling |
| 17 | `day-17-rn-asyncstorage` | AsyncStorage | `getItem`, `setItem`, JSON serialisation, error handling |
| 18 | `day-18-rn-forms-validation` | Forms & Validation | `TextInput` validation, error messages, submit handling |
| 19 | `day-19-rn-navigation-params` | Navigation Params | Typed `RootStackParamList`, `route.params`, passing objects |
| 20 | `day-20-rn-user-directory` | Mini Project | First end-to-end mini app combining Days 08–19 |
| 21 | `day-21-rn-performance` | Performance | `useCallback`, `useMemo`, `React.memo`, `FlatList` optimisation |
| 22 | `day-22-rn-pagination-refresh` | Pagination & Refresh | `onEndReached`, `refreshing`, `onRefresh`, page-based fetch |
| 23 | `day-23-rn-production-architecture` | Production Architecture | `screens/`, `components/`, `hooks/`, `services/`, `utils/` split |
| 24 | `day-24-rn-testing-basics` | Testing with Jest | `describe`/`it`/`expect`, pure function unit tests, async tests |
| 25 | `day-25-rn-debugging-devtools` | Debugging & DevTools | React DevTools, Flipper, `console` strategies, error boundaries |
| 26 | `day-26-rn-design-system` | Design System | Token-based theme: colors, spacing, typography; reusable components |
| 27 | `day-27-rn-typescript` | TypeScript for RN | Interfaces, generics, typed props, `as const`, strict mode |
| 28 | `day-28-capstone-start` | Capstone — Start | Full typed app: models, services, hooks, screens, navigation |
| 29 | `day-29-capstone-polish` | Capstone — Polish | Favorites, AsyncStorage, AppButton, AppCard, Context + hook |
| 30 | `day-30-capstone-release` | Capstone — Release | Documentation, architecture summary, interview prep |

---

## React Web Learnings (Days 01–07)

### JavaScript foundations (Day 01)
Before React, the modern JS features that make React ergonomic:
- Destructuring and spread make props clean: `const { name, age } = user`
- Arrow functions preserve `this` and read well in JSX callbacks
- Optional chaining (`?.`) prevents null crashes when working with API data
- `async/await` makes asynchronous code read like synchronous code
- ES modules (`import`/`export`) are the foundation of every React project

### Components and JSX (Day 02)
- A React component is just a function that returns JSX
- JSX is syntactic sugar for `React.createElement` — the browser never sees it
- Vite provides instant hot-module reload, making the feedback loop tight
- `props` are read-only; a component never mutates what a parent passed down

### State and Events (Day 03–04)
- `useState` returns `[value, setter]`; calling the setter schedules a re-render
- The dependency array of `useEffect` is the most important concept to get right:
  - Empty `[]` = run once on mount
  - `[dep]` = run when `dep` changes
  - No array = run after every render (almost never what you want)
- Cleanup functions in `useEffect` prevent memory leaks: return a function that cancels timers, subscriptions, or fetch requests

### Forms and data flow (Days 05–06)
- Controlled inputs: React owns the value, not the DOM — `value={state}` + `onChange={setter}`
- Lifting state: when two siblings need the same data, move the state to their nearest common parent and pass it down as props
- Unidirectional data flow (top → down) is not a limitation; it makes bugs easy to trace

### Composition (Day 07)
- `children` is just a prop — any JSX passed between component tags becomes `children`
- Composing small, single-purpose components beats building large monolithic ones
- The best component APIs are small: 2–4 props, clear types, sensible defaults

---

## React Native Learnings (Days 08–27)

### Core primitives (Days 08–09)
- `View` = `<div>`, `Text` = `<span>`, `Image` = `<img>` — but only these; no HTML
- `StyleSheet.create` is not required but catches typos at dev time and can optimise style objects
- Every style value is a number (not `"16px"`) — the unit is density-independent pixels
- Flexbox is the only layout system; `flexDirection` defaults to `'column'` (opposite of CSS)

### Lists and navigation (Days 10–11)
- `FlatList` virtualises the DOM — only visible rows are rendered, critical for performance
- `keyExtractor` must return a unique string per item; using `id.toString()` is the standard
- React Navigation's native stack maps directly to `UINavigationController` on iOS
- Typed `RootStackParamList` makes navigation type-safe end-to-end

### Data and state (Days 12–17)
- `useMemo` for filtering: wrap `filterUsers(users, query)` so it only recomputes when inputs change
- Always use an `isActive` flag in async `useEffect` to prevent setting state on unmounted components
- Custom hooks (`useUsers`) are the React equivalent of a ViewModel — they own loading state, error state, and retry logic so screens stay declarative
- AsyncStorage is async, key-value, string-only — always JSON.stringify/parse objects

### Production quality (Days 18–26)
- Form validation: validate on submit (not on every keystroke) for a less annoying UX
- `React.memo` prevents a child from re-rendering if its props haven't changed
- `useCallback` stabilises function references so memoised children stay stable
- Pagination: track `page`, `isLoadingMore`, and `hasMore` as separate state slices
- Design tokens (`colors.primary`, `spacing.lg`) prevent magic numbers and make global theme changes a one-file edit

### TypeScript (Day 27 + Capstone)
- `interface` for object shapes, `type` for unions and aliases
- `as const` freezes an object's type to its literal values — essential for theme tokens
- Generic hooks: `useState<User[]>([])` — always annotate the initial value
- `NativeStackScreenProps<RootStackParamList, 'ScreenName'>` gives typed `route.params` and `navigation`
- Strict mode (`"strict": true` in tsconfig) catches the most bugs at compile time

---

## Architecture Learnings (Days 23, 28–29)

### Why folder structure matters
A flat `components/` folder works at 10 files. At 50 files it becomes a scroll hunt. Separating by role (`screens/`, `hooks/`, `services/`, `storage/`, `utils/`) means any new team member (or future-you) knows exactly where to look.

### The layering rule
Each layer has one job and depends only on layers below it:

```
screens        → use hooks, components
hooks          → use services, storage, models
services       → talk to the network
storage        → talk to AsyncStorage
components     → pure UI; no network, no storage
utils          → pure functions; no React
models         → TypeScript types only; no logic
theme          → constants only; no logic
```

Breaking this rule — for example, calling `fetch` directly inside a component — means you cannot reuse, test, or swap that logic without touching the UI.

### Context vs prop drilling
Prop drilling is fine for 1–2 levels. When a value needs to reach 3+ levels down, or needs to be shared across sibling trees, Context is the right tool. The pattern:
1. `createContext` with a typed interface
2. A `Provider` component that owns the state
3. A custom hook (`useFavorites`) that wraps `useContext` and throws a helpful error if used outside the provider
