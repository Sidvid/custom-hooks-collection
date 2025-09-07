import { useRef } from "react";

interface DebounceOptions {
  wait?: number;
  immediate?: boolean;
  fn: (...args: any[]) => void;
}
export default function useDebounce({ fn, immediate, wait }: DebounceOptions) {
  const timeRef = useRef<number>(null);
  const debounce = (...args: any[]) => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    const callNow = immediate && !timeRef.current;
    timeRef.current = setTimeout(() => {
      timeRef.current = null;
      if (!immediate) {
        fn(...args);
      }
    }, wait);
    if (callNow) {
      fn(...args);
    }
  };
  return { debounce };
}
