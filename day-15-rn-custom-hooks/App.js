import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import UserCard from "./components/UserCard";
import useUsers from "./hooks/useUsers";

export default function App() {
  const { loading, error, users, refreshUsers } = useUsers();

  function renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Day 15</Text>
        <Text style={styles.heading}>Custom Hooks</Text>
        <Text style={styles.subheading}>
          The screen renders user interface while useUsers handles fetching, errors, and refresh state.
        </Text>
      </View>
    );
  }

  function renderEmptyList() {
    if (loading) {
      return (
        <View style={styles.centerState}>
          <ActivityIndicator size="large" color="#2563eb" />
          <Text style={styles.stateTitle}>Loading users...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.centerState}>
          <Text style={styles.stateTitle}>Could not load users</Text>
          <Text style={styles.stateText}>{error}</Text>
          <Pressable style={({ pressed }) => [styles.retryButton, pressed && styles.pressed]} onPress={refreshUsers}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </Pressable>
        </View>
      );
    }

    return (
      <View style={styles.centerState}>
        <Text style={styles.stateTitle}>No users found</Text>
        <Pressable style={({ pressed }) => [styles.retryButton, pressed && styles.pressed]} onPress={refreshUsers}>
          <Text style={styles.retryButtonText}>Refresh</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* App.js focuses on UI rendering. The business logic lives in useUsers,
          which keeps this component easier to read and change. */}
      <FlatList
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <UserCard user={item} />}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={[styles.listContent, users.length === 0 && styles.emptyListContent]}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        refreshing={loading && users.length > 0}
        onRefresh={refreshUsers}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f8fb",
    flex: 1
  },
  listContent: {
    padding: 20,
    paddingBottom: 32
  },
  emptyListContent: {
    flexGrow: 1
  },
  header: {
    marginBottom: 18
  },
  eyebrow: {
    color: "#2563eb",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 0,
    marginBottom: 6,
    textTransform: "uppercase"
  },
  heading: {
    color: "#111827",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 8
  },
  subheading: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 23
  },
  separator: {
    height: 10
  },
  centerState: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 18
  },
  stateTitle: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 14,
    textAlign: "center"
  },
  stateText: {
    color: "#6b7280",
    fontSize: 15,
    lineHeight: 21,
    marginTop: 8,
    textAlign: "center"
  },
  retryButton: {
    backgroundColor: "#2563eb",
    borderRadius: 8,
    marginTop: 18,
    paddingHorizontal: 18,
    paddingVertical: 12
  },
  retryButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800"
  },
  pressed: {
    opacity: 0.75
  }
});
