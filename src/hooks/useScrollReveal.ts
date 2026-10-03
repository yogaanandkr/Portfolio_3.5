import { useEffect, useRef } from "react";
export function useScrollReveal() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const elements = rootRef.current?.querySelectorAll(".reveal");
    if (!elements) return;
    if (!("IntersectionObserver" in window)) {
      elements.forEach(element => element.setAttribute('data-revealed', 'true'));
      return;
    }
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', 'true');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return rootRef;
}
