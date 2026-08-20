import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, skills, education, experience, projects, workProjects } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/SectionHeading";
import { StatStrip } from "@/components/StatStrip";
import { ProjectCard } from "@/components/ProjectCard";
import { WorkProjectCard } from "@/components/WorkProjectCard";
import { Marquee } from "@/components/Marquee";
import { TagList } from "@/components/TagList";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sneha Gupta — AI Engineer | Agents, RAG & Voice AI" },
      {
        name: "description",
        content:
          "AI Engineer building multi-agent LLM workflows, RAG pipelines and voice assistants for regulated healthcare and medical imaging.",
      },
      { property: "og:title", content: "Sneha Gupta — AI Engineer" },
      {
        property: "og:description",
        content:
          "Multi-agent LLM systems, knowledge graphs and voice AI for medical device regulation and imaging.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.filter((p) => p.featured);
  const marqueeItems = skills.flatMap((s) => s.items).slice(0, 18);

  return (
    <main>
      <section className="mx-auto max-w-5xl px-5 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-20">
        <div className="fade-up">
          <p className="label-mono">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-4 text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Sneha
            <br />
            <span className="text-primary">Gupta</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="glow-primary rounded-sm bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground"
            >
              View projects
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Get in touch
            </Link>
            <a
              href={profile.github}
              className="rounded-sm border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-12 sm:mt-16">
          <StatStrip />
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-16">
        <SectionHeading eyebrow="Currently" />
        <div className="surface card-hover mt-6 p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold sm:text-xl">
              {experience.title} · {experience.company}
            </h2>
            <span className="font-mono text-xs text-muted-foreground">{experience.period}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Building Stanley AI — a regulatory intelligence platform for EU MDR, US FDA and CDSCO
            compliance — plus DICOMPixel medical imaging microservices.
          </p>
          <Link
            to="/experience"
            className="mt-5 inline-block font-mono text-xs uppercase tracking-[0.14em] text-primary"
          >
            Read the full story →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-border px-5 py-14 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          action={
            <Link
              to="/projects"
              className="font-mono text-xs uppercase tracking-[0.14em] text-primary"
            >
              All {projects.length} →
            </Link>
          }
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.repo} project={p} compact />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-border px-5 py-14 sm:px-6 sm:py-16">
        <SectionHeading eyebrow="Stack" title="Tools I reach for" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="surface p-5 sm:p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-foreground">
                {s.group}
              </h3>
              <TagList items={s.items} className="mt-4" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-border px-5 py-14 sm:px-6 sm:py-16">
        <SectionHeading eyebrow="Education" />
        <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
          <div className="min-w-0">
            <h3 className="text-base font-semibold sm:text-lg">{education.degree}</h3>
            <p className="text-sm text-muted-foreground">
              {education.school} · {education.detail}
            </p>
          </div>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">
            {education.period}
          </span>
        </div>
      </section>
    </main>
  );
}
