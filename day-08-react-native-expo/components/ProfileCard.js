/**
 * ProfileCard.js
 *
 * Reusable React Native component.
 *
 * Concepts:
 * - Props
 * - Component composition
 * - StyleSheet
 * - Native layout with View/Text
 */

import { StyleSheet, Text, View } from "react-native";

function ProfileCard({ name, role, experience }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.role}>
        Role: {role}
      </Text>

      <Text style={styles.experience}>
        Experience: {experience} years
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8
  },
  role: {
    fontSize: 16,
    marginBottom: 4
  },
  experience: {
    fontSize: 16,
    color: "#555"
  }
});

export default ProfileCard;