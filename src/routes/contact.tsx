import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sneha Gupta — AI Engineer" },
      {
        name: "description",
        content:
          "Get in touch with Sneha Gupta, AI Engineer in Kanpur, for AI agent, RAG and voice assistant work.",
      },
      { property: "og:title", content: "Contact — Sneha Gupta" },
      { property: "og:description", content: "Email, phone and GitHub for Sneha Gupta, AI Engineer." },
    ],
  }),
  component: ContactPage,
});

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:+91${profile.phone}` },
  { label: "GitHub", value: "Snehagupta13", href: profile.github },
  { label: "LinkedIn", value: "snehagupta", href: profile.linkedin },
];

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's talk"
      intro="Open to AI engineering roles and collaborations on agentic, RAG and voice systems."
    >
      <ul className="divide-y divide-border border-y border-border">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="flex items-center justify-between gap-4 py-5 transition-colors hover:text-primary"
            >
              <span className="label-mono">{l.label}</span>
              <span className="font-mono text-sm">{l.value}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 font-mono text-xs text-muted-foreground">Based in {profile.location}</p>
    </PageShell>
  );
}
