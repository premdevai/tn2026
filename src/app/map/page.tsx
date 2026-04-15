import type { Metadata } from "next";
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
    <div className="space-y-5">
      <section className="space-y-2">
        <p className="text-sm font-semibold text-primary">Map preview</p>
        <h1 className="text-3xl font-bold leading-tight">Booths around Tamil Nadu</h1>
        <p className="text-sm leading-6 text-muted-foreground">
          A real map API can plug in later. The current version stays static and low cost.
        </p>
      </section>

      <MapPreviewPlaceholder reports={reports} title="Static booth map preview" />

      <section className="space-y-3">
        <h2 className="text-lg font-bold">Share a quick update</h2>
        <QuickReportChipGroup />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold">Listed booths</h2>
        {booths.length > 0 ? (
          booths.map((booth) => <BoothCard key={booth.id} booth={booth} />)
        ) : (
          <EmptyState
            icon="how_to_vote"
            title="No booth records connected"
            body="The map route is ready for real booth records and geocoded locations."
          />
        )}
      </section>

      <DisclaimerCard />
    </div>
  );
}
