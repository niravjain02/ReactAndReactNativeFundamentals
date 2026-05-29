import { Pressable, StyleSheet, Text, View } from "react-native";

export default function EmptyState({ onAddSampleData }) {
  // Empty UI is different from an error: the request worked, but there is no
  // content yet. A helpful empty state prevents confusion.
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>0</Text>
      <Text style={styles.title}>No users found</Text>
      <Text style={styles.message}>
        Empty states explain why a screen has no content and give the user a useful next step.
      </Text>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onAddSampleData}
      >
        <Text style={styles.buttonText}>Show sample users</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 24
  },
  icon: {
    backgroundColor: "#e0f2fe",
    borderRadius: 20,
    color: "#0369a1",
    fontSize: 20,
    fontWeight: "800",
    height: 40,
    lineHeight: 40,
    marginBottom: 16,
    textAlign: "center",
    width: 40
  },
  title: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center"
  },
  message: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    textAlign: "center"
  },
  button: {
    backgroundColor: "#2563eb",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 12
  },
  buttonPressed: {
    backgroundColor: "#1d4ed8"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700"
  }
});
