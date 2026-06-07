import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

export default function LoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} size="large" />
      <Text style={styles.message}>Loading users...</Text>
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
  message: {
    color: colors.muted,
    fontSize: 16,
    marginTop: 12,
  },
});
