import { useEffect, useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import EmptyState from '../components/EmptyState';
import ErrorView from '../components/ErrorView';
import LoadingView from '../components/LoadingView';
import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';
import { fetchUsers } from '../services/userService';

export default function UserListScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  async function loadUsers() {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const nextUsers = await fetchUsers();
      setUsers(nextUsers);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // useEffect runs after the first render, which makes it a good place to fetch data.
    // The state updates below drive the loading, error, and list UI.
    loadUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) {
      return users;
    }

    // Search filtering creates a derived list without changing the original API data.
    return users.filter((user) => {
      const searchableText = [
        user.name,
        user.username,
        user.email,
        user.company.name,
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [searchText, users]);

  function handleUserPress(user) {
    // Navigation params pass the selected user to the detail screen.
    navigation.navigate('UserDetail', { user });
  }

  if (isLoading) {
    // Loading, error, and empty states make the app clear while data changes.
    return <LoadingView />;
  }

  if (errorMessage) {
    return <ErrorView message={errorMessage} onRetry={loadUsers} />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>User Directory</Text>
        <Text style={styles.subtitle}>Fetched from JSONPlaceholder</Text>
      </View>

      <SearchBar value={searchText} onChangeText={setSearchText} />

      <FlatList
        contentContainerStyle={styles.list}
        data={filteredUsers}
        keyExtractor={(user) => String(user.id)}
        ListEmptyComponent={<EmptyState searchText={searchText} />}
        // FlatList efficiently renders rows from an array and gives each item to renderItem.
        renderItem={({ item }) => (
          <UserCard user={item} onPress={() => handleUserPress(item)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f5f8fb',
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 4,
  },
  title: {
    color: '#102a43',
    fontSize: 26,
    fontWeight: '800',
  },
  subtitle: {
    color: '#627d98',
    fontSize: 15,
    marginTop: 6,
  },
  list: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 10,
  },
});
