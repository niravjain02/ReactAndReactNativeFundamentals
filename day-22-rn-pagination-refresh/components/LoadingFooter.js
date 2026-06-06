import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function LoadingFooter() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#2563eb" />
      <Text style={styles.text}>Loading more posts...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 28,
    paddingTop: 12,
  },
  text: {
    color: '#667085',
    fontSize: 14,
    marginLeft: 10,
  },
});
