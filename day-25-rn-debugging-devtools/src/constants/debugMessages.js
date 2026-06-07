// Constants keep repeated text consistent and make messages easy to update.
const debugMessages = {
  userFriendlyError:
    'We could not load the example data. Check the debug log and try again.',
  requestStarted: (type) => `Starting a simulated ${type} request.`,
  requestSucceeded: (id) => `Request completed successfully. Record ID: ${id}.`,
  requestFailed: (details) => `Request failed with developer details: ${details}`,
  retryStarted: (type) => `Retrying the previous ${type} request.`,
};

export default debugMessages;
