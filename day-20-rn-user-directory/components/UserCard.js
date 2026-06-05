import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function UserCard({ user, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed ? styles.cardPressed : null,
      ]}
      onPress={onPress}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
        <Text style={styles.company}>{user.company.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#d9e2ec',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 12,
    padding: 14,
  },
  cardPressed: {
    backgroundColor: '#eef6ff',
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: '#0f766e',
    borderRadius: 23,
    height: 46,
    justifyContent: 'center',
    marginRight: 12,
    width: 46,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
  },
  content: {
    flex: 1,
  },
  name: {
    color: '#102a43',
    fontSize: 17,
    fontWeight: '800',
  },
  username: {
    color: '#52606d',
    fontSize: 14,
    marginTop: 3,
  },
  company: {
    color: '#334e68',
    fontSize: 14,
    marginTop: 6,
  },
});
