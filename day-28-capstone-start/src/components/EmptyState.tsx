import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme';

interface EmptyStateProps {
  hasSearchQuery: boolean;
}

export default function EmptyState({ hasSearchQuery }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {hasSearchQuery ? 'No matching users' : 'No users yet'}
      </Text>
      <Text style={styles.message}>
        {hasSearchQuery
          ? 'Try a different name, email, username, or company.'
          : 'The directory is currently empty.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: spacing.xxl,
    paddingVertical: 64,
  },
  title: {
    color: colors.text,
    fontSize: typography.sizes.title,
    fontWeight: typography.weights.bold,
  },
  message: {
    color: colors.textMuted,
    fontSize: typography.sizes.body,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
});
