import { Pressable, StyleSheet, Text, View } from 'react-native';

const levelColors = {
  info: '#1d4ed8',
  warning: '#a16207',
  error: '#b91c1c',
};

export default function DebugPanel({
  logs,
  isLoading,
  onFetchSuccess,
  onFetchFailure,
  onClearLogs,
}) {
  return (
    <View style={styles.panel}>
      <Text style={styles.title}>Debug controls</Text>
      <Text style={styles.description}>
        Repeating the same action creates a known state that is easier to inspect.
      </Text>

      <View style={styles.buttonRow}>
        <DebugButton
          label="Fetch Success"
          onPress={onFetchSuccess}
          disabled={isLoading}
          color="#047857"
        />
        <DebugButton
          label="Fetch Failure"
          onPress={onFetchFailure}
          disabled={isLoading}
          color="#b91c1c"
        />
      </View>

      <DebugButton
        label="Clear Logs"
        onPress={onClearLogs}
        disabled={isLoading}
        color="#475569"
        fullWidth
      />

      <View style={styles.logHeader}>
        <Text style={styles.logTitle}>On-screen developer logs</Text>
        <Text style={styles.logCount}>{logs.length}</Text>
      </View>

      {logs.length === 0 ? (
        <Text style={styles.emptyText}>No logs yet. Run a request to begin.</Text>
      ) : (
        logs.map((entry) => (
          <View key={entry.id} style={styles.logRow}>
            <View style={styles.logMetadata}>
              <Text style={[styles.level, { color: levelColors[entry.level] }]}>
                {entry.level.toUpperCase()}
              </Text>
              <Text style={styles.time}>{entry.time}</Text>
            </View>
            <Text style={styles.logMessage}>{entry.message}</Text>
          </View>
        ))
      )}
    </View>
  );
}

function DebugButton({ label, onPress, disabled, color, fullWidth = false }) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        fullWidth ? styles.fullWidthButton : styles.flexButton,
        { backgroundColor: color },
        pressed ? styles.buttonPressed : null,
        disabled ? styles.buttonDisabled : null,
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  buttonDisabled: {
    opacity: 0.45,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    marginTop: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
  description: {
    color: '#64748b',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },
  emptyText: {
    color: '#64748b',
    fontSize: 14,
    fontStyle: 'italic',
    paddingVertical: 16,
    textAlign: 'center',
  },
  flexButton: {
    flex: 1,
  },
  fullWidthButton: {
    width: '100%',
  },
  level: {
    fontSize: 11,
    fontWeight: '900',
  },
  logCount: {
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
    color: '#334155',
    fontSize: 12,
    fontWeight: '800',
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  logHeader: {
    alignItems: 'center',
    borderBottomColor: '#cbd5e1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 10,
  },
  logMessage: {
    color: '#334155',
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 5,
  },
  logMetadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logRow: {
    borderBottomColor: '#e2e8f0',
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  logTitle: {
    color: '#0f172a',
    fontSize: 15,
    fontWeight: '800',
  },
  panel: {
    backgroundColor: '#ffffff',
    borderColor: '#cbd5e1',
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 16,
    padding: 18,
  },
  time: {
    color: '#94a3b8',
    fontSize: 11,
  },
  title: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '800',
  },
});
