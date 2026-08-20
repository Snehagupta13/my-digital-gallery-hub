import type { Project } from "@/lib/portfolio-data";
import { TagList } from "@/components/TagList";

export function ProjectCard({ project, compact }: { project: Project; compact?: boolean }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="surface card-hover group flex flex-col p-5 sm:p-6"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
        <h3 className="truncate text-base font-semibold transition-colors group-hover:text-primary sm:text-lg">
          {project.name}
        </h3>
        <span className="shrink-0 font-mono text-xs text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:text-primary">
          ↗
        </span>
      </div>
      <p className="mt-1 truncate font-mono text-xs text-muted-foreground">
        Snehagupta13/{project.repo}
      </p>
      <p
        className={`mt-4 flex-1 text-sm text-muted-foreground ${compact ? "line-clamp-4" : ""}`}
      >
        {project.summary}
      </p>
      <TagList items={project.tools} className="mt-5" max={compact ? 4 : undefined} />
    </a>
  );
}
