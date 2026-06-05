import { StyleSheet, Text, View } from 'react-native';

export default function EmptyState({ searchText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No users found</Text>
      <Text style={styles.message}>
        No results match "{searchText}". Try a different search.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  title: {
    color: '#102a43',
    fontSize: 20,
    fontWeight: '800',
  },
  message: {
    color: '#52606d',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
});
