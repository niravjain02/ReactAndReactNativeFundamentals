# Day 20: Mini Project - User Directory App

This Expo app combines core React Native fundamentals into one small project.

## Concepts Practiced

- API fetching from JSONPlaceholder
- A small service layer for API calls
- `useEffect` data loading
- Loading, error, and empty states
- `FlatList` rendering
- Search filtering
- React Navigation native stack
- Navigation params for detail screens
- Reusable components

## Project Structure

```text
components/
  EmptyState.js
  ErrorView.js
  LoadingView.js
  SearchBar.js
  UserCard.js
screens/
  UserDetailScreen.js
  UserListScreen.js
services/
  userService.js
App.js
```

## App Flow

1. `UserListScreen` fetches users from `https://jsonplaceholder.typicode.com/users`.
2. Loading, error, and empty views handle the main async states.
3. `SearchBar` filters users by name, username, email, or company.
4. `FlatList` renders `UserCard` rows.
5. Tapping a card navigates to `UserDetailScreen` and passes the selected user through route params.
6. The detail screen shows profile fields and includes a back button.

## Run This App

```bash
cd day-20-rn-user-directory
npm install
npx expo start
```

Open the app in Expo Go, an emulator, or a simulator.
