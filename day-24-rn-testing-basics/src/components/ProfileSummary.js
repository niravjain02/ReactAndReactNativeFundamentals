import { StyleSheet, Text, View } from 'react-native';
import {
  formatExperience,
  formatUserName,
  formatUserRole,
} from '../utils/userFormatter';

// This component consumes the tested utility functions. Later, component tests
// could verify what a user sees or what happens after an interaction.
export default function ProfileSummary({ user }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>EXAMPLE PROFILE</Text>
      <Text style={styles.name}>{formatUserName(user)}</Text>
      <Text style={styles.role}>{formatUserRole(user)}</Text>
      <Text style={styles.experience}>
        {formatExperience(user.yearsOfExperience)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ccfbf1',
    borderColor: '#5eead4',
    borderRadius: 12,
    borderWidth: 1,
    padding: 18,
  },
  experience: {
    color: '#115e59',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 12,
  },
  label: {
    color: '#0f766e',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  name: {
    color: '#0f172a',
    fontSize: 23,
    fontWeight: '800',
    marginTop: 8,
  },
  role: {
    color: '#334155',
    fontSize: 16,
    marginTop: 5,
  },
});
