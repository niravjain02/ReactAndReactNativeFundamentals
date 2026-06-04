import { Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native";

export default function ProfileForm({
  name,
  role,
  darkMode,
  saving,
  onChangeName,
  onChangeRole,
  onToggleDarkMode,
  onSave,
  onClear
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Edit Profile</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={onChangeName}
        placeholder="Enter your name"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Role</Text>
      <TextInput
        style={styles.input}
        value={role}
        onChangeText={onChangeRole}
        placeholder="Enter your role"
        autoCapitalize="words"
      />

      <View style={styles.switchRow}>
        <View>
          <Text style={styles.switchTitle}>Dark Mode</Text>
          <Text style={styles.switchSubtitle}>{darkMode ? "Enabled" : "Disabled"}</Text>
        </View>
        <Switch value={darkMode} onValueChange={onToggleDarkMode} />
      </View>

      <Pressable
        style={({ pressed }) => [styles.saveButton, pressed && styles.pressed]}
        onPress={onSave}
        disabled={saving}
      >
        <Text style={styles.saveButtonText}>{saving ? "Saving..." : "Save Locally"}</Text>
      </Pressable>

      <Pressable style={({ pressed }) => [styles.clearButton, pressed && styles.pressed]} onPress={onClear}>
        <Text style={styles.clearButtonText}>Clear Saved Data</Text>
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
  sectionTitle: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 14
  },
  label: {
    color: "#374151",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6
  },
  input: {
    borderColor: "#d1d5db",
    borderRadius: 8,
    borderWidth: 1,
    color: "#111827",
    fontSize: 16,
    marginBottom: 14,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  switchRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16
  },
  switchTitle: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "800"
  },
  switchSubtitle: {
    color: "#6b7280",
    fontSize: 14,
    marginTop: 2
  },
  saveButton: {
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 8,
    paddingVertical: 12
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800"
  },
  clearButton: {
    alignItems: "center",
    borderColor: "#d1d5db",
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 10,
    paddingVertical: 12
  },
  clearButtonText: {
    color: "#dc2626",
    fontSize: 15,
    fontWeight: "800"
  },
  pressed: {
    opacity: 0.75
  }
});
