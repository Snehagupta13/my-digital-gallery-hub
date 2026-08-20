import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function useReveal<T extends HTMLElement>(selector = ":scope > *") {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const targets = gsap.utils.toArray<HTMLElement>(selector, ref.current);
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y: 24 });

      ScrollTrigger.batch(targets, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            overwrite: true,
          }),
      });
    },
    { scope: ref },
  );

  return ref;
}
