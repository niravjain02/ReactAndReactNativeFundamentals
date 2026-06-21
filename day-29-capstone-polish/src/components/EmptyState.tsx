import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme';

interface EmptyStateProps {
  hasSearchQuery?: boolean;
  title?: string;
  message?: string;
}

export default function EmptyState({ hasSearchQuery = false, title, message }: EmptyStateProps) {
  const resolvedTitle = title ?? (hasSearchQuery ? 'No matching users' : 'Nothing here yet');
  const resolvedMessage =
    message ??
    (hasSearchQuery
      ? 'Try a different name, email, username, or company.'
      : 'The list is currently empty.');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{resolvedTitle}</Text>
      <Text style={styles.message}>{resolvedMessage}</Text>
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
    textAlign: 'center',
  },
  message: {
    color: colors.textMuted,
    fontSize: typography.sizes.body,
    lineHeight: typography.lineHeights.normal,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
});
