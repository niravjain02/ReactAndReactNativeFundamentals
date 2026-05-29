/**
 * Day 14: Reusable Loading, Error & Empty States
 *
 * This example simulates API states instead of making a real request.
 * Real apps still need the same UI patterns: loading, success, error, and empty.
 */

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import EmptyState from "./components/EmptyState";
import ErrorView from "./components/ErrorView";
import LoadingView from "./components/LoadingView";
import UserCard from "./components/UserCard";

const USERS = [
  {
    id: "1",
    name: "Ava Patel",
    role: "Product Designer",
    email: "ava@example.com"
  },
  {
    id: "2",
    name: "Marcus Lee",
    role: "React Native Developer",
    email: "marcus@example.com"
  },
  {
    id: "3",
    name: "Nora Johnson",
    role: "QA Engineer",
    email: "nora@example.com"
  }
];

const STATE_OPTIONS = [
  { label: "Loading", value: "loading" },
  { label: "Success", value: "success" },
  { label: "Error", value: "error" },
  { label: "Empty", value: "empty" }
];

export default function App() {
  const [screenState, setScreenState] = useState("loading");

  // Conditional rendering means choosing which UI to show based on state.
  // API screens often branch this way because loading, error, empty, and data
  // results each need a different experience for the user.
  function renderContent() {
    if (screenState === "loading") {
      return <LoadingView />;
    }

    if (screenState === "error") {
      return (
        <ErrorView
          message="The user request failed. In production, give a clear reason and a safe recovery action."
          onRetry={() => setScreenState("success")}
        />
      );
    }

    if (screenState === "empty") {
      return <EmptyState onAddSampleData={() => setScreenState("success")} />;
    }

    return (
      <FlatList
        // FlatList is the standard React Native choice for rendering scrollable
        // lists because it only renders what the screen needs.
        data={USERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserCard user={item} />}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.content}>
        <Text style={styles.heading}>User Directory</Text>
        <Text style={styles.subheading}>
          Reusable UI states keep screens predictable and make production apps feel more polished.
        </Text>

        <View style={styles.controls}>
          {STATE_OPTIONS.map((option) => {
            const isActive = option.value === screenState;

            return (
              <Pressable
                key={option.value}
                style={({ pressed }) => [
                  styles.stateButton,
                  isActive && styles.activeStateButton,
                  pressed && styles.pressedStateButton
                ]}
                onPress={() => setScreenState(option.value)}
              >
                <Text style={[styles.stateButtonText, isActive && styles.activeStateButtonText]}>
                  {option.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Reusable UI state components keep loading, error, and empty layouts
            consistent across screens. This is production UX thinking: make the
            unusual states feel as designed as the happy path. */}
        <View style={styles.panel}>{renderContent()}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f8fb",
    flex: 1
  },
  content: {
    flex: 1,
    padding: 20
  },
  heading: {
    color: "#111827",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 6
  },
  subheading: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16
  },
  controls: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16
  },
  stateButton: {
    backgroundColor: "#fff",
    borderColor: "#d1d5db",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10
  },
  activeStateButton: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb"
  },
  pressedStateButton: {
    opacity: 0.75
  },
  stateButtonText: {
    color: "#374151",
    fontSize: 15,
    fontWeight: "700"
  },
  activeStateButtonText: {
    color: "#fff"
  },
  panel: {
    flex: 1
  },
  listContent: {
    paddingBottom: 24
  },
  separator: {
    height: 10
  }
});
