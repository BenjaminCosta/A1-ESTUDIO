import { useEffect, useRef, useState } from "react";

export function useScrolledHeader(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);
  const currentRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > threshold;
      if (isScrolled !== currentRef.current) {
        currentRef.current = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
