import { ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

export default function UserDetailScreen({ route }) {
  // React Navigation provides the selected user through route params.
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>

      <View style={styles.card}>
        <DetailRow label="Email" value={user.email} />
        <DetailRow label="Phone" value={user.phone} />
        <DetailRow label="Website" value={user.website} />
        <DetailRow label="Company" value={user.company.name} />
        <DetailRow label="City" value={user.address.city} isLast />
      </View>
    </ScrollView>
  );
}

function DetailRow({ label, value, isLast = false }) {
  return (
    <View style={[styles.row, isLast ? styles.lastRow : null]}>
      <Text style={styles.label}>{label}</Text>
      <Text selectable style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 38,
    height: 76,
    justifyContent: 'center',
    width: 76,
  },
  avatarText: {
    color: colors.white,
    fontSize: 30,
    fontWeight: '800',
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 24,
    paddingHorizontal: 18,
  },
  label: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  name: {
    color: colors.text,
    fontSize: 25,
    fontWeight: '800',
    marginTop: 14,
    textAlign: 'center',
  },
  profileHeader: {
    alignItems: 'center',
  },
  row: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  screen: {
    backgroundColor: colors.background,
    flexGrow: 1,
    padding: 20,
  },
  username: {
    color: colors.muted,
    fontSize: 16,
    marginTop: 4,
  },
  value: {
    color: colors.textSecondary,
    fontSize: 16,
    marginTop: 5,
  },
});
