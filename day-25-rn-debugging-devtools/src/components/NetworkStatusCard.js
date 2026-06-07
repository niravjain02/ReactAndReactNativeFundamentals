import { StyleSheet, Text, View } from 'react-native';

const statusContent = {
  idle: {
    title: 'Ready to debug',
    message: 'Choose a request below to create a reproducible state.',
    color: '#475569',
    backgroundColor: '#f8fafc',
  },
  loading: {
    title: 'Request in progress',
    message: 'The async service is waiting before returning a result.',
    color: '#1d4ed8',
    backgroundColor: '#eff6ff',
  },
  success: {
    title: 'Request succeeded',
    message: 'The service returned data and the UI updated successfully.',
    color: '#047857',
    backgroundColor: '#ecfdf5',
  },
  error: {
    title: 'Request failed',
    message: 'The app caught the error and displayed a recoverable state.',
    color: '#b91c1c',
    backgroundColor: '#fef2f2',
  },
};

export default function NetworkStatusCard({ state, data }) {
  const content = statusContent[state];

  return (
    <View style={[styles.card, { backgroundColor: content.backgroundColor }]}>
      <Text style={[styles.status, { color: content.color }]}>
        {state.toUpperCase()}
      </Text>
      <Text style={styles.title}>{content.title}</Text>
      <Text style={styles.message}>{content.message}</Text>

      {data ? (
        <View style={styles.dataBox}>
          <Text style={styles.dataLabel}>Returned data</Text>
          <Text style={styles.dataValue}>{data.title}</Text>
          <Text style={styles.dataSource}>{data.source}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: '#cbd5e1',
    borderRadius: 12,
    borderWidth: 1,
    padding: 18,
  },
  dataBox: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginTop: 14,
    padding: 12,
  },
  dataLabel: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  dataSource: {
    color: '#64748b',
    fontSize: 13,
    marginTop: 3,
  },
  dataValue: {
    color: '#0f172a',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 5,
  },
  message: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 5,
  },
  status: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
  title: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 7,
  },
});
