import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme';

interface ErrorViewProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorView({ message, onRetry }: ErrorViewProps) {
  return (
    <View accessibilityLiveRegion="assertive" style={styles.container}>
      <Text style={styles.icon}>!</Text>
      <Text style={styles.title}>Could not load users</Text>
      <Text style={styles.message}>{message}</Text>
      <Pressable accessibilityRole="button" onPress={onRetry} style={styles.button}>
        <Text style={styles.buttonText}>Try again</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: spacing.xxl,
  },
  icon: {
    backgroundColor: colors.dangerSoft,
    borderRadius: 28,
    color: colors.danger,
    fontSize: typography.sizes.hero,
    fontWeight: typography.weights.bold,
    lineHeight: 56,
    overflow: 'hidden',
    textAlign: 'center',
    width: 56,
  },
  title: {
    color: colors.text,
    fontSize: typography.sizes.title,
    fontWeight: typography.weights.bold,
    marginTop: spacing.lg,
  },
  message: {
    color: colors.textMuted,
    fontSize: typography.sizes.body,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    marginTop: spacing.xl,
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.md,
  },
  buttonText: {
    color: colors.surface,
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.semibold,
  },
});
