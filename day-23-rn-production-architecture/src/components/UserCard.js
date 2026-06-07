import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

// Components are reusable UI pieces. They receive data and callbacks through props.
// They map closely to small SwiftUI Views or reusable UIKit views.
export default function UserCard({ user, onPress }) {
  return (
    <Pressable
      accessibilityHint={`Opens details for ${user.name}`}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed ? styles.cardPressed : null,
      ]}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.company}>{user.company.name}</Text>
      </View>

      <Text style={styles.chevron}>&gt;</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    marginRight: 12,
    width: 48,
  },
  avatarText: {
    color: colors.white,
    fontSize: 19,
    fontWeight: '800',
  },
  card: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 12,
    padding: 14,
  },
  cardPressed: {
    backgroundColor: colors.primaryPressed,
  },
  chevron: {
    color: colors.muted,
    fontSize: 28,
    marginLeft: 8,
  },
  company: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: 6,
  },
  content: {
    flex: 1,
  },
  email: {
    color: colors.muted,
    fontSize: 14,
    marginTop: 3,
  },
  name: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
  },
});
