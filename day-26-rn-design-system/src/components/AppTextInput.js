import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, spacing, typography } from '../theme';

export default function AppTextInput({ label, multiline = false, style, ...inputProps }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={multiline}
        placeholderTextColor={colors.textMuted}
        style={[styles.input, multiline && styles.multilineInput, style]}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  input: {
    ...typography.body,
    backgroundColor: colors.inputBackground,
    borderColor: colors.border,
    borderRadius: 10,
    borderWidth: 1,
    color: colors.text,
    minHeight: 48,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  label: {
    ...typography.label,
    color: colors.text,
  },
  multilineInput: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
});
