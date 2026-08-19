import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { experience, education } from "@/lib/portfolio-data";

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
  return (
    <PageShell
      eyebrow="Experience"
      title={experience.company}
      intro={`${experience.title} · ${experience.period}`}
    >
      <div className="space-y-10">
        {experience.groups.map((g) => (
          <div key={g.name} className="surface p-6">
            <h2 className="font-mono text-sm uppercase tracking-[0.12em] text-primary">{g.name}</h2>
            <ul className="mt-4 space-y-3">
              {g.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="label-mono">Tech stack</p>
          <p className="mt-3 font-mono text-sm text-muted-foreground">{experience.stack}</p>
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
