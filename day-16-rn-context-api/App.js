import { useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import CounterControls from "./components/CounterControls";
import ProfileCard from "./components/ProfileCard";
import ThemeToggle from "./components/ThemeToggle";
import { AppContext, AppProvider } from "./context/AppContext";

function HomeScreen() {
  const { themeMode } = useContext(AppContext);
  const isDark = themeMode === "dark";

  return (
    <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
      <View style={styles.content}>
        <Text style={[styles.eyebrow, isDark && styles.darkMutedText]}>Day 16</Text>
        <Text style={[styles.heading, isDark && styles.darkText]}>Context API & Global State</Text>
        <Text style={[styles.subheading, isDark && styles.darkMutedText]}>
          Profile, theme, and counter state are shared through one provider instead of being passed through props.
        </Text>

        {/* Context is useful for app-wide state such as auth users, themes, or
            settings. It can become too much when every small local value goes
            into context, because unrelated components may re-render together. */}
        <View style={styles.stack}>
          <ProfileCard />
          <ThemeToggle />
          <CounterControls />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <AppProvider>
      <HomeScreen />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f8fb",
    flex: 1
  },
  darkContainer: {
    backgroundColor: "#111827"
  },
  content: {
    flex: 1,
    padding: 20
  },
  eyebrow: {
    color: "#2563eb",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 6,
    textTransform: "uppercase"
  },
  heading: {
    color: "#111827",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 8
  },
  subheading: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 18
  },
  darkText: {
    color: "#f9fafb"
  },
  darkMutedText: {
    color: "#d1d5db"
  },
  stack: {
    gap: 12
  }
});
