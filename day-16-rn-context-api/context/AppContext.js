import { createContext, useState } from "react";

// createContext makes a shared state container that components can read from.
// The default value is mostly a fallback; the real values come from AppProvider.
export const AppContext = createContext(null);

const INITIAL_PROFILE = {
  name: "Nirav Patel",
  role: "React Native Learner",
  location: "California"
};

export function AppProvider({ children }) {
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [themeMode, setThemeMode] = useState("light");
  const [counter, setCounter] = useState(0);

  function toggleTheme() {
    setThemeMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  }

  function updateProfileRole() {
    setProfile((currentProfile) => ({
      ...currentProfile,
      role:
        currentProfile.role === "React Native Learner"
          ? "Context API Explorer"
          : "React Native Learner"
    }));
  }

  function incrementCounter() {
    setCounter((currentCounter) => currentCounter + 1);
  }

  function decrementCounter() {
    setCounter((currentCounter) => currentCounter - 1);
  }

  function resetCounter() {
    setCounter(0);
  }

  const value = {
    profile,
    themeMode,
    counter,
    toggleTheme,
    updateProfileRole,
    incrementCounter,
    decrementCounter,
    resetCounter
  };

  // Provider wraps part of the app and gives every child access to this value.
  // This avoids prop drilling, where App.js would have to pass the same props
  // through several layers just so a deeply nested component can use them.
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
