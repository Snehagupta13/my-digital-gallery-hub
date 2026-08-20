import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export function Marquee({ items }: { items: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const loop = [...items, ...items];

  useGSAP(
    () => {
      if (!trackRef.current || prefersReducedMotion()) return;
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: trackRef },
  );

  return (
    <div
      className="marquee-mask relative overflow-hidden border-y border-border py-3"
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div ref={trackRef} className="flex w-max gap-8">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
