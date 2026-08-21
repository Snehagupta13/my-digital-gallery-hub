import { useRef } from "react";
import { motion } from "motion/react";
import type { Project } from "@/lib/portfolio-data";
import { TagMarquee } from "@/components/TagMarquee";
import { useTiltHover } from "@/hooks/use-tilt-hover";

export function ProjectCard({
  project,
  compact,
  index,
}: {
  project: Project;
  compact?: boolean;
  index?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const tilt = useTiltHover();

  return (
    <a href={project.url} target="_blank" rel="noreferrer" className="group block h-full">
      <motion.div
        className="surface card-hover flex h-full flex-col overflow-hidden"
        style={tilt.style}
        onMouseMove={tilt.onMouseMove}
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onMouseEnter={() => {
          videoRef.current?.play();
        }}
        onMouseLeave={() => {
          tilt.onMouseLeave();
          const video = videoRef.current;
          if (!video) return;
          video.pause();
          video.currentTime = 0;
        }}
      >
        {project.video && (
          <div className="aspect-video w-full overflow-hidden border-b border-border bg-muted">
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {index !== undefined && (
            <p className="label-mono text-primary/70">N°{String(index).padStart(2, "0")}</p>
          )}
          <div
            className={`grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 ${index !== undefined ? "mt-2" : ""}`}
          >
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
          <TagMarquee items={project.tools} className="mt-5" />
        </div>
      </motion.div>
    </a>
  );
}
