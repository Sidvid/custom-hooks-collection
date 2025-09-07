import { useEffect, useState } from "react";

export default function useInView(ref: any) {
  const [isIntersection, setIsIntersection] = useState(false);
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsIntersection(entry.isIntersecting);
    },
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.unobserve(ref.current);
  }, [ref.cuurent]);
  return {
    isIntersection,
  };
}
