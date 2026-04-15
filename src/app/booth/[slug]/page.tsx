import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DisclaimerCard } from "@/components/shared/disclaimer-card";
import { MapPreviewPlaceholder } from "@/components/shared/map-preview-placeholder";
import { MaterialIcon } from "@/components/shared/material-icon";
import { MetricChip } from "@/components/shared/metric-chip";
import { QuickReportChipGroup } from "@/components/shared/quick-report-chip-group";
import { StatusPill } from "@/components/shared/status-pill";
import { Button } from "@/components/shared/ui/button";
import { RecommendationCard } from "@/features/booths/components/recommendation-card";
import { appServices } from "@/lib/services/app-services";

const crowdMeta = {
  light: { label: "Low rush", tone: "good", icon: "check_circle" },
  steady: { label: "Moderate rush", tone: "warning", icon: "directions_walk" },
  busy: { label: "High rush", tone: "danger", icon: "groups" }
} as const;

type BoothPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await appServices.booths.listBoothSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BoothPageProps): Promise<Metadata> {
  const { slug } = await params;
  const booth = await appServices.booths.getBoothBySlug(slug);

  if (!booth) {
    return {
      title: "Booth not found"
    };
  }

  return {
    title: `${booth.name} voter booth`,
    description: `Booth details for ${booth.name}, ${booth.locality}, ${booth.ward}.`
  };
}

export default async function BoothPage({ params }: BoothPageProps) {
  const { slug } = await params;
  const [booth, recommendations, reports] = await Promise.all([
    appServices.booths.getBoothBySlug(slug),
    appServices.recommendations.listForBooth(slug),
    appServices.crowdReports.listReportsForBooth(slug)
  ]);

  if (!booth) {
    notFound();
  }

  const crowd = crowdMeta[booth.crowdLevel];

  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <Button asChild variant="ghost" className="h-9 px-0 text-muted-foreground">
          <Link href="/">
            <MaterialIcon name="arrow_back" />
            Home
          </Link>
        </Button>
        <div className="space-y-3">
          <StatusPill tone={crowd.tone} icon={crowd.icon}>
            {crowd.label}
          </StatusPill>
          <div>
            <h1 className="text-3xl font-bold leading-tight">{booth.name}</h1>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {booth.address}, {booth.locality}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <MetricChip icon="timer" label="Wait" value={`${booth.queueMinutes} min`} />
            <MetricChip icon="location_city" label="Ward" value={booth.ward} />
            <MetricChip icon="groups" label="Assembly" value={booth.assemblyConstituency} />
            <MetricChip icon="update" label="Source" value="Pending" />
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold">Facilities</h2>
        <div className="grid grid-cols-2 gap-2">
          <MetricChip
            icon="accessible"
            label="Access"
            value={booth.facilities.wheelchair ? "Entry ready" : "Ask staff"}
          />
          <MetricChip
            icon="water_drop"
            label="Water"
            value={booth.facilities.drinkingWater ? "Nearby" : "Carry"}
          />
          <MetricChip
            icon="local_parking"
            label="Parking"
            value={booth.facilities.parking ? "Available" : "Limited"}
          />
          <MetricChip
            icon="wb_sunny"
            label="Shade"
            value={booth.facilities.shadedQueue ? "Queue shade" : "Limited"}
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold">Booth notes</h2>
        <div className="space-y-3">
          {recommendations.map((recommendation) => (
            <RecommendationCard key={recommendation.id} recommendation={recommendation} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold">Report queue condition</h2>
        <QuickReportChipGroup boothSlug={booth.slug} />
      </section>

      <MapPreviewPlaceholder reports={reports} title="Booth area preview" />
      <DisclaimerCard />
    </div>
  );
}
