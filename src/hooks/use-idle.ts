import { useEffect, useRef, useState } from "react";

export default function useIdle(idleTime: number = 5000) {
  const [idle, setIdle] = useState(false);
  const timer = useRef<number | null>(null);

  const clear = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  const startTimer = () => {
    clear();
    timer.current = window.setTimeout(() => {
      setIdle(true);
    }, idleTime);
  };

  const resetTimer = () => {
    setIdle(false);
    startTimer();
  };

  useEffect(() => {
    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "scroll",
      "touchstart",
    ];

    events.forEach((event) =>
      document.addEventListener(event, resetTimer, false)
    );

    window.addEventListener("blur", () => setIdle(true), false);
    window.addEventListener("focus", resetTimer, false);

    startTimer();

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, resetTimer, false)
      );
      window.removeEventListener("blur", () => setIdle(true), false);
      window.removeEventListener("focus", resetTimer, false);
      clear();
    };
  }, [idleTime]);

  return { idle };
}
