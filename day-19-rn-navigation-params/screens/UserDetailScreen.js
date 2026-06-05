import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function UserDetailScreen({ navigation, route }) {
  // route.params contains the object passed from navigation.navigate.
  const { id, name, role, email } = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{name.charAt(0)}</Text>
        </View>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>

        <View style={styles.details}>
          <Text style={styles.label}>User ID</Text>
          <Text style={styles.value}>{id}</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{email}</Text>
        </View>

        {/* navigation.goBack returns to the previous screen in the stack. */}
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f5f8fb',
    flex: 1,
    padding: 20,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#d9e2ec',
    borderRadius: 8,
    borderWidth: 1,
    padding: 24,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: '#2563eb',
    borderRadius: 36,
    height: 72,
    justifyContent: 'center',
    marginBottom: 16,
    width: 72,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '800',
  },
  name: {
    color: '#102a43',
    fontSize: 24,
    fontWeight: '800',
  },
  role: {
    color: '#52606d',
    fontSize: 16,
    marginTop: 6,
  },
  details: {
    alignSelf: 'stretch',
    borderTopColor: '#e4e7eb',
    borderTopWidth: 1,
    marginTop: 24,
    paddingTop: 20,
  },
  label: {
    color: '#829ab1',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 12,
    textTransform: 'uppercase',
  },
  value: {
    color: '#243b53',
    fontSize: 16,
    marginTop: 4,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#2563eb',
    borderRadius: 8,
    marginTop: 28,
    padding: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
