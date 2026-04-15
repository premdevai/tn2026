import { MaterialIcon } from "@/components/shared/material-icon";
import { MetricChip } from "@/components/shared/metric-chip";
import { CHENNAI_CIVIC_IMAGE_URL } from "@/lib/constants/images";
import type { CrowdReport } from "@/lib/schemas";

type MapPreviewPlaceholderProps = {
  reports?: CrowdReport[];
  title?: string;
};

export function MapPreviewPlaceholder({
  reports = [],
  title = "Booth map preview"
}: MapPreviewPlaceholderProps) {
  const latestReport = reports[0];

  return (
    <section className="overflow-hidden rounded-lg border bg-card shadow-sm">
      <div className="relative h-56">
        <img
          src={CHENNAI_CIVIC_IMAGE_URL}
          alt="A Chennai road used as a static civic map placeholder"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.55))]" />
        <div className="absolute left-[18%] top-[34%] flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-soft">
          <MaterialIcon name="location_on" />
        </div>
        <div className="absolute right-[22%] top-[46%] flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground shadow-soft">
          <MaterialIcon name="how_to_vote" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 space-y-3 text-white">
          <div>
            <p className="text-xs font-semibold uppercase">Static now, API-ready later</p>
            <h2 className="text-xl font-bold leading-tight">{title}</h2>
          </div>
          <div className="grid grid-cols-2 gap-2 text-foreground">
            <MetricChip icon="layers" label="Map" value="No API yet" />
            <MetricChip
              icon="campaign"
              label="Reports"
              value={latestReport ? latestReport.label : "Pending"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
