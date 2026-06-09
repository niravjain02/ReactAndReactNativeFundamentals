import { StyleSheet, TextInput, View } from 'react-native';
import { colors, spacing, typography } from '../theme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

// Reusable components expose small, typed prop APIs to their parent screen.
export default function SearchBar({ value, onChangeText }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        accessibilityLabel="Search users"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        onChangeText={onChangeText}
        placeholder="Search name, email, username, company"
        placeholderTextColor={colors.textMuted}
        returnKeyType="search"
        style={styles.input}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.border,
    borderRadius: 14,
    borderWidth: 1,
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  input: {
    color: colors.text,
    fontSize: typography.sizes.body,
    minHeight: 50,
  },
});
