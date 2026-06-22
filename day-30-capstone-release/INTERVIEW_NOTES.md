# Interview Notes — React & React Native

These are talking-point summaries, not exhaustive answers. Use them as a mental checklist before interviews.

---

## React Interview Talking Points

### "Explain the React component lifecycle."
Function components have no lifecycle methods — they use hooks instead.
- **Mount:** `useEffect(() => { ... }, [])` — runs once after first render
- **Update:** `useEffect(() => { ... }, [dep])` — runs when `dep` changes
- **Unmount:** the cleanup function returned from `useEffect`

The mental model: *effects synchronise external systems with React state*. They are not event listeners for "when something happens" — they are descriptions of "this external thing should match this state value".

### "What is the virtual DOM?"
React keeps a lightweight JavaScript copy of the UI tree (the virtual DOM). On each render it diffs the new virtual tree against the previous one and applies only the changed nodes to the real DOM. This makes frequent updates cheap. React Native does the same but targets native views instead of DOM nodes.

### "When do you use `useCallback` and `useMemo`?"
- `useMemo` — memoises an **expensive computed value**: `const filtered = useMemo(() => filter(list, query), [list, query])`
- `useCallback` — memoises a **function reference**: `const handlePress = useCallback(() => { ... }, [dep])`

Use them when a child component is wrapped in `React.memo` and receives the function or value as a prop. Without memoisation, a new function/value reference is created every render, defeating `React.memo`.

The rule of thumb: only add these after you have a measured performance problem, not pre-emptively.

### "How does Context API differ from Redux?"
| | Context API | Redux / Zustand |
|---|---|---|
| Best for | Low-frequency global state (theme, auth, favorites) | High-frequency updates, complex reducers |
| Boilerplate | Minimal | More setup |
| Dev tools | None built-in | Redux DevTools, time-travel |
| Re-renders | All consumers re-render on any change | Selectors prevent unnecessary re-renders |

For most apps under ~50 screens, Context is sufficient. Reach for Zustand or Redux Toolkit when you need fine-grained subscriptions.

### "What causes unnecessary re-renders and how do you prevent them?"
1. A parent re-renders → all children re-render by default
2. **Fix:** `React.memo(Child)` — skips re-render if props are shallowly equal
3. But if a prop is a new function/object reference every render, `React.memo` is useless
4. **Fix:** `useCallback` for functions, `useMemo` for objects/arrays passed as props
5. Context: every consumer re-renders when the context value changes
6. **Fix:** split context into smaller contexts, or use a selector library

### "What is `key` and why does it matter in lists?"
`key` is React's identity for a list item. When the list order changes, React uses keys to match old nodes to new ones. Without a stable key, React may re-use the wrong DOM/native node, causing wrong state, flickering, or broken animations. Never use array index as a key for reorderable lists — use the item's stable ID.

---

## React Native Interview Talking Points

### "How is React Native different from a WebView app?"
React Native does not run a browser. JSX compiles to native views (`UIView`, `UILabel`, `UIScrollView` on iOS; equivalent Android views). The JavaScript runs in a separate thread and communicates with the native thread via a bridge (or JSI in newer architectures). The UI is fully native — it scrolls, animates, and behaves like a native app, not a website in a frame.

### "Explain the React Native architecture."
**Old architecture (bridge):**
- JS thread → serialises messages to JSON → bridge → native thread
- Asynchronous; large payloads cause dropped frames

**New architecture (JSI + Fabric + TurboModules):**
- JS holds a direct reference to C++ objects via JSI
- Synchronous calls possible; no JSON serialisation
- Fabric: new concurrent renderer for native views
- Expo SDK 50+ ships with the new architecture enabled by default

### "What is Expo and when would you not use it?"
Expo is a framework on top of React Native that handles build tooling, native module access (camera, notifications, sensors) via managed packages, and OTA updates. Use Expo for most apps. Go bare (plain React Native) only when you need a native module that Expo doesn't support, or when you need surgical control over the native build.

### "How does `FlatList` differ from `ScrollView`?"
`ScrollView` renders all children at once — fine for short, fixed lists. `FlatList` virtualises: it only renders items visible in the viewport plus a small buffer. For a list of 100+ items, `ScrollView` will cause memory spikes and slow initial render. `FlatList` is the right default for any list of unknown length.

---

