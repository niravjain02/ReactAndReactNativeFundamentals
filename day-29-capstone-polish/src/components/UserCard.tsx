import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { User } from '../models/User';
import { colors, spacing, typography } from '../theme';
import AppCard from './AppCard';
import FavoriteButton from './FavoriteButton';

interface UserCardProps {
  user: User;
  isFavorited: boolean;
  onPress: () => void;
  onFavoriteToggle: () => void;
}

export default function UserCard({ user, isFavorited, onPress, onFavoriteToggle }: UserCardProps) {
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
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
    >
      <AppCard style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.name}>
            {user.name}
          </Text>
          <Text numberOfLines={1} style={styles.meta}>
            @{user.username} · {user.company.name}
          </Text>
          <Text numberOfLines={1} style={styles.email}>
            {user.email.toLowerCase()}
          </Text>
        </View>

        <FavoriteButton isFavorited={isFavorited} onPress={onFavoriteToggle} />
      </AppCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    marginBottom: spacing.md,
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }],
  },
  card: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: spacing.lg,
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
  meta: {
    color: colors.textMuted,
    fontSize: typography.sizes.caption,
    marginTop: spacing.xs,
  },
  email: {
    color: colors.primary,
    fontSize: typography.sizes.caption,
    marginTop: spacing.xs,
  },
});
