import { useEffect, useRef, useState } from "react";

export default function usePrevious<T>(currentState: T) {
  const state = useRef<any>(null);
  useEffect(() => {
    state.current = currentState;
  }, [currentState]);
  return {
    previous: state.current,
  };
}
