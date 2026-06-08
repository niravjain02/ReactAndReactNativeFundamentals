import { StyleSheet, Text, View } from 'react-native';
import AppCard from './AppCard';
import { colors, spacing, typography } from '../theme';

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function ProfileCard({ profile }) {
  return (
    <AppCard style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{getInitials(profile.fullName)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.jobTitle}>{profile.jobTitle}</Text>
        <Text style={styles.location}>{profile.location}</Text>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: 32,
    height: 64,
    justifyContent: 'center',
    width: 64,
  },
  avatarText: {
    ...typography.cardTitle,
    color: colors.primary,
  },
  card: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.lg,
  },
  details: {
    flex: 1,
    gap: spacing.xs,
  },
  jobTitle: {
    ...typography.body,
    color: colors.textMuted,
  },
  location: {
    ...typography.caption,
    color: colors.textMuted,
  },
  name: {
    ...typography.cardTitle,
    color: colors.text,
  },
});
