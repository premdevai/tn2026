import type { Metadata } from "next";
import { DisclaimerCard } from "@/components/shared/disclaimer-card";
import { CandidateDirectory } from "@/features/candidates/components/candidate-directory";
import { appServices } from "@/lib/services/app-services";

export const metadata: Metadata = {
  title: "Candidate summaries",
  description:
    "Candidate profile structure for Tamil Nadu voter-helper planning, prepared for future official data integration."
};

export default async function CandidatesPage() {
  const candidates = await appServices.candidates.listCandidates();

  return (
    <div className="space-y-5">
      <section className="space-y-2">
        <p className="text-sm font-semibold text-primary">Candidate directory</p>
        <h1 className="text-3xl font-bold leading-tight">Candidates</h1>
        <p className="text-sm leading-6 text-muted-foreground">
          Compare local priorities, background notes, and civic focus areas once official candidate
          sources are connected.
        </p>
      </section>
      <CandidateDirectory candidates={candidates} />
      <DisclaimerCard title="Candidate data is not connected yet">
        Connect official declarations and election commission data before public release.
      </DisclaimerCard>
    </div>
  );
}
