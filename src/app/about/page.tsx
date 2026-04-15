import type { Metadata } from "next";
import { AboutHighlights } from "@/features/about/components/about-highlights";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Vote Smart TN, a static-first voter-helper frontend prepared for future official data sources."
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <p className="text-sm font-semibold text-primary">About Vote Smart TN</p>
        <h1 className="text-3xl font-bold leading-tight">Useful voting information, kept simple.</h1>
        <p className="text-sm leading-6 text-muted-foreground">
          Vote Smart TN is built to help voters plan their day, understand booth basics, and keep
          election information approachable on low-cost infrastructure.
        </p>
      </section>
      <AboutHighlights />
    </div>
  );
}
