import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../../App';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import FavoriteButton from '../components/FavoriteButton';
import { useFavorites } from '../hooks/useFavorites';
import { colors, radii, spacing, typography } from '../theme';

type UserDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'UserDetail'>;

interface DetailRowProps {
  label: string;
  value: string;
  isLast?: boolean;
}

function DetailRow({ label, value, isLast = false }: DetailRowProps) {
  return (
    <View style={[styles.detailRow, isLast && styles.detailRowLast]}>
      <Text style={styles.label}>{label}</Text>
      <Text selectable style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

export default function UserDetailScreen({ route, navigation }: UserDetailScreenProps) {
  const { user } = route.params;
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(user.id);

  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FavoriteButton isFavorited={favorited} onPress={() => toggleFavorite(user)} />
      ),
    });
  }, [navigation, favorited, toggleFavorite, user]);

  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.screen}>
      <AppCard style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
        <View style={styles.companyPill}>
          <Text style={styles.companyPillText}>{user.company.name}</Text>
        </View>
      </AppCard>

      <Text style={styles.sectionTitle}>Contact</Text>
      <AppCard>
        <DetailRow label="Email" value={user.email.toLowerCase()} />
        <DetailRow label="Phone" value={user.phone} />
        <DetailRow label="Website" value={user.website} isLast />
      </AppCard>

      <Text style={styles.sectionTitle}>Work & location</Text>
      <AppCard>
        <DetailRow label="Company" value={user.company.name} />
        <DetailRow label="Tagline" value={user.company.catchPhrase} />
        <DetailRow label="City" value={user.address.city} isLast />
      </AppCard>

      <AppButton
        title={favorited ? '♥  Remove from favorites' : '♡  Save to favorites'}
        onPress={() => toggleFavorite(user)}
        variant={favorited ? 'danger' : 'primary'}
        style={styles.favoriteButton}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  profileCard: {
    alignItems: 'center',
    borderRadius: radii.xl,
    padding: spacing.xxl,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  avatarText: {
    color: colors.surface,
    fontSize: typography.sizes.hero,
    fontWeight: typography.weights.bold,
  },
  name: {
    color: colors.text,
    fontSize: typography.sizes.hero,
    fontWeight: typography.weights.bold,
    marginTop: spacing.lg,
    textAlign: 'center',
  },
  username: {
    color: colors.textMuted,
    fontSize: typography.sizes.body,
    marginTop: spacing.xs,
  },
  companyPill: {
    backgroundColor: colors.primarySoft,
    borderRadius: radii.full,
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  companyPillText: {
    color: colors.primary,
    fontSize: typography.sizes.caption,
    fontWeight: typography.weights.semibold,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: typography.sizes.subtitle,
    fontWeight: typography.weights.bold,
    marginBottom: spacing.sm,
    marginTop: spacing.xxl,
  },
  detailRow: {
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  detailRowLast: {
    borderBottomWidth: 0,
  },
  label: {
    color: colors.textMuted,
    fontSize: typography.sizes.caption,
    fontWeight: typography.weights.semibold,
    textTransform: 'uppercase',
  },
  value: {
    color: colors.text,
    fontSize: typography.sizes.body,
    lineHeight: typography.lineHeights.normal,
    marginTop: spacing.xs,
  },
  favoriteButton: {
    marginTop: spacing.xxl,
  },
});
