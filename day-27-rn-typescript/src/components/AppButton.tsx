import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonVariant = 'primary' | 'secondary';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
}

export default function AppButton({
  title,
  onPress,
  variant = 'primary',
}: AppButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.title, isPrimary ? styles.primaryTitle : styles.secondaryTitle]}>
        {title}
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
    paddingHorizontal: 14,
  },
  pressed: {
    opacity: 0.75,
  },
  primaryButton: {
    backgroundColor: '#3157d5',
    borderColor: '#3157d5',
  },
  primaryTitle: {
    color: '#ffffff',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    borderColor: '#3157d5',
  },
  secondaryTitle: {
    color: '#3157d5',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
});
