import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, spacing, typography } from '../theme';

export default function AppButton({ label, onPress, variant = 'primary' }) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        pressed && (isPrimary ? styles.primaryPressed : styles.secondaryPressed),
      ]}
    >
      <Text style={[styles.label, isPrimary ? styles.primaryLabel : styles.secondaryLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    minHeight: 50,
    paddingHorizontal: spacing.lg,
  },
  label: {
    ...typography.button,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  primaryLabel: {
    color: colors.white,
  },
  primaryPressed: {
    backgroundColor: colors.primaryPressed,
    borderColor: colors.primaryPressed,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderColor: colors.primary,
  },
  secondaryLabel: {
    color: colors.primary,
  },
  secondaryPressed: {
    backgroundColor: colors.primarySoft,
  },
});
