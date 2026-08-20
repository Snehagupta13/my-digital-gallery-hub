import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/portfolio-data";
import { useReveal } from "@/hooks/use-reveal";

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
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const featuredGridRef = useReveal<HTMLDivElement>();
  const restGridRef = useReveal<HTMLDivElement>();

  return (
    <PageShell
      eyebrow="Projects"
      title="Things I've built"
      intro="Open-source work from github.com/Snehagupta13 — voice AI, multimodal RAG and agentic pipelines."
    >
      <div className="space-y-12">
        <section>
          <p className="label-mono">Featured</p>
          <div ref={featuredGridRef} className="mt-5 grid gap-4 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.repo} project={p} />
            ))}
          </div>
        </section>
        <section>
          <p className="label-mono">More work</p>
          <div ref={restGridRef} className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <ProjectCard key={p.repo} project={p} compact />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
