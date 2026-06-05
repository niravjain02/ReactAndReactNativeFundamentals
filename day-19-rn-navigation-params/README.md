# Day 19: Navigation & Route Params

This Expo app demonstrates React Navigation with a native stack navigator and route params.

## What This Covers

- Wrapping the app in `NavigationContainer`
- Creating a native stack with `createNativeStackNavigator`
- Registering screens with `Stack.Screen`
- Navigating from a list screen to a detail screen
- Passing params with `navigation.navigate`
- Reading params with `route.params`
- Returning to the previous screen with `navigation.goBack`

## App Flow

1. `UserListScreen` renders a small user directory with `FlatList`.
2. `UserRow` displays each user as a pressable row.
3. Tapping a user navigates to `UserDetailScreen`.
4. The detail screen reads `id`, `name`, `role`, and `email` from `route.params`.
5. The Go Back button returns to the list screen.

## Run This App

```bash
cd day-19-rn-navigation-params
npm install
npx expo start
```

Then open the app in Expo Go, an emulator, or a simulator.
