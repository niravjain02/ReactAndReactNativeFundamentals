import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import EmptyState from '../components/EmptyState';
import ErrorView from '../components/ErrorView';
import LoadingView from '../components/LoadingView';
import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';
import colors from '../constants/colors';
import useUsers from '../hooks/useUsers';
import { filterUsers } from '../utils/userFilters';

// Screens represent full destinations in the app and connect UI pieces to data.
// They are similar to SwiftUI feature screens or UIKit view controllers.
export default function UserListScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const { users, isLoading, errorMessage, reloadUsers } = useUsers();

  const filteredUsers = useMemo(
    () => filterUsers(users, searchText),
    [searchText, users],
  );

  if (isLoading) {
    return <LoadingView />;
  }

  if (errorMessage) {
    return <ErrorView message={errorMessage} onRetry={reloadUsers} />;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.introduction}>
        <Text style={styles.title}>People</Text>
        <Text style={styles.subtitle}>
          Search the directory and open a profile for more details.
        </Text>
      </View>

      <SearchBar value={searchText} onChangeText={setSearchText} />

      <FlatList
        contentContainerStyle={styles.list}
        data={filteredUsers}
        keyboardShouldPersistTaps="handled"
        keyExtractor={(user) => String(user.id)}
        ListEmptyComponent={<EmptyState searchText={searchText} />}
        renderItem={({ item }) => (
          <UserCard
            user={item}
            onPress={() => navigation.navigate('UserDetail', { user: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  introduction: {
    paddingBottom: 16,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  list: {
    flexGrow: 1,
    paddingBottom: 24,
    paddingHorizontal: 20,
    paddingTop: 4,
  },
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 21,
    marginTop: 5,
  },
  title: {
    color: colors.text,
    fontSize: 27,
    fontWeight: '800',
  },
});
