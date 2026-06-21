import { StyleSheet, Text, View } from 'react-native';

interface StatBadgeProps {
  label: string;
  value: string | number;
  accent?: 'blue' | 'green';
}

// Typed props explain exactly what a component needs from its parent.
export default function StatBadge({
  label,
  value,
  accent = 'blue',
}: StatBadgeProps) {
  const isGreen = accent === 'green';

  return (
    <View style={[styles.badge, isGreen && styles.greenBadge]}>
      <Text style={[styles.value, isGreen && styles.greenValue]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#e8efff',
    borderRadius: 12,
    flex: 1,
    padding: 14,
  },
  greenBadge: {
    backgroundColor: '#e4f7ed',
  },
  greenValue: {
    color: '#16784a',
  },
  label: {
    color: '#667085',
    fontSize: 13,
    marginTop: 4,
  },
  value: {
    color: '#3157d5',
    fontSize: 17,
    fontWeight: '700',
  },
});
