import { Pressable, StyleSheet, Text, View } from "react-native";

import FormInput from "./FormInput";

export default function ProfileForm({ values, errors, onChangeField, onSubmit, onReset }) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Profile Form</Text>

      {/* Controlled inputs store their value in React state. The screen is the
          source of truth, so validation and reset can use the latest values. */}
      <FormInput
        label="Name"
        value={values.name}
        error={errors.name}
        onChangeText={(text) => onChangeField("name", text)}
        placeholder="Ada Lovelace"
        autoCapitalize="words"
      />

      <FormInput
        label="Email"
        value={values.email}
        error={errors.email}
        onChangeText={(text) => onChangeField("email", text)}
        placeholder="ada@example.com"
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <FormInput
        label="Role"
        value={values.role}
        error={errors.role}
        onChangeText={(text) => onChangeField("role", text)}
        placeholder="React Native Developer"
        autoCapitalize="words"
      />

      <FormInput
        label="Years of Experience"
        value={values.yearsOfExperience}
        error={errors.yearsOfExperience}
        onChangeText={(text) => onChangeField("yearsOfExperience", text)}
        placeholder="3"
        keyboardType="numeric"
      />

      <View style={styles.actions}>
        <Pressable style={({ pressed }) => [styles.submitButton, pressed && styles.pressed]} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.resetButton, pressed && styles.pressed]} onPress={onReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderColor: "#e5e7eb",
    borderRadius: 8,
    borderWidth: 1,
    padding: 16
  },
  sectionTitle: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 14
  },
  actions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 2
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 8,
    flex: 1,
    paddingVertical: 12
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800"
  },
  resetButton: {
    alignItems: "center",
    borderColor: "#d1d5db",
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    paddingVertical: 12
  },
  resetButtonText: {
    color: "#374151",
    fontSize: 15,
    fontWeight: "800"
  },
  pressed: {
    opacity: 0.75
  }
});
