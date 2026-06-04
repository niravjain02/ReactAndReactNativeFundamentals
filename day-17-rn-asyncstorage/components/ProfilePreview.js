import { StyleSheet, Text, View } from "react-native";

export default function ProfilePreview({ name, role, darkMode }) {
  return (
    <View style={[styles.card, darkMode && styles.darkCard]}>
      <Text style={[styles.label, darkMode && styles.darkMutedText]}>Live Preview</Text>
      <Text style={[styles.name, darkMode && styles.darkText]}>{name || "No name yet"}</Text>
      <Text style={[styles.role, darkMode && styles.darkMutedText]}>{role || "No role yet"}</Text>
      <Text style={[styles.mode, darkMode && styles.darkModeText]}>
        {darkMode ? "Dark mode preference will be restored on launch." : "Light mode preference will be restored on launch."}
      </Text>
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
    marginBottom: 10,
    textTransform: "uppercase"
  },
  name: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 6
  },
  role: {
    color: "#4b5563",
    fontSize: 16,
    marginBottom: 12
  },
  mode: {
    color: "#047857",
    fontSize: 14,
    fontWeight: "700"
  },
  darkText: {
    color: "#f9fafb"
  },
  darkMutedText: {
    color: "#d1d5db"
  },
  darkModeText: {
    color: "#93c5fd"
  }
});
