import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        onChangeText={onChangeText}
        placeholder="Search name, username, email, or company"
        placeholderTextColor="#829ab1"
        style={styles.input}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#d9e2ec',
    borderRadius: 8,
    borderWidth: 1,
    color: '#102a43',
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
});
