export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-mask relative overflow-hidden border-y border-border py-3">
      <div className="marquee-track flex w-max gap-8">
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
