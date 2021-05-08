/* eslint-disable no-console */
import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  const readValue = () => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  };
  const [storedValue, setStoredValue] = useState(readValue);
  const setValue = (value) => {
    if (typeof window === 'undefined') {
 console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`
      );
}

    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new Event('local-storage'));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  };
  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Keep all instances hook sync
  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('local-storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('local-storage', handleStorageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [storedValue, setValue];
}

export { useLocalStorage };
