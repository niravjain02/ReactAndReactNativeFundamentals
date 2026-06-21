import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../../App';
import EmptyState from '../components/EmptyState';
import UserCard from '../components/UserCard';
import { useFavorites } from '../hooks/useFavorites';
import { colors, spacing, typography } from '../theme';

type FavoritesScreenProps = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

export default function FavoritesScreen({ navigation }: FavoritesScreenProps) {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  return (
    <View style={styles.screen}>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={favorites}
        keyExtractor={(user) => user.id.toString()}
        ListEmptyComponent={
          <EmptyState
            title="No favorites yet"
            message={'Tap ♥ on any user card to save them here. Favorites persist between sessions.'}
          />
        }
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.eyebrow}>SAVED</Text>
            <Text style={styles.title}>Favorites</Text>
            <Text style={styles.subtitle}>
              {favorites.length === 0
                ? 'Your saved users will appear here.'
                : `${favorites.length} ${favorites.length === 1 ? 'user' : 'users'} saved`}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <UserCard
            user={item}
            isFavorited={isFavorite(item.id)}
            onPress={() => navigation.navigate('UserDetail', { user: item })}
            onFavoriteToggle={() => toggleFavorite(item)}
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
    color: colors.danger,
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
    lineHeight: typography.lineHeights.normal,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
});
