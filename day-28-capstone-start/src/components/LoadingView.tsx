import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme';

export default function LoadingView() {
  return (
    <View accessibilityLiveRegion="polite" style={styles.container}>
      <ActivityIndicator color={colors.primary} size="large" />
      <Text style={styles.text}>Loading the directory...</Text>
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
  text: {
    color: colors.textMuted,
    fontSize: typography.sizes.body,
    marginTop: spacing.md,
  },
});
