import { useState } from "react";

const useLocalStorage = (keyName:string, defaultValue:string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return typeof value === 'string' ? value : JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, defaultValue);
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue: string) => {
    try {
      window.localStorage.setItem(keyName, newValue);
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};

export default useLocalStorage;