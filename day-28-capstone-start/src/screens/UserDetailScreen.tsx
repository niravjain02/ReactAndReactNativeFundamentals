import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../../App';
import { colors, spacing, typography } from '../theme';

type UserDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'UserDetail'>;

interface DetailRowProps {
  label: string;
  value: string;
}

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.label}>{label}</Text>
      <Text selectable style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

export default function UserDetailScreen({ route }: UserDetailScreenProps) {
  // route.params is type-checked against RootStackParamList in App.tsx.
  const { user } = route.params;
  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.screen}>
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
        <View style={styles.companyPill}>
          <Text style={styles.companyPillText}>{user.company.name}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Contact</Text>
      <View style={styles.detailsCard}>
        <DetailRow label="Email" value={user.email.toLowerCase()} />
        <DetailRow label="Phone" value={user.phone} />
        <DetailRow label="Website" value={user.website} />
      </View>

      <Text style={styles.sectionTitle}>Work & location</Text>
      <View style={styles.detailsCard}>
        <DetailRow label="Company" value={user.company.name} />
        <DetailRow label="City" value={user.address.city} />
      </View>
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
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 24,
    borderWidth: 1,
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
    borderRadius: 999,
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
  detailsCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: spacing.lg,
  },
  detailRow: {
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: spacing.lg,
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
    marginTop: spacing.xs,
  },
});
