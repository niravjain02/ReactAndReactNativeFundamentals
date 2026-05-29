import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ErrorView({ message, onRetry }) {
  // Error UI should explain the problem in plain language and offer a next
  // action. In production, that action is often retrying the same request.
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>!</Text>
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.message}>{message}</Text>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onRetry}
      >
        <Text style={styles.buttonText}>Try success state</Text>
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
    backgroundColor: "#fee2e2",
    borderRadius: 20,
    color: "#b91c1c",
    fontSize: 24,
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
