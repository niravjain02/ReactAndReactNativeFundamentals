import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { User } from '../models/User';
import { colors, spacing, typography } from '../theme';

interface UserCardProps {
  user: User;
  onPress: () => void;
}

export default function UserCard({ user, onPress }: UserCardProps) {
  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <Pressable
      accessibilityHint="Opens this user's profile"
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {user.name}
        </Text>
        <Text numberOfLines={1} style={styles.username}>
          @{user.username} · {user.company.name}
        </Text>
        <Text numberOfLines={1} style={styles.email}>
          {user.email.toLowerCase()}
        </Text>
      </View>

      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: spacing.md,
    padding: spacing.lg,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  avatarText: {
    color: colors.primary,
    fontSize: typography.sizes.subtitle,
    fontWeight: typography.weights.bold,
  },
  content: {
    flex: 1,
    marginLeft: spacing.md,
  },
  name: {
    color: colors.text,
    fontSize: typography.sizes.subtitle,
    fontWeight: typography.weights.bold,
  },
  username: {
    color: colors.textMuted,
    fontSize: typography.sizes.caption,
    marginTop: spacing.xs,
  },
  email: {
    color: colors.primary,
    fontSize: typography.sizes.caption,
    marginTop: spacing.xs,
  },
  chevron: {
    color: colors.textMuted,
    fontSize: 28,
    marginLeft: spacing.sm,
  },
});
