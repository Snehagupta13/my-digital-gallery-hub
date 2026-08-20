export function Timeline({
  items,
}: {
  items: { name: string; points: string[] }[];
}) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
      {items.map((item) => (
        <li key={item.name} className="relative">
          <span className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[2.35rem]" />
          <div className="surface card-hover p-5 sm:p-6">
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
          </div>
        </li>
      ))}
    </ol>
  );
}
