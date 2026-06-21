import { StyleSheet, Text, View } from 'react-native';
import { User } from '../models/User';
import {
  formatExperience,
  formatUserDisplayName,
  getStatusLabel,
} from '../utils/userFormatter';
import StatBadge from './StatBadge';

interface ProfileCardProps {
  user: User;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{getInitials(user.name)}</Text>
        </View>

        <View style={styles.identity}>
          <Text style={styles.name}>{formatUserDisplayName(user)}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.id}>User ID: {user.id}</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <StatBadge label="Experience" value={formatExperience(user.yearsOfExperience)} />
        <StatBadge
          accent="green"
          label="Account status"
          value={getStatusLabel(user.active)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: '#3157d5',
    borderRadius: 34,
    height: 68,
    justifyContent: 'center',
    width: 68,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
  },
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#d9e0ec',
    borderRadius: 18,
    borderWidth: 1,
    padding: 20,
  },
  email: {
    color: '#667085',
    fontSize: 15,
    marginTop: 5,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  id: {
    color: '#8992a3',
    fontSize: 12,
    marginTop: 5,
  },
  identity: {
    flex: 1,
  },
  name: {
    color: '#172033',
    fontSize: 19,
    fontWeight: '700',
    lineHeight: 25,
  },
  stats: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
});
