import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell } from "@/components/SiteChrome";
import { Timeline } from "@/components/Timeline";
import { TagMarquee } from "@/components/TagMarquee";
import { WorkProjectCard } from "@/components/WorkProjectCard";
import { experience, education, workProjects } from "@/lib/portfolio-data";
import { useReveal } from "@/hooks/use-reveal";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { AmbientSparkles } from "@/components/AmbientSparkles";


export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sneha Gupta, AI Engineer" },
      {
        name: "description",
        content:
          "AI Engineer at Meril Life Science: Stanley AI regulatory intelligence, LangGraph multi-agent workflows, Neo4j knowledge graphs and DICOM imaging microservices.",
      },
      { property: "og:title", content: "Experience — Sneha Gupta" },
      {
        property: "og:description",
        content:
          "Regulatory AI, knowledge graphs and medical imaging work at Meril Life Science.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const stackItems = experience.stack.split(" · ");
  const workGridRef = useReveal<HTMLDivElement>(":scope > *", "blur");

  return (
    <PageShell
      eyebrow="Experience"
      title={experience.company}
      intro={`${experience.title} · ${experience.period}`}
    >
      <AmbientSparkles />
      <ScrollProgressBar />
      <div className="space-y-12">
        <motion.a
          href={experience.companyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          merillife.com ↗
        </motion.a>

        <Timeline items={experience.groups} />

        <section>
          <p className="label-mono">Organization products</p>
          <div ref={workGridRef} className="mt-5 grid gap-5 lg:grid-cols-2">
            {workProjects.map((p) => (
              <WorkProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>

        <div>

          <p className="label-mono">Tech stack</p>
          <TagMarquee items={stackItems} className="mt-4" />
        </div>

        <div className="border-t border-border pt-8">
          <p className="label-mono">Education</p>
          <h3 className="mt-3 text-lg font-semibold">{education.degree}</h3>
          <p className="text-sm text-muted-foreground">
            {education.school} · {education.period} · {education.detail}
          </p>
        </div>
      </div>
    </PageShell>
  );
}
