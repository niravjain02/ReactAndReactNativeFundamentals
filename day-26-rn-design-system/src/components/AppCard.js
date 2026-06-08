import { StyleSheet, View } from 'react-native';
import { colors, spacing } from '../theme';

// Reusable UI components give every screen the same behavior and appearance.
// AppCard prevents each feature from duplicating container styles.
export default function AppCard({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    padding: spacing.lg,
  },
});
