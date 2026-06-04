import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import ProfileForm from "./components/ProfileForm";
import SubmittedProfile from "./components/SubmittedProfile";
import { hasValidationErrors, validateProfile } from "./utils/validation";

const EMPTY_FORM = {
  name: "",
  email: "",
  role: "",
  yearsOfExperience: ""
};

export default function App() {
  const [formValues, setFormValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submittedProfile, setSubmittedProfile] = useState(null);
  const [statusMessage, setStatusMessage] = useState("Fill out the form, then submit to validate it.");

  function handleChangeField(fieldName, value) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value
    }));

    // Validation state stores the current error messages. Clearing a field's
    // error while the user edits makes the form feel responsive and readable.
    setErrors((currentErrors) => ({
      ...currentErrors,
      [fieldName]: ""
    }));
  }

  function handleSubmit() {
    // Submit flow: validate the controlled input values, show inline errors if
    // anything is wrong, and only create a submitted profile when all rules pass.
    const nextErrors = validateProfile(formValues);
    setErrors(nextErrors);

    if (hasValidationErrors(nextErrors)) {
      setSubmittedProfile(null);
      setStatusMessage("Please fix the highlighted fields.");
      return;
    }

    setSubmittedProfile({
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      yearsOfExperience: formValues.yearsOfExperience.trim()
    });
    setStatusMessage("Profile submitted successfully.");
  }

  function handleReset() {
    // Reset flow: return form state, validation state, and submitted output to
    // their starting values so the user can begin again.
    setFormValues(EMPTY_FORM);
    setErrors({});
    setSubmittedProfile(null);
    setStatusMessage("Form reset. Add a new profile.");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>Day 18</Text>
        <Text style={styles.heading}>React Native Forms & Validation</Text>
        <Text style={styles.subheading}>
          Controlled inputs keep form values in React state, which makes validation and reset behavior predictable.
        </Text>

        <View style={styles.stack}>
          <View style={styles.statusBox}>
            <Text style={styles.statusText}>{statusMessage}</Text>
          </View>

          <ProfileForm
            values={formValues}
            errors={errors}
            onChangeField={handleChangeField}
            onSubmit={handleSubmit}
            onReset={handleReset}
          />

          <SubmittedProfile profile={submittedProfile} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f8fb",
    flex: 1
  },
  content: {
    padding: 20,
    paddingBottom: 32
  },
  eyebrow: {
    color: "#2563eb",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 6,
    textTransform: "uppercase"
  },
  heading: {
    color: "#111827",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 8
  },
  subheading: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 18
  },
  stack: {
    gap: 12
  },
  statusBox: {
    backgroundColor: "#eef2ff",
    borderColor: "#c7d2fe",
    borderRadius: 8,
    borderWidth: 1,
    padding: 14
  },
  statusText: {
    color: "#374151",
    fontSize: 15,
    lineHeight: 21
  }
});
