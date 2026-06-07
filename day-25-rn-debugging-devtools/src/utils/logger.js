function createEntry(level, message) {
  return {
    id: `${Date.now()}-${Math.random()}`,
    level,
    message,
    time: new Date().toLocaleTimeString(),
  };
}

// A useful logging strategy records the event, relevant context, and severity.
// Avoid logging passwords, tokens, personal data, or other sensitive values.
export function createLogger(onLog) {
  return {
    log(message) {
      const entry = createEntry('info', message);

      // console.log is appropriate for normal development milestones.
      console.log(`[Debug Playground] ${message}`);
      onLog(entry);
    },
    warn(message) {
      const entry = createEntry('warning', message);

      // console.warn highlights recoverable or unexpected behavior.
      console.warn(`[Debug Playground] ${message}`);
      onLog(entry);
    },
    error(message) {
      const entry = createEntry('error', message);

      // console.error is reserved for failures that need investigation.
      console.error(`[Debug Playground] ${message}`);
      onLog(entry);
    },
  };
}
