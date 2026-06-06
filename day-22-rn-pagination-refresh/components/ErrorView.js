import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ErrorView({ message, onRetry, compact = false }) {
  return (
    <View style={[styles.container, compact && styles.compactContainer]}>
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={onRetry} style={styles.button}>
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  compactContainer: {
    paddingBottom: 28,
    paddingTop: 12,
  },
  title: {
    color: '#b42318',
    fontSize: 18,
    fontWeight: '700',
  },
  message: {
    color: '#667085',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 10,
    marginTop: 14,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
});
