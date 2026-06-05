import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function UserDetailScreen({ navigation, route }) {
  // route.params reads the object sent from navigation.navigate on the list screen.
  const { user } = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>

        <View style={styles.section}>
          <DetailRow label="Email" value={user.email} />
          <DetailRow label="Phone" value={user.phone} />
          <DetailRow label="Website" value={user.website} />
          <DetailRow label="Company" value={user.company.name} />
          <DetailRow label="City" value={user.address.city} />
        </View>

        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

function DetailRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f5f8fb',
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#d9e2ec',
    borderRadius: 8,
    borderWidth: 1,
    padding: 20,
  },
  name: {
    color: '#102a43',
    fontSize: 24,
    fontWeight: '800',
  },
  username: {
    color: '#52606d',
    fontSize: 16,
    marginTop: 6,
  },
  section: {
    borderTopColor: '#e4e7eb',
    borderTopWidth: 1,
    marginTop: 20,
    paddingTop: 8,
  },
  row: {
    marginTop: 14,
  },
  label: {
    color: '#829ab1',
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  value: {
    color: '#243b53',
    fontSize: 16,
    marginTop: 4,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0f766e',
    borderRadius: 8,
    marginTop: 26,
    padding: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
