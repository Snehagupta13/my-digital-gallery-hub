import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!barRef.current || prefersReducedMotion()) return;

    gsap.set(barRef.current, { scaleX: 0 });
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full" aria-hidden="true">
      <div ref={barRef} className="h-full w-full origin-left bg-primary" />
    </div>
  );
}
