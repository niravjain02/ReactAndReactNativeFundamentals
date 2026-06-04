import { StyleSheet, Text, View } from "react-native";

export default function SubmittedProfile({ profile }) {
  if (!profile) {
    return null;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Submitted Profile</Text>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.detail}>{profile.email}</Text>
      <Text style={styles.detail}>{profile.role}</Text>
      <Text style={styles.experience}>{profile.yearsOfExperience} years of experience</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eef2ff",
    borderColor: "#c7d2fe",
    borderRadius: 8,
    borderWidth: 1,
    padding: 16
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
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 6
  },
  detail: {
    color: "#4b5563",
    fontSize: 15,
    marginBottom: 4
  },
  experience: {
    color: "#047857",
    fontSize: 15,
    fontWeight: "800",
    marginTop: 6
  }
});
