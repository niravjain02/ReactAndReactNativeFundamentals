const REQUEST_DELAY = 900;

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// Reproducible states make debugging easier because each button always follows
// the same path. Real network conditions can be inconsistent and harder to study.
export async function fetchSuccessExample() {
  await wait(REQUEST_DELAY);

  return {
    id: 101,
    title: 'Debugging request completed',
    source: 'Simulated API service',
  };
}

export async function fetchFailureExample() {
  await wait(REQUEST_DELAY);

  throw new Error('Simulated HTTP 500 response from debugApiService.');
}
