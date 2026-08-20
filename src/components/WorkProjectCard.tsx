import { motion } from "motion/react";
import type { WorkProject } from "@/lib/portfolio-data";
import { TagList } from "@/components/TagList";
import { useTiltHover } from "@/hooks/use-tilt-hover";

export function WorkProjectCard({ project }: { project: WorkProject }) {
  const tilt = useTiltHover();

  return (
    <article className="h-full">
      <motion.div
        className="surface card-hover h-full overflow-hidden"
        style={tilt.style}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted">
          <img
            src={project.image}
            alt={`${project.name} product interface`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
        <div className="p-5 sm:p-6">
          <p className="label-mono">{project.org}</p>
          <h3 className="mt-2 text-lg font-semibold sm:text-xl">{project.name}</h3>
          <p className="mt-1 text-sm text-primary">{project.tagline}</p>
          <p className="mt-4 text-sm text-muted-foreground">{project.summary}</p>
          <TagList items={project.tools} className="mt-5" />
        </div>
      </motion.div>
    </article>
  );
}
