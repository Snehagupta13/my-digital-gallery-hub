import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { Timeline } from "@/components/Timeline";
import { TagList } from "@/components/TagList";
import { WorkProjectCard } from "@/components/WorkProjectCard";
import { experience, education, workProjects } from "@/lib/portfolio-data";


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

  return (
    <PageShell
      eyebrow="Experience"
      title={experience.company}
      intro={`${experience.title} · ${experience.period}`}
    >
      <div className="space-y-12">
        <Timeline items={experience.groups} />

        <section>
          <p className="label-mono">Organization products</p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {workProjects.map((p) => (
              <WorkProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>

        <div>

          <p className="label-mono">Tech stack</p>
          <TagList items={stackItems} className="mt-4" />
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
