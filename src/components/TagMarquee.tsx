import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export function TagMarquee({ items, className = "" }: { items: string[]; className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const loop = [...items, ...items];

  useGSAP(
    () => {
      if (!trackRef.current || prefersReducedMotion()) return;
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: Math.max(items.length * 2.5, 10),
        ease: "none",
        repeat: -1,
      });
    },
    { scope: trackRef, dependencies: [items] },
  );

  return (
    <div
      className={`marquee-mask relative overflow-hidden ${className}`}
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div ref={trackRef} className="flex w-max gap-1.5">
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="shrink-0 rounded-sm border border-border bg-secondary px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
