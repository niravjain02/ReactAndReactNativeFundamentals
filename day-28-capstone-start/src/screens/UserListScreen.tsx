import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../../App';
import EmptyState from '../components/EmptyState';
import ErrorView from '../components/ErrorView';
import LoadingView from '../components/LoadingView';
import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';
import { useUsers } from '../hooks/useUsers';
import { colors, spacing, typography } from '../theme';
import { filterUsers } from '../utils/userFilters';

type UserListScreenProps = NativeStackScreenProps<RootStackParamList, 'UserList'>;

// Screens compose hooks and reusable components into a complete destination.
export default function UserListScreen({ navigation }: UserListScreenProps) {
  const [query, setQuery] = useState('');
  const { users, isLoading, error, retry } = useUsers();
  const filteredUsers = useMemo(() => filterUsers(users, query), [users, query]);

  if (isLoading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView message={error} onRetry={retry} />;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={filteredUsers}
        keyExtractor={(user) => user.id.toString()}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={<EmptyState hasSearchQuery={query.trim().length > 0} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.eyebrow}>CAPSTONE DIRECTORY</Text>
            <Text style={styles.title}>Meet the team</Text>
            <Text style={styles.subtitle}>
              Browse {users.length} profiles and find people by their details.
            </Text>
            <SearchBar value={query} onChangeText={setQuery} />
            <Text style={styles.resultCount}>
              {filteredUsers.length} {filteredUsers.length === 1 ? 'result' : 'results'}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <UserCard
            user={item}
            onPress={() => navigation.navigate('UserDetail', { user: item })}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
    padding: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  header: {
    marginBottom: spacing.sm,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: typography.sizes.caption,
    fontWeight: typography.weights.bold,
    letterSpacing: 1.3,
  },
  title: {
    color: colors.text,
    fontSize: typography.sizes.hero,
    fontWeight: typography.weights.bold,
    marginTop: spacing.xs,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: typography.sizes.body,
    lineHeight: 22,
    marginTop: spacing.sm,
  },
  resultCount: {
    color: colors.textMuted,
    fontSize: typography.sizes.caption,
    fontWeight: typography.weights.semibold,
    marginBottom: spacing.md,
    marginTop: spacing.lg,
    textTransform: 'uppercase',
  },
});
