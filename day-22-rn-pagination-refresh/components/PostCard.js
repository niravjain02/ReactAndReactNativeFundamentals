import { StyleSheet, Text, View } from 'react-native';

export default function PostCard({ post }) {
  return (
    <View style={styles.card}>
      <Text style={styles.number}>POST {post.id}</Text>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#e4e7ec',
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 12,
    padding: 16,
  },
  number: {
    color: '#2563eb',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  title: {
    color: '#172033',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 23,
    marginTop: 6,
    textTransform: 'capitalize',
  },
  body: {
    color: '#667085',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
});
