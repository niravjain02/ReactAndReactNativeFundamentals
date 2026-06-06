import { memo, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function UserCard({ user, onPress }) {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => onPress(user)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.role}>{user.role}</Text>
      </View>

      <View style={styles.renderBadge}>
        <Text style={styles.renderLabel}>RENDERS</Text>
        <Text style={styles.renderCount}>{renderCount.current}</Text>
      </View>
    </Pressable>
  );
}

// React.memo skips re-rendering when user and onPress are unchanged.
// Counter updates re-render App, but the stable card props remain equal.
export default memo(UserCard);

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e4e7ec',
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 14,
  },
  cardPressed: {
    backgroundColor: '#eff6ff',
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    borderRadius: 22,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  avatarText: {
    color: '#1d4ed8',
    fontSize: 18,
    fontWeight: '800',
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    color: '#172033',
    fontSize: 16,
    fontWeight: '700',
  },
  role: {
    color: '#667085',
    fontSize: 13,
    marginTop: 3,
  },
  renderBadge: {
    alignItems: 'center',
    backgroundColor: '#f2f4f7',
    borderRadius: 10,
    minWidth: 60,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  renderLabel: {
    color: '#667085',
    fontSize: 9,
    fontWeight: '700',
  },
  renderCount: {
    color: '#101828',
    fontSize: 17,
    fontWeight: '800',
    marginTop: 1,
  },
});
