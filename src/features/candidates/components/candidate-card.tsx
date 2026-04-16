import { LucideIcon } from "@/components/shared/lucide-icon";
import { MetricChip } from "@/components/shared/metric-chip";
import { Card, CardContent } from "@/components/shared/ui/card";
import type { Candidate } from "@/lib/schemas";

type CandidateCardProps = {
  candidate: Candidate;
};

export function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="space-y-4 p-4">
        <div className="flex gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
            {candidate.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-base font-bold">{candidate.name}</h3>
            <p className="text-sm text-muted-foreground">{candidate.party}</p>
            <p className="mt-1 text-xs font-semibold text-primary">
              {candidate.locality} · {candidate.constituency}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <MetricChip icon="work" label="Work" value={candidate.occupation} />
          <MetricChip icon="school" label="Education" value={candidate.education} />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-bold">Focus areas</p>
          <div className="flex flex-wrap gap-2">
            {candidate.priorities.map((priority) => (
              <span
                key={priority}
                className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-semibold"
              >
                <LucideIcon name="check_circle" className="text-[14px] text-primary" />
                {priority}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xs leading-5 text-muted-foreground">
          Disclosure status: {candidate.disclosureStatus}
        </p>
      </CardContent>
    </Card>
  );
}
