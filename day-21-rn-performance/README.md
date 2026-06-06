# Day 21: React Native Performance Optimization

This Expo app is a beginner-friendly playground for observing React Native render behavior. It displays 100 mock users, a search field, a counter, and a render count on every visible user card.

## Concepts

### `React.memo`

`UserCard` is wrapped in `React.memo`. When its parent renders, React compares the card's current props with its previous props. If `user` and `onPress` are unchanged, React skips that card's render.

Try changing the counter. `App` renders again, but the visible user card render counts should remain unchanged.

### `useMemo`

`useFilteredUsers` uses `useMemo` to cache the filtered user array. Filtering runs again only when the users or search text changes. A counter update can reuse the cached result instead of filtering all 100 users again.

Memoization has a cost, so use it for expensive calculations or when stable values help memoized children. It is not required for every value.

### `useCallback`

`useCallback` keeps the user press handler and `FlatList` render functions stable between renders. Without a stable `onPress` reference, `React.memo` would see a new function prop and render each card again.

### `FlatList` Optimization

`FlatList` virtualizes the list: it renders the visible items and a limited window around them instead of mounting all 100 rows at once.

This example also uses:

- `keyExtractor` for stable item identity
- a memoized `renderItem`
- `initialNumToRender` to limit initial work
- `maxToRenderPerBatch` to control batch size
- `windowSize` to control the rendered area around the screen
- `removeClippedSubviews` to detach off-screen native views

These settings are examples, not universal ideal values. Measure a real app before tuning them.

## Render Visualization

Each `UserCard` tracks how many times its component function runs. Use the app to compare these actions:

1. Tap `+` or `-`: cards should keep the same render count.
2. Type in search: matching list content changes and newly displayed cards render.
3. Clear search: cards that were removed must mount again when they return.
4. Scroll: new cards render as they enter FlatList's virtualized window.

Development tools such as Strict Mode can intentionally run renders more than once. Focus on whether counts change after each interaction rather than expecting a specific starting number.

## iOS Equivalents

- **UITableView cell reuse:** `FlatList` virtualization serves a similar goal by limiting the number of mounted rows and recycling native views where possible.
- **SwiftUI view recomputation:** React components can be evaluated again after state changes, similar to SwiftUI recomputing a view's `body`. `React.memo` helps skip child work when inputs are unchanged.
- **Caching expensive work:** `useMemo` is comparable to retaining a derived result instead of repeating an expensive calculation every time surrounding UI state changes.

## Run

```bash
npm install
npx expo start
```
