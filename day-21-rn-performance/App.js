import { useCallback, useState } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import CounterPanel from './components/CounterPanel';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import useFilteredUsers from './hooks/useFilteredUsers';

const ROLES = ['iOS Engineer', 'React Native Developer', 'Designer', 'Product Manager'];

// This data is outside App so it is created only once, not after every state change.
const USERS = Array.from({ length: 100 }, (_, index) => ({
  id: String(index + 1),
  name: `User ${String(index + 1).padStart(3, '0')}`,
  role: ROLES[index % ROLES.length],
}));

export default function App() {
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState('');
  const filteredUsers = useFilteredUsers(USERS, searchText);

  // useCallback keeps this function reference stable between App renders.
  // React.memo can then see that UserCard received the same onPress prop.
  const handleUserPress = useCallback((user) => {
    Alert.alert(user.name, user.role);
  }, []);

  // FlatList receives the same renderItem function until its dependencies change.
  const renderUser = useCallback(
    ({ item }) => <UserCard user={item} onPress={handleUserPress} />,
    [handleUserPress]
  );

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Text style={styles.eyebrow}>DAY 21</Text>
        <Text style={styles.title}>Performance Playground</Text>
        <Text style={styles.subtitle}>
          Change the counter and watch the visible card render counts stay the same.
        </Text>

        <CounterPanel
          count={count}
          onDecrement={() => setCount((current) => current - 1)}
          onIncrement={() => setCount((current) => current + 1)}
        />

        <SearchBar value={searchText} onChangeText={setSearchText} />

        <View style={styles.resultsRow}>
          <Text style={styles.resultsText}>{filteredUsers.length} users</Text>
          <Text style={styles.hint}>Scroll to see virtualization</Text>
        </View>

        <FlatList
          data={filteredUsers}
          renderItem={renderUser}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContent}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          removeClippedSubviews
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            <Text style={styles.emptyText}>No users match your search.</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  eyebrow: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  title: {
    color: '#172033',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 4,
  },
  subtitle: {
    color: '#667085',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
    marginTop: 6,
  },
  resultsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  resultsText: {
    color: '#344054',
    fontSize: 14,
    fontWeight: '700',
  },
  hint: {
    color: '#98a2b3',
    fontSize: 12,
  },
  listContent: {
    paddingBottom: 24,
  },
  emptyText: {
    color: '#667085',
    paddingVertical: 32,
    textAlign: 'center',
  },
});
