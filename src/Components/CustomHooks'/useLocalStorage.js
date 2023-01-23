import { useDebugValue, useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const previousValue = JSON.parse(localStorage.getItem(key));
    if (previousValue) return previousValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  });

  useDebugValue(value);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
