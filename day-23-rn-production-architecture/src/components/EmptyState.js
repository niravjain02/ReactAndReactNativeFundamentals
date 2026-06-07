import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

export default function EmptyState({ searchText }) {
  const hasSearch = searchText.trim().length > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>No users found</Text>
      <Text style={styles.message}>
        {hasSearch
          ? `No results match "${searchText}". Try another search.`
          : 'The directory does not contain any users yet.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 72,
  },
  message: {
    color: colors.muted,
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },
});
