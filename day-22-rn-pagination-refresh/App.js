import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import EmptyState from './components/EmptyState';
import ErrorView from './components/ErrorView';
import LoadingFooter from './components/LoadingFooter';
import PostCard from './components/PostCard';
import usePaginatedPosts from './hooks/usePaginatedPosts';

export default function App() {
  const {
    posts,
    error,
    hasMore,
    isInitialLoading,
    isRefreshing,
    isLoadingMore,
    refresh,
    loadMore,
    retry,
  } = usePaginatedPosts();

  if (isInitialLoading && posts.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <View style={styles.centeredState}>
          <ActivityIndicator color="#2563eb" size="large" />
          <Text style={styles.loadingText}>Loading the first page...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error && posts.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <ErrorView message={error} onRetry={retry} />
      </SafeAreaView>
    );
  }

  const renderFooter = () => {
    if (isLoadingMore) return <LoadingFooter />;
    if (error) return <ErrorView compact message={error} onRetry={retry} />;
    if (!hasMore && posts.length > 0) {
      return <Text style={styles.endText}>You reached the end.</Text>;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.eyebrow}>DAY 22</Text>
        <Text style={styles.title}>Posts</Text>
        <Text style={styles.subtitle}>
          Pull down to refresh or scroll to load the next page.
        </Text>

        <FlatList
          data={posts}
          renderItem={({ item }) => <PostCard post={item} />}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<EmptyState />}
          ListFooterComponent={renderFooter}
          // FlatList uses RefreshControl internally. The spinner stays visible
          // while refreshing is true and onRefresh runs after a pull gesture.
          refreshing={isRefreshing}
          onRefresh={refresh}
          // onEndReached requests the next page near the bottom of the list.
          onEndReached={loadMore}
          onEndReachedThreshold={0.4}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f4f7fb',
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  centeredState: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loadingText: {
    color: '#667085',
    fontSize: 15,
    marginTop: 12,
  },
  eyebrow: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  title: {
    color: '#172033',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 3,
  },
  subtitle: {
    color: '#667085',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
    marginTop: 5,
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  endText: {
    color: '#98a2b3',
    fontSize: 13,
    paddingBottom: 28,
    paddingTop: 12,
    textAlign: 'center',
  },
});
