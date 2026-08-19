import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — AI, RAG & Multimodal Systems | Sneha Gupta" },
      {
        name: "description",
        content:
          "Open-source AI projects: MediScribe voice scribe, multimodal video RAG, offline Ayurveda AI, agentic tooling and LLM data pipelines.",
      },
      { property: "og:title", content: "Projects — Sneha Gupta" },
      {
        property: "og:description",
        content: "Voice AI, multimodal RAG and agentic LLM projects, all open source on GitHub.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Things I've built"
      intro="Open-source work from github.com/Snehagupta13 — voice AI, multimodal RAG and agentic pipelines."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.repo}
            href={p.url}
            className="surface group flex flex-col p-6 transition-colors hover:border-primary"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-lg font-semibold group-hover:text-primary">{p.name}</h2>
              <span className="font-mono text-xs text-muted-foreground">↗</span>
            </div>
            <p className="mt-1 font-mono text-xs text-muted-foreground">Snehagupta13/{p.repo}</p>
            <p className="mt-4 flex-1 text-sm text-muted-foreground">{p.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tools.map((t) => (
                <li
                  key={t}
                  className="rounded-sm border border-border bg-secondary px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
