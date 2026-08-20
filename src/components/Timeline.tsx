import { useRef } from "react";
import { motion } from "motion/react";
import { gsap, useGSAP, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function Timeline({
  items,
}: {
  items: { name: string; points: string[] }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || prefersReducedMotion()) return;

      if (lineRef.current) {
        gsap.set(lineRef.current, { drawSVG: "0%" });
        gsap.to(lineRef.current, {
          drawSVG: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 85%",
            scrub: 0.6,
          },
        });
      }

      const cards = gsap.utils.toArray<HTMLElement>("[data-timeline-card]", containerRef.current);
      gsap.set(cards, { opacity: 0, x: -24 });
      ScrollTrigger.batch(cards, {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
          }),
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative pl-6 sm:pl-8">
      <svg className="absolute left-0 top-0 h-full w-px overflow-visible" aria-hidden="true">
        <line
          ref={lineRef}
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          stroke="var(--border)"
          strokeWidth="1"
        />
      </svg>
      <ol className="relative space-y-8">
        {items.map((item) => (
          <li key={item.name} data-timeline-card className="relative">
            <span className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[2.35rem]" />
            <motion.div
              className="surface card-hover p-5 sm:p-6"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <h3 className="font-mono text-sm uppercase tracking-[0.12em] text-primary">
                {item.name}
              </h3>
              <ul className="mt-4 space-y-3">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span className="min-w-0">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  );
}
