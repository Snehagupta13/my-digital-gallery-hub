export function TagList({
  items,
  className = "",
  max,
}: {
  items: string[];
  className?: string;
  max?: number;
}) {
  const shown = max ? items.slice(0, max) : items;
  const rest = items.length - shown.length;

  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {shown.map((t) => (
        <li
          key={t}
          className="rounded-sm border border-border bg-secondary px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {t}
        </li>
      ))}
      {rest > 0 ? (
        <li className="rounded-sm px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground">
          +{rest}
        </li>
      ) : null}
    </ul>
  );
}
