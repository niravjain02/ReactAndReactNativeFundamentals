import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { AppContext } from "../context/AppContext";

export default function ThemeToggle() {
  const { themeMode, toggleTheme } = useContext(AppContext);
  const isDark = themeMode === "dark";

  return (
    <View style={[styles.row, isDark && styles.darkRow]}>
      <View>
        <Text style={[styles.title, isDark && styles.darkText]}>Theme</Text>
        <Text style={[styles.subtitle, isDark && styles.darkMutedText]}>
          Current mode: {themeMode}
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [styles.toggle, isDark && styles.darkToggle, pressed && styles.pressed]}
        onPress={toggleTheme}
      >
        <Text style={[styles.toggleText, isDark && styles.darkToggleText]}>
          {isDark ? "Light" : "Dark"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#e5e7eb",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16
  },
  darkRow: {
    backgroundColor: "#1f2937",
    borderColor: "#374151"
  },
  title: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "800"
  },
  subtitle: {
    color: "#4b5563",
    fontSize: 14,
    marginTop: 4
  },
  darkText: {
    color: "#f9fafb"
  },
  darkMutedText: {
    color: "#d1d5db"
  },
  toggle: {
    backgroundColor: "#111827",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  darkToggle: {
    backgroundColor: "#f9fafb"
  },
  toggleText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800"
  },
  darkToggleText: {
    color: "#111827"
  },
  pressed: {
    opacity: 0.75
  }
});
