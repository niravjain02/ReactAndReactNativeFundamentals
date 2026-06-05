import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function LoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#0f766e" size="large" />
      <Text style={styles.text}>Loading users...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  text: {
    color: '#52606d',
    fontSize: 16,
    marginTop: 12,
  },
});
