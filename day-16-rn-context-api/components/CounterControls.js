import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { AppContext } from "../context/AppContext";

export default function CounterControls() {
  const { counter, themeMode, incrementCounter, decrementCounter, resetCounter } = useContext(AppContext);
  const isDark = themeMode === "dark";

  return (
    <View style={[styles.card, isDark && styles.darkCard]}>
      <Text style={[styles.title, isDark && styles.darkText]}>Global Counter</Text>
      <Text style={[styles.count, isDark && styles.darkText]}>{counter}</Text>

      <View style={styles.controls}>
        <Pressable style={({ pressed }) => [styles.smallButton, pressed && styles.pressed]} onPress={decrementCounter}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [styles.smallButton, pressed && styles.pressed]} onPress={incrementCounter}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <Pressable style={({ pressed }) => [styles.resetButton, pressed && styles.pressed]} onPress={resetCounter}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#e5e7eb",
    borderRadius: 8,
    borderWidth: 1,
    padding: 16
  },
  darkCard: {
    backgroundColor: "#1f2937",
    borderColor: "#374151"
  },
  title: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "800"
  },
  count: {
    color: "#111827",
    fontSize: 42,
    fontWeight: "800",
    marginVertical: 14
  },
  darkText: {
    color: "#f9fafb"
  },
  controls: {
    flexDirection: "row",
    gap: 10
  },
  smallButton: {
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 8,
    height: 44,
    justifyContent: "center",
    width: 64
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800"
  },
  resetButton: {
    borderColor: "#d1d5db",
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  resetButtonText: {
    color: "#2563eb",
    fontSize: 15,
    fontWeight: "800"
  },
  pressed: {
    opacity: 0.75
  }
});
