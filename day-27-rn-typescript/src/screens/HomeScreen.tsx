import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import ProfileCard from '../components/ProfileCard';
import { User } from '../models/User';

const startingUser: User = {
  id: 'user-27',
  name: 'Maya Patel',
  role: 'React Native Developer',
  email: 'maya.patel@example.com',
  yearsOfExperience: 3,
  active: true,
};

export default function HomeScreen() {
  // The generic tells React that this state must always match the User model.
  // TypeScript now checks every update before the application runs.
  const [user, setUser] = useState<User>(startingUser);

  function toggleActiveStatus(): void {
    setUser((currentUser) => ({
      ...currentUser,
      active: !currentUser.active,
    }));
  }

  function addExperience(): void {
    setUser((currentUser) => ({
      ...currentUser,
      yearsOfExperience: currentUser.yearsOfExperience + 1,
    }));
  }

  // Examples to try while learning:
  // <ProfileCard user="Maya" /> would fail because `user` must be a User object.
  // <AppButton title={27} onPress={toggleActiveStatus} /> would fail because title must be a string.
  // setUser({ name: 'Maya' }) would fail because the other required User fields are missing.

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>DAY 27</Text>
        <Text style={styles.title}>TypeScript Profile</Text>
        <Text style={styles.subtitle}>
          Types describe the data flowing through state, props, and utility functions.
        </Text>

        <ProfileCard user={user} />

        <View style={styles.actions}>
          <AppButton title="Add Experience" onPress={addExperience} />
          <AppButton
            title="Toggle Status"
            onPress={toggleActiveStatus}
            variant="secondary"
          />
        </View>

        <View style={styles.lessonCard}>
          <Text style={styles.lessonTitle}>Why use TypeScript?</Text>
          <Text style={styles.lessonText}>
            TypeScript catches many data and prop mistakes in the editor instead of waiting for
            a user to find them at runtime. As an application grows, these checks make refactoring
            components and models more predictable.
          </Text>
        </View>

        <View style={styles.lessonCard}>
          <Text style={styles.lessonTitle}>Swift connection</Text>
          <Text style={styles.lessonText}>
            The User interface is similar to a Swift struct. Typed React props resemble typed
            initializer parameters, and both compilers check that required values have the correct
            types before the app runs.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 18,
  },
  content: {
    padding: 22,
    paddingBottom: 42,
  },
  eyebrow: {
    color: '#9fb4ff',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  lessonCard: {
    backgroundColor: '#25324a',
    borderColor: '#40506d',
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 18,
    padding: 18,
  },
  lessonText: {
    color: '#cbd4e5',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 7,
  },
  lessonTitle: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },
  safeArea: {
    backgroundColor: '#172033',
    flex: 1,
  },
  subtitle: {
    color: '#cbd4e5',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22,
    marginTop: 8,
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 5,
  },
});
