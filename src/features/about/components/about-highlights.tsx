import { MaterialIcon } from "@/components/shared/material-icon";

const highlights = [
  {
    icon: "bolt",
    title: "Static-first",
    body: "Fast pages, simple hosting, and SEO-friendly routes before any backend exists."
  },
  {
    icon: "schema",
    title: "Typed data boundary",
    body: "Zod schemas define every entity now and can validate Worker API responses later."
  },
  {
    icon: "cloud_queue",
    title: "Backend-ready",
    body: "Repository contracts keep the UI ready for Cloudflare Workers, D1, and KV."
  },
  {
    icon: "groups",
    title: "For every voter",
    body: "Clear guidance for anyone checking booths, candidates, or voting-day prep."
  }
];

export function AboutHighlights() {
  return (
    <div className="space-y-3">
      {highlights.map((highlight) => (
        <article key={highlight.title} className="rounded-md border border-border bg-card p-4 shadow-soft">
          <div className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <MaterialIcon name={highlight.icon} />
            </span>
            <div className="space-y-1">
              <h2 className="font-semibold">{highlight.title}</h2>
              <p className="text-sm leading-6 text-muted-foreground">{highlight.body}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
