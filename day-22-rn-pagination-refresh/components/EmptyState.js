import { StyleSheet, Text, View } from 'react-native';

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No posts found</Text>
      <Text style={styles.message}>Pull down to check for new posts.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 72,
  },
  title: {
    color: '#172033',
    fontSize: 19,
    fontWeight: '700',
  },
  message: {
    color: '#667085',
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
  },
});
