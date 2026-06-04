import { StyleSheet, Text, TextInput, View } from "react-native";

export default function FormInput({ label, error, ...textInputProps }) {
  return (
    <View style={styles.field}>
      {/* A reusable FormInput keeps label, TextInput, and inline error markup
          consistent across every field in the form. */}
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholderTextColor="#9ca3af"
        {...textInputProps}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    marginBottom: 14
  },
  label: {
    color: "#374151",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 6
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#d1d5db",
    borderRadius: 8,
    borderWidth: 1,
    color: "#111827",
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  inputError: {
    borderColor: "#dc2626"
  },
  errorText: {
    color: "#dc2626",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 5
  }
});
