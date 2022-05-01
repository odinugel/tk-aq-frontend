import { useEffect, useState } from 'react';

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  console.log(`${key} saved value: ${savedValue}`);
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`set ${key} to ${value}`);
  }, [key, value]);

  return [value, setValue];
}
