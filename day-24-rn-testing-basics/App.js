import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ProfileSummary from './src/components/ProfileSummary';

const exampleUser = {
  firstName: 'Maya',
  lastName: 'Patel',
  role: 'React Native Developer',
  company: 'Mobile Studio',
  yearsOfExperience: 3,
};

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.screen}>
        <Text style={styles.eyebrow}>DAY 24</Text>
        <Text style={styles.title}>React Native Testing Basics</Text>
        <Text style={styles.introduction}>
          Unit tests check one small piece of code in isolation. This project uses
          Jest to verify utility functions with fast, repeatable examples.
        </Text>

        <ProfileSummary user={exampleUser} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Jest does</Text>
          <Text style={styles.body}>
            Jest finds test files, runs each test, compares actual results with
            expected results, and reports which examples pass or fail.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Arrange / Act / Assert</Text>
          <Text style={styles.step}>1. Arrange the input and expected result.</Text>
          <Text style={styles.step}>2. Act by calling the function.</Text>
          <Text style={styles.step}>3. Assert that the result is correct.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why start with utilities?</Text>
          <Text style={styles.body}>
            Utility functions have clear inputs and outputs without screens,
            network calls, or device APIs. That makes them the easiest place to
            learn testing before moving to component behavior.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why mobile apps need tests</Text>
          <Text style={styles.body}>
            Tests catch regressions in validation and formatting before those
            bugs reach forms, profiles, and other user-facing mobile screens.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    color: '#475569',
    fontSize: 16,
    lineHeight: 24,
  },
  eyebrow: {
    color: '#0f766e',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  introduction: {
    color: '#475569',
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 22,
    marginTop: 10,
  },
  safeArea: {
    backgroundColor: '#f1f5f9',
    flex: 1,
  },
  screen: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    backgroundColor: '#ffffff',
    borderColor: '#cbd5e1',
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 16,
    padding: 18,
  },
  sectionTitle: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  step: {
    color: '#475569',
    fontSize: 16,
    lineHeight: 26,
  },
  title: {
    color: '#0f172a',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 6,
  },
});
