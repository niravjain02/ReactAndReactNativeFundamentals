import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CounterPanel({ count, onDecrement, onIncrement }) {
  return (
    <View style={styles.panel}>
      <View>
        <Text style={styles.label}>COUNTER</Text>
        <Text style={styles.count}>{count}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={onDecrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    alignItems: 'center',
    backgroundColor: '#172033',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  label: {
    color: '#a9b4ca',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  count: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2563eb',
    borderRadius: 12,
    height: 42,
    justifyContent: 'center',
    width: 48,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28,
  },
});
