import type { Metadata } from "next";
import { Breadcrumbs, PageHeader, PageSection, PageShell } from "@/components/shared";
import { DisclaimerCard } from "@/components/shared/disclaimer-card";
import { EmptyState } from "@/components/shared/empty-state";
import { MapPreviewPlaceholder } from "@/components/shared/map-preview-placeholder";
import { QuickReportChipGroup } from "@/components/shared/quick-report-chip-group";
import { BoothCard } from "@/features/booths/components/booth-card";
import { appServices } from "@/lib/services/app-services";

export const metadata: Metadata = {
  title: "Booth map preview",
  description:
    "A static map placeholder for future Tamil Nadu booth discovery and crowd conditions."
};

export default async function MapPage() {
  const [booths, reports] = await Promise.all([
    appServices.booths.listFeaturedBooths(),
    appServices.crowdReports.listRecentReports()
  ]);

  return (
    <PageShell>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Tamil Nadu" }, { label: "Map" }]} />}
        eyebrow="Map preview"
        title="Booths around Tamil Nadu"
        description="A real map API can plug in later. The current version stays static and low cost."
      />

      <MapPreviewPlaceholder reports={reports} title="Static booth map preview" />

      <PageSection title="Share a quick update">
        <QuickReportChipGroup />
      </PageSection>

      <PageSection title="Listed booths">
        {booths.length > 0 ? (
          booths.map((booth) => <BoothCard key={booth.id} booth={booth} />)
        ) : (
          <EmptyState
            icon="how_to_vote"
            title="No booth records connected"
            body="The map route is ready for real booth records and geocoded locations."
          />
        )}
      </PageSection>

      <DisclaimerCard />
    </PageShell>
  );
}
