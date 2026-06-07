import { useCallback, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import DebugPanel from './src/components/DebugPanel';
import ErrorState from './src/components/ErrorState';
import NetworkStatusCard from './src/components/NetworkStatusCard';
import debugMessages from './src/constants/debugMessages';
import {
  fetchFailureExample,
  fetchSuccessExample,
} from './src/services/debugApiService';
import { createLogger } from './src/utils/logger';

export default function App() {
  const [requestState, setRequestState] = useState('idle');
  const [responseData, setResponseData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastRequestType, setLastRequestType] = useState('success');
  const [logs, setLogs] = useState([]);

  // The logger receives a callback, so it can append developer messages to
  // React state while also sending them to the normal JavaScript console.
  const addLog = useCallback((entry) => {
    setLogs((currentLogs) => [entry, ...currentLogs].slice(0, 20));
  }, []);

  const logger = useMemo(() => createLogger(addLog), [addLog]);

  async function runRequest(type) {
    setLastRequestType(type);
    setRequestState('loading');
    setResponseData(null);
    setErrorMessage('');

    logger.log(debugMessages.requestStarted(type));

    try {
      // Logging before and after await helps identify where an async request stops.
      const result =
        type === 'success'
          ? await fetchSuccessExample()
          : await fetchFailureExample();

      setResponseData(result);
      setRequestState('success');
      logger.log(debugMessages.requestSucceeded(result.id));
    } catch (error) {
      setRequestState('error');
      setErrorMessage(debugMessages.userFriendlyError);

      // Users receive simple recovery guidance. Developers receive the technical
      // error details in logs, where they help diagnose the underlying failure.
      logger.error(debugMessages.requestFailed(error.message));
    }
  }

  function clearLogs() {
    // console.warn is useful for unusual but recoverable events.
    console.warn('[Debug Playground] The on-screen log history was cleared.');
    setLogs([]);
  }

  function retryRequest() {
    logger.warn(debugMessages.retryStarted(lastRequestType));
    runRequest(lastRequestType);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.screen}>
        <Text style={styles.eyebrow}>DAY 25</Text>
        <Text style={styles.title}>Debugging Playground</Text>
        <Text style={styles.subtitle}>
          Reproduce success and failure states, inspect logs, and practice a
          recoverable retry flow.
        </Text>

        <NetworkStatusCard state={requestState} data={responseData} />

        {requestState === 'loading' ? (
          <View style={styles.loadingCard}>
            <ActivityIndicator color="#2563eb" size="large" />
            <Text style={styles.loadingText}>Waiting for the API response...</Text>
          </View>
        ) : null}

        {requestState === 'error' ? (
          <ErrorState message={errorMessage} onRetry={retryRequest} />
        ) : null}

        <DebugPanel
          logs={logs}
          isLoading={requestState === 'loading'}
          onFetchSuccess={() => runRequest('success')}
          onFetchFailure={() => runRequest('failure')}
          onClearLogs={clearLogs}
        />

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Developer menu basics</Text>
          <Text style={styles.tipText}>
            In Expo Go, shake a physical device or use the simulator shortcut to
            open the developer menu. It provides tools such as reload, element
            inspection, and the React Native DevTools connection.
          </Text>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>iOS debugging connection</Text>
          <Text style={styles.tipText}>
            Console messages map to print or OSLog, paused JavaScript execution
            maps to Xcode breakpoints, and reproducible error states make both
            environments easier to inspect.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  eyebrow: {
    color: '#2563eb',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  loadingCard: {
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    borderColor: '#bfdbfe',
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 16,
    padding: 22,
  },
  loadingText: {
    color: '#1e40af',
    fontSize: 15,
    marginTop: 10,
  },
  safeArea: {
    backgroundColor: '#f1f5f9',
    flex: 1,
  },
  screen: {
    padding: 20,
    paddingBottom: 42,
  },
  subtitle: {
    color: '#475569',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    marginTop: 8,
  },
  tipCard: {
    backgroundColor: '#ffffff',
    borderColor: '#cbd5e1',
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 16,
    padding: 18,
  },
  tipText: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 6,
  },
  tipTitle: {
    color: '#0f172a',
    fontSize: 17,
    fontWeight: '800',
  },
  title: {
    color: '#0f172a',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 5,
  },
});
