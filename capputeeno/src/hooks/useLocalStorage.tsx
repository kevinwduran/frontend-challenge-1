import { useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const savedValue = localStorage.getItem(item);
      return savedValue ? JSON.parse(savedValue) : initialValue;
    } catch (error) {
      console.error("Error parsing localStorage value:", error);
      return initialValue;
    }
  });

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
