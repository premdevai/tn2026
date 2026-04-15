import { StatusPill } from "@/components/shared/status-pill";
import { Card, CardContent } from "@/components/shared/ui/card";
import { MaterialIcon } from "@/components/shared/material-icon";
import type { Recommendation } from "@/lib/schemas";

const priorityStatus = {
  high: { label: "High priority", tone: "danger" },
  medium: { label: "Medium priority", tone: "warning" },
  low: { label: "Low priority", tone: "neutral" }
} as const;

type RecommendationCardProps = {
  recommendation: Recommendation;
};

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const priority = priorityStatus[recommendation.priority];

  return (
    <Card className="shadow-sm">
      <CardContent className="space-y-3 p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MaterialIcon name={recommendation.icon} />
          </span>
          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <StatusPill tone={priority.tone}>{priority.label}</StatusPill>
              <span className="text-xs font-semibold text-muted-foreground">
                {recommendation.locality}
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold leading-snug">{recommendation.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{recommendation.summary}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
