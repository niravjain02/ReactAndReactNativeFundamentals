import { StyleSheet, Text, View } from "react-native";

export default function UserCard({ user }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.role}>{user.role}</Text>
      <Text style={styles.detail}>{user.email}</Text>
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
  name: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4
  },
  role: {
    color: "#2563eb",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8
  },
  detail: {
    color: "#4b5563",
    fontSize: 15
  }
});
