import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-6">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="truncate font-mono text-sm tracking-tight text-foreground"
        >
          <span className="text-primary">~/</span>sneha.gupta
        </Link>

        <nav className="hidden items-center gap-5 sm:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-sm border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary sm:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-5 py-3 sm:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="block py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-muted-foreground sm:px-6">
        <span>© {new Date().getFullYear()} Sneha Gupta</span>
        <div className="flex gap-4">
          <a className="transition-colors hover:text-primary" href={profile.github}>
            GitHub
          </a>
          <a className="transition-colors hover:text-primary" href={profile.linkedin}>
            LinkedIn
          </a>
          <a className="transition-colors hover:text-primary" href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <p className="label-mono">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {intro ? <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p> : null}
      <div className="mt-10 sm:mt-12">{children}</div>
    </main>
  );
}
