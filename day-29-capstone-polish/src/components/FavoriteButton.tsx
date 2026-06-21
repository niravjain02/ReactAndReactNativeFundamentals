import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, spacing } from '../theme';

interface FavoriteButtonProps {
  isFavorited: boolean;
  onPress: () => void;
}

export default function FavoriteButton({ isFavorited, onPress }: FavoriteButtonProps) {
  return (
    <Pressable
      accessibilityHint={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      accessibilityLabel={isFavorited ? 'Saved to favorites' : 'Save to favorites'}
      accessibilityRole="togglebutton"
      hitSlop={8}
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={[styles.icon, isFavorited && styles.iconActive]}>
        {isFavorited ? '♥' : '♡'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: spacing.xs,
  },
  pressed: {
    opacity: 0.55,
  },
  icon: {
    color: colors.textMuted,
    fontSize: 22,
  },
  iconActive: {
    color: colors.danger,
  },
});
