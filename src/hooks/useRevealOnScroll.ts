import { useEffect, useRef } from "react";

// Single shared observer for the whole page — cheaper than one per section
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            // Set will-change only for the duration of the animation
            el.style.willChange = "opacity, transform";
            el.classList.add("in");
            sharedObserver!.unobserve(el);
            // Drop will-change after the longest transition (0.82s) to free compositor layers
            setTimeout(() => {
              el.style.willChange = "auto";
            }, 900);
          }
        });
      },
      { threshold: 0.1 },
    );
  }
  return sharedObserver;
}

export function useRevealOnScroll() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = getSharedObserver();
    const els = ref.current ? Array.from(ref.current.querySelectorAll(".rv")) : [];
    els.forEach((el) => obs.observe(el));
    return () => els.forEach((el) => obs.unobserve(el));
  }, []);

  return ref;
}
