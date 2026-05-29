import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function LoadingView() {
  // Loading UI matters because a blank screen can make users think the app is
  // broken. A spinner plus a short message shows that work is still happening.
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2563eb" />
      <Text style={styles.title}>Loading users...</Text>
      <Text style={styles.message}>
        A loading state tells people the app is working while data is being requested.
      </Text>
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
  title: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 16,
    textAlign: "center"
  },
  message: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 22,
    marginTop: 8,
    textAlign: "center"
  }
});
