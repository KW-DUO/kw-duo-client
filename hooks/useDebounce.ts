import { useEffect, useRef, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
  const handler = useRef<NodeJS.Timeout | null>(null);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (handler.current) {
      clearTimeout(handler.current);
    }

    handler.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout
    return () => {
      if (handler.current) {
        clearTimeout(handler.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};
