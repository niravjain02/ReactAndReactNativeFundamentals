import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ErrorView({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.message}>{message}</Text>
      <Pressable style={styles.button} onPress={onRetry}>
        <Text style={styles.buttonText}>Retry</Text>
      </Pressable>
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
  button: {
    backgroundColor: '#0f766e',
    borderRadius: 8,
    marginTop: 18,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
