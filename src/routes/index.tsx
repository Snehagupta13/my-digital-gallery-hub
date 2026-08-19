import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, skills, education, experience, projects } from "@/lib/portfolio-data";

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

  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-20">
        <p className="label-mono">{profile.role} · {profile.location}</p>
        <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          Sneha
          <br />
          <span className="text-primary">Gupta</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="glow-primary rounded-sm bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground"
          >
            View projects
          </Link>
          <a
            href={profile.github}
            className="rounded-sm border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-border px-6 py-16">
        <p className="label-mono">Currently</p>
        <div className="surface mt-6 p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-xl font-semibold">
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

      <section className="mx-auto max-w-5xl border-t border-border px-6 py-16">
        <p className="label-mono">Selected work</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {featured.map((p) => (
            <a key={p.repo} href={p.url} className="surface group p-5 transition-colors hover:border-primary">
              <h3 className="font-mono text-sm text-foreground group-hover:text-primary">{p.name}</h3>
              <p className="mt-3 line-clamp-5 text-sm text-muted-foreground">{p.summary}</p>
            </a>
          ))}
        </div>
        <Link
          to="/projects"
          className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.14em] text-primary"
        >
          All {projects.length} projects →
        </Link>
      </section>

      <section className="mx-auto max-w-5xl border-t border-border px-6 py-16">
        <p className="label-mono">Stack</p>
        <div className="mt-6 space-y-6">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-foreground">
                {s.group}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-sm border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-border px-6 py-16">
        <p className="label-mono">Education</p>
        <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-sm text-muted-foreground">
              {education.school} · {education.detail}
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">{education.period}</span>
        </div>
      </section>
    </main>
  );
}
