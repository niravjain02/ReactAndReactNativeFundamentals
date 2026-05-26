/**
 * Day 08: React Native reusable components
 */

import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>
          Day 08: React Native Components & Props
        </Text>

        <ProfileCard
          name="Nirav Jain"
          role="Staff iOS Engineer"
          experience={12}
        />

        <ProfileCard
          name="Alex"
          role="React Native Developer"
          experience={5}
        />

        <ProfileCard
          name="Sam"
          role="Frontend Engineer"
          experience={7}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 20
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20
  }
});