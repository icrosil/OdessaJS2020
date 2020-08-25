import { useState, useEffect } from 'react';

export function useTimeout({ ms = 1000, initialState = false, doneState = true } = {}) {
  const [isTimeoutDone, setTimeoutDone] = useState(initialState);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeoutDone(doneState);
    }, ms);
    return () => window.clearTimeout(timeoutId);
  }, []);
  return isTimeoutDone;
}
