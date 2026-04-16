import type { Metadata } from "next";
import { Breadcrumbs, PageHeader, PageShell } from "@/components/shared";
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
    <PageShell>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "Candidates" }]} />}
        eyebrow="Candidate directory"
        title="Candidates"
        description="Compare local priorities, background notes, and civic focus areas once official candidate sources are connected."
      />
      <CandidateDirectory candidates={candidates} />
      <DisclaimerCard title="Candidate data is not connected yet">
        Connect official declarations and election commission data before public release.
      </DisclaimerCard>
    </PageShell>
  );
}
