import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import AppTextInput from '../components/AppTextInput';
import ProfileCard from '../components/ProfileCard';
import SectionHeader from '../components/SectionHeader';
import sampleProfile from '../constants/sampleProfile';
import { colors, spacing, typography } from '../theme';

export default function HomeScreen() {
  const [form, setForm] = useState({ ...sampleProfile });
  const [savedProfile, setSavedProfile] = useState({ ...sampleProfile });
  const [message, setMessage] = useState('');

  function updateField(field, value) {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
    setMessage('');
  }

  function saveProfile() {
    setSavedProfile({ ...form });
    setMessage('Your profile changes were saved.');
  }

  function cancelChanges() {
    setForm({ ...savedProfile });
    setMessage('Unsaved changes were cancelled.');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.eyebrow}>DAY 26</Text>
          <Text style={styles.title}>Profile Dashboard</Text>
          <Text style={styles.subtitle}>
            One theme supplies the colors, spacing, and type styles used by every component.
          </Text>

          <ProfileCard profile={form} />

          <View style={styles.section}>
            <SectionHeader
              title="Profile"
              description="Update the information shown on your profile card."
            />
            <AppCard style={styles.formCard}>
              <AppTextInput
                label="Full name"
                onChangeText={(value) => updateField('fullName', value)}
                value={form.fullName}
              />
              <AppTextInput
                label="Job title"
                onChangeText={(value) => updateField('jobTitle', value)}
                value={form.jobTitle}
              />
              <AppTextInput
                label="Bio"
                multiline
                onChangeText={(value) => updateField('bio', value)}
                value={form.bio}
              />
            </AppCard>
          </View>

          <View style={styles.section}>
            <SectionHeader
              title="Contact"
              description="Keep your contact details current."
            />
            <AppCard style={styles.formCard}>
              <AppTextInput
                autoCapitalize="none"
                keyboardType="email-address"
                label="Email"
                onChangeText={(value) => updateField('email', value)}
                value={form.email}
              />
              <AppTextInput
                keyboardType="phone-pad"
                label="Phone"
                onChangeText={(value) => updateField('phone', value)}
                value={form.phone}
              />
            </AppCard>
          </View>

          <View style={styles.section}>
            <SectionHeader
              title="Settings"
              description="Choose the details that describe how you work."
            />
            <AppCard style={styles.formCard}>
              <AppTextInput
                label="Location"
                onChangeText={(value) => updateField('location', value)}
                value={form.location}
              />
              <AppTextInput
                label="Work preference"
                onChangeText={(value) => updateField('workPreference', value)}
                value={form.workPreference}
              />
            </AppCard>
          </View>

          {message ? <Text style={styles.message}>{message}</Text> : null}

          <View style={styles.actions}>
            <AppButton label="Cancel" onPress={cancelChanges} variant="secondary" />
            <AppButton label="Save Profile" onPress={saveProfile} />
          </View>

          <Text style={styles.learningNote}>
            Reusable components and centralized tokens prevent duplicated styles. This makes
            larger mobile applications easier to update, test, and scale.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  content: {
    padding: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  eyebrow: {
    ...typography.label,
    color: colors.primary,
    letterSpacing: 1.4,
  },
  flex: {
    flex: 1,
  },
  formCard: {
    gap: spacing.lg,
  },
  learningNote: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: spacing.xl,
    textAlign: 'center',
  },
  message: {
    ...typography.label,
    color: colors.success,
    marginTop: spacing.lg,
    textAlign: 'center',
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  section: {
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    marginBottom: spacing.xl,
    marginTop: spacing.sm,
  },
  title: {
    ...typography.screenTitle,
    color: colors.text,
    marginTop: spacing.xs,
  },
});
