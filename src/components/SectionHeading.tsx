import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title?: string;
  action?: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      if (!pathRef.current || prefersReducedMotion()) return;
      gsap.set(pathRef.current, { drawSVG: "0%" });
      gsap.to(pathRef.current, {
        drawSVG: "100%",
        duration: 0.9,
        ease: "power2.inOut",
        scrollTrigger: { trigger: wrapRef.current, start: "top 85%" },
      });
    },
    { scope: wrapRef },
  );

  return (
    <div
      ref={wrapRef}
      className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between"
    >
      <div className="min-w-0">
        <p className="label-mono">{eyebrow}</p>
        {title ? (
          <>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            <svg viewBox="0 0 120 8" className="mt-2 h-2 w-24 text-primary" aria-hidden="true">
              <path
                ref={pathRef}
                d="M1 5.5C20 1.5 45 1.5 60 4.5C78 7.5 100 2 119 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
