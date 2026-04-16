import type { Metadata } from "next";
import { Breadcrumbs, PageHeader, PageShell } from "@/components/shared";
import { AboutHighlights } from "@/features/about/components/about-highlights";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Vote Smart TN, a static-first voter-helper frontend prepared for future official data sources."
};

export default function AboutPage() {
  return (
    <PageShell size="narrow">
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "About" }]} />}
        eyebrow="About Vote Smart TN"
        title="Useful voting information, kept simple."
        description="Vote Smart TN is built to help voters plan their day, understand booth basics, and keep election information approachable on low-cost infrastructure."
      />
      <AboutHighlights />
    </PageShell>
  );
}
