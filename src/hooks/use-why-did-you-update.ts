import { useEffect, useRef } from "react";

export default function useWhyDidYouUpdate<T>(value: T) {
  const previousRef = useRef<T>(null);
  useEffect(() => {
    previousRef.current = value;
  }, [value]);
  return {
    from: previousRef.current,
    to: value,
  };
}
