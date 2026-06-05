import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import UserRow from '../components/UserRow';

const USERS = [
  {
    id: 'u-101',
    name: 'Avery Johnson',
    role: 'Product Manager',
    email: 'avery.johnson@example.com',
  },
  {
    id: 'u-102',
    name: 'Maya Patel',
    role: 'Frontend Developer',
    email: 'maya.patel@example.com',
  },
  {
    id: 'u-103',
    name: 'Jordan Smith',
    role: 'UX Designer',
    email: 'jordan.smith@example.com',
  },
  {
    id: 'u-104',
    name: 'Taylor Lee',
    role: 'QA Engineer',
    email: 'taylor.lee@example.com',
  },
];

export default function UserListScreen({ navigation }) {
  function handleUserPress(user) {
    // navigation.navigate moves to a registered screen by name.
    // The second argument sends route params to the next screen.
    navigation.navigate('UserDetail', {
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email,
    });
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Team Members</Text>
        <Text style={styles.subtitle}>Tap a person to view route params.</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.list}
        data={USERS}
        keyExtractor={(user) => user.id}
        renderItem={({ item }) => (
          <UserRow user={item} onPress={() => handleUserPress(item)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f5f8fb',
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
  },
  title: {
    color: '#102a43',
    fontSize: 26,
    fontWeight: '800',
  },
  subtitle: {
    color: '#627d98',
    fontSize: 15,
    marginTop: 6,
  },
  list: {
    padding: 20,
    paddingTop: 12,
  },
});
