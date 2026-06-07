import { Pressable, StyleSheet, Text, View } from 'react-native';

// User-facing errors should be clear and actionable without exposing stack
// traces, endpoint details, or other technical information meant for developers.
export default function ErrorState({ message, onRetry }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Unable to complete request</Text>
      <Text style={styles.message}>{message}</Text>
      <Pressable
        accessibilityRole="button"
        onPress={onRetry}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <Text style={styles.buttonText}>Retry Request</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#b91c1c',
    borderRadius: 8,
    marginTop: 16,
    padding: 12,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#fecaca',
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 16,
    padding: 18,
  },
  message: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 6,
  },
  title: {
    color: '#991b1b',
    fontSize: 18,
    fontWeight: '800',
  },
});
