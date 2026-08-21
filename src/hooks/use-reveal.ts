import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

type RevealEffect = "fade" | "flip" | "blur";

const EFFECTS: Record<RevealEffect, { from: gsap.TweenVars; to: gsap.TweenVars; duration: number }> = {
  fade: {
    from: { opacity: 0, y: 24 },
    to: { opacity: 1, y: 0 },
    duration: 0.7,
  },
  flip: {
    from: {
      opacity: 0,
      y: 30,
      rotateX: -18,
      scale: 0.94,
      transformPerspective: 800,
      transformOrigin: "top center",
    },
    to: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
    duration: 0.8,
  },
  blur: {
    from: { opacity: 0, y: 20, filter: "blur(14px)" },
    to: { opacity: 1, y: 0, filter: "blur(0px)" },
    duration: 0.8,
  },
};

export function useReveal<T extends HTMLElement>(
  selector = ":scope > *",
  effect: RevealEffect = "fade",
) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const targets = gsap.utils.toArray<HTMLElement>(selector, ref.current);
      if (!targets.length) return;

      const { from, to, duration } = EFFECTS[effect];
      gsap.set(targets, from);

      ScrollTrigger.batch(targets, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            ...to,
            duration,
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
