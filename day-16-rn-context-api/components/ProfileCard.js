import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { AppContext } from "../context/AppContext";

export default function ProfileCard() {
  // useContext reads the nearest AppContext.Provider value above this component.
  // ProfileCard does not need profile props because the data is global context.
  const { profile, themeMode, updateProfileRole } = useContext(AppContext);
  const isDark = themeMode === "dark";

  return (
    <View style={[styles.card, isDark && styles.darkCard]}>
      <Text style={[styles.label, isDark && styles.darkMutedText]}>Profile</Text>
      <Text style={[styles.name, isDark && styles.darkText]}>{profile.name}</Text>
      <Text style={[styles.detail, isDark && styles.darkMutedText]}>{profile.role}</Text>
      <Text style={[styles.detail, isDark && styles.darkMutedText]}>{profile.location}</Text>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={updateProfileRole}
      >
        <Text style={styles.buttonText}>Update Role</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
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
  label: {
    color: "#2563eb",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 8,
    textTransform: "uppercase"
  },
  name: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 6
  },
  detail: {
    color: "#4b5563",
    fontSize: 15,
    marginBottom: 4
  },
  darkText: {
    color: "#f9fafb"
  },
  darkMutedText: {
    color: "#d1d5db"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 8,
    marginTop: 14,
    paddingVertical: 12
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800"
  },
  pressed: {
    opacity: 0.75
  }
});
