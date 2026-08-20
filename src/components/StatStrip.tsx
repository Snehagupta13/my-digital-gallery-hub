import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const stats = [
  { value: "2+", label: "Years building AI" },
  { value: "12", label: "Open-source projects" },
  { value: "3", label: "Regulatory regimes" },
  { value: "3", label: "Languages in voice AI" },
];

export function StatStrip() {
  const ref = useRef<HTMLDListElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const values = gsap.utils.toArray<HTMLElement>("[data-stat-value]", ref.current);

      values.forEach((el) => {
        const raw = el.dataset["statValue"] ?? "";
        const match = raw.match(/^(\d+)(.*)$/);
        if (!match) return;
        const [, digits, suffix] = match;
        const counter = { value: 0 };
        el.textContent = `0${suffix}`;

        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () =>
            gsap.to(counter, {
              value: Number(digits),
              duration: 1.2,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = `${Math.round(counter.value)}${suffix}`;
              },
            }),
        });
      });
    },
    { scope: ref },
  );

  return (
    <dl ref={ref} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="surface p-4 sm:p-5">
          <dt className="sr-only">{s.label}</dt>
          <dd
            data-stat-value={s.value}
            className="text-2xl font-semibold text-primary sm:text-3xl"
          >
            {s.value}
          </dd>
          <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
            {s.label}
          </p>
        </div>
      ))}
    </dl>
  );
}
