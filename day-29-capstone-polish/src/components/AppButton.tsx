import { Pressable, StyleSheet, Text, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radii, spacing, typography } from '../theme';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}

const containerVariants = {
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1 },
  danger: { backgroundColor: colors.dangerSoft },
} as const;

const labelVariants = {
  primary: { color: colors.surface },
  secondary: { color: colors.text },
  danger: { color: colors.danger },
} as const;

export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  accessibilityLabel,
  style,
}: AppButtonProps) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, containerVariants[variant], pressed && styles.pressed, style]}
    >
      <Text style={[styles.label, labelVariants[variant]]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: radii.md,
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.md,
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },
  label: {
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.semibold,
  },
});
