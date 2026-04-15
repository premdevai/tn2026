import Link from "next/link";
import { MaterialIcon } from "@/components/shared/material-icon";
import { MetricChip } from "@/components/shared/metric-chip";
import { StatusPill } from "@/components/shared/status-pill";
import { Card, CardContent } from "@/components/shared/ui/card";
import type { Booth } from "@/lib/schemas";

const crowdMeta: Record<
  Booth["crowdLevel"],
  { label: string; tone: "good" | "warning" | "danger"; icon: string }
> = {
  light: { label: "Low rush", tone: "good", icon: "check_circle" },
  steady: { label: "Moderate rush", tone: "warning", icon: "directions_walk" },
  busy: { label: "High rush", tone: "danger", icon: "groups" }
};

type BoothCardProps = {
  booth: Booth;
};

export function BoothCard({ booth }: BoothCardProps) {
  const crowd = crowdMeta[booth.crowdLevel];

  return (
    <Link href={`/booth/${booth.slug}`} className="block no-underline">
      <Card className="transition-colors hover:border-primary/40">
        <CardContent className="space-y-4 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 space-y-1">
              <h3 className="truncate text-base font-bold">{booth.name}</h3>
              <p className="text-sm text-muted-foreground">
                {booth.locality} · {booth.ward}
              </p>
            </div>
            <StatusPill tone={crowd.tone} icon={crowd.icon}>
              {crowd.label}
            </StatusPill>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <MetricChip icon="timer" label="Wait" value={`${booth.queueMinutes} min`} />
            <MetricChip icon="near_me" label="Distance" value={`${booth.distanceMeters} m`} />
          </div>
          <div className="flex items-center justify-between gap-2 text-sm font-semibold text-primary">
            <span>View booth details</span>
            <MaterialIcon name="chevron_right" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
