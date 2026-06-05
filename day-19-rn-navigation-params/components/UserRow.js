import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function UserRow({ user, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.row,
        pressed ? styles.rowPressed : null,
      ]}
      onPress={onPress}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.role}>{user.role}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9e2ec',
    flexDirection: 'row',
    marginBottom: 12,
    padding: 14,
  },
  rowPressed: {
    backgroundColor: '#edf5ff',
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: '#2563eb',
    borderRadius: 22,
    height: 44,
    justifyContent: 'center',
    marginRight: 12,
    width: 44,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#102a43',
    fontSize: 17,
    fontWeight: '700',
  },
  role: {
    color: '#52606d',
    fontSize: 14,
    marginTop: 3,
  },
  chevron: {
    color: '#829ab1',
    fontSize: 28,
    lineHeight: 28,
  },
});
