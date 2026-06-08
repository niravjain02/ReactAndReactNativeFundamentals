import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme';

export default function SectionHeader({ title, description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  description: {
    ...typography.caption,
    color: colors.textMuted,
  },
  title: {
    ...typography.sectionTitle,
    color: colors.text,
  },
});
