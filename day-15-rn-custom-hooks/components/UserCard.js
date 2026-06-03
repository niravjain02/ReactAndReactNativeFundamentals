import { StyleSheet, Text, View } from "react-native";

export default function UserCard({ user }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.company}>{user.company?.name}</Text>
      <Text style={styles.detail}>{user.email}</Text>
      <Text style={styles.detail}>{user.phone}</Text>
      <Text style={styles.website}>{user.website}</Text>
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
    fontWeight: "800",
    marginBottom: 4
  },
  company: {
    color: "#2563eb",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10
  },
  detail: {
    color: "#4b5563",
    fontSize: 15,
    marginBottom: 4
  },
  website: {
    color: "#047857",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 4
  }
});