## Performance Questions

### "How do you profile a slow React Native app?"
1. Enable the Perf Monitor (shake device → Perf Monitor) — watch JS FPS and UI FPS
2. Open React DevTools Profiler — record an interaction, look for components with wide flame bars
3. Check `FlatList` settings: add `removeClippedSubviews`, `maxToRenderPerBatch`, `windowSize`
4. Check if heavy computation is happening in render — move it to `useMemo`
5. Check if stable callbacks are passed to memoised children — use `useCallback`

### "What is `InteractionManager` used for?"
`InteractionManager.runAfterInteractions(fn)` defers expensive work until navigation animations complete. Useful for: loading heavy data screens after the push animation finishes, so the animation stays at 60 fps.

### "What is the difference between `useMemo` and caching?"
`useMemo` is React-scoped — it only lives for the lifetime of the component instance and resets on unmount. For data that should persist across unmounts (like API responses), use a server-state library (React Query, SWR) or manual state + AsyncStorage caching.

---

## Navigation Questions

### "How do you pass data between screens?"
Two approaches:
1. **Route params** — `navigation.navigate('Detail', { user })` → `route.params.user`. Best for data that changes per navigation (the specific item tapped).
2. **Global state** — Context, Zustand, or Redux. Best for data shared across many screens (auth user, favorites, theme).

Avoid passing large objects as route params on the old bridge architecture — they are serialised. On the new architecture (JSI) this is less of a concern.

### "How do you set a header button programmatically?"
```tsx
useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => <MyButton onPress={handlePress} />,
  });
}, [navigation, handlePress]);
```
Use `useLayoutEffect` (not `useEffect`) so the button is set before the screen is visible, preventing a flash.

### "What is the difference between `push` and `navigate`?"
- `navigate('Screen')` — goes to the screen; if it already exists in the stack, pops back to it
- `push('Screen')` — always adds a new instance on top of the stack

---

## State Management Questions

### "When should I lift state up vs use Context?"
- **Lift state up** when two siblings need the same piece of state — their common parent holds it
- **Context** when the state needs to cross many component layers or be accessed from unrelated branches of the tree
- **External store (Zustand, Redux)** when the state is large, frequently updated, or needs dev tools

### "How does AsyncStorage work and what are its limitations?"
AsyncStorage is a key-value store, async, and string-only. All values must be JSON stringified before writing. Limitations:
- No transactions (no atomic multi-key writes)
- No query/filter — you must load the whole value and filter in JS
- Limited size (varies by platform; typically 6 MB on Android)
- Not encrypted — do not store tokens or passwords here; use `expo-secure-store`

### "How do you persist complex state?"
1. Isolate persistence in a `storage/` layer — never call AsyncStorage directly in a component or hook
2. Load on mount: `useEffect(() => { storage.load().then(setState) }, [])`
3. Write on change: call `storage.save(state)` inside the state update callback
4. For sensitive data: `expo-secure-store` uses the iOS Keychain / Android Keystore

---

## Testing Questions

### "What do you unit-test in a React Native app?"
- **Always test:** pure functions (filters, formatters, validators, transformers)
- **Test with React Testing Library:** components in isolation — render, interact, assert text/state
- **Test hooks:** `renderHook` from `@testing-library/react-native`
- **Integration test:** navigation flows with a mocked navigator
- **Do not unit-test:** style objects, theme constants, or implementation details

### "What is the difference between unit, integration, and E2E tests?"
| | Unit | Integration | E2E |
|---|---|---|---|
| What | Single function or component | Multiple units together | Full app on device |
| Speed | Fast (ms) | Medium (seconds) | Slow (minutes) |
| Tools | Jest | Jest + RNTL | Detox, Maestro |
| When breaks | Regressions in logic | Wiring bugs | UX regressions |

A healthy pyramid: many unit tests, fewer integration tests, a small suite of critical E2E tests.

### "How do you test async hooks?"
```ts
import { renderHook, waitFor } from '@testing-library/react-native';

it('loads users', async () => {
  const { result } = renderHook(() => useUsers());
  expect(result.current.isLoading).toBe(true);
  await waitFor(() => expect(result.current.isLoading).toBe(false));
  expect(result.current.users.length).toBeGreaterThan(0);
});
```
Always mock `fetch` or your service layer so tests don't hit the network.
