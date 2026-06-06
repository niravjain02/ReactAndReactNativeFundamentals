# Day 22: Pagination & Pull-to-Refresh

This Expo app loads posts from JSONPlaceholder in small pages. It demonstrates initial loading, retryable errors, pull-to-refresh, infinite scrolling, and a loading footer.

## Pagination

Pagination requests a limited part of a large data set instead of downloading everything at once. This app calls:

```text
https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10
```

`page` stores the last successfully loaded page. When the user nears the bottom, the app requests `page + 1` and appends those posts.

Pagination matters for mobile performance because smaller responses use less network data, memory, parsing time, and initial rendering work.

## Loading States

The hook tracks three separate operations:

- **Initial loading:** The app has no posts yet and fetches page 1.
- **Refreshing:** A pull gesture reloads page 1 and replaces the existing list.
- **Loading more:** Scrolling near the bottom fetches and appends the next page.

Keeping these states separate lets the UI show the correct spinner without hiding posts that are already available.

## Pull-to-Refresh

`FlatList` creates a native refresh control when `refreshing` and `onRefresh` are provided. Pulling down calls `onRefresh`; the refresh indicator remains visible while `refreshing` is `true`.

Refreshing resets pagination to page 1. It also replaces the list so the user sees the latest first page from the server.

## Infinite Scroll

`onEndReached` runs when the user scrolls near the end of the rendered content. `onEndReachedThreshold={0.4}` starts loading before the exact bottom is reached.

The hook uses a request ref to ignore duplicate load-more calls. It also tracks `hasMore`, using the API's `x-total-count` response header to stop requesting pages after all posts are loaded.

## FlatList Loading Footer

`ListFooterComponent` displays `LoadingFooter` only while the next page is loading. A pagination error appears in the footer with a retry button, so posts already loaded remain visible.

## iOS Equivalents

- **UITableView pagination:** Detect that the user is near the final rows, request the next page, and append new models before inserting rows.
- **UIRefreshControl:** Attach a refresh control to a table or collection view and reload page 1 after the pull gesture.
- **Prefetching the next page:** `UITableViewDataSourcePrefetching` can request data for upcoming index paths, similar to loading when `FlatList` approaches its end.

## Run

```bash
npm install
npx expo start
```
