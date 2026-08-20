const stats = [
  { value: "2+", label: "Years building AI" },
  { value: "12", label: "Open-source projects" },
  { value: "3", label: "Regulatory regimes" },
  { value: "3", label: "Languages in voice AI" },
];

export function StatStrip() {
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="surface p-4 sm:p-5">
          <dt className="sr-only">{s.label}</dt>
          <dd className="text-2xl font-semibold text-primary sm:text-3xl">{s.value}</dd>
          <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
            {s.label}
          </p>
        </div>
      ))}
    </dl>
  );
}
