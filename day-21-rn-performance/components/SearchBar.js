import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <TextInput
        accessibilityLabel="Search users"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder="Search users by name"
        placeholderTextColor="#98a2b3"
        returnKeyType="search"
        style={styles.input}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#d0d5dd',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 14,
  },
  input: {
    color: '#172033',
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
});
