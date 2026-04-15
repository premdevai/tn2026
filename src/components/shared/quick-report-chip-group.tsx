"use client";

import { MaterialIcon } from "@/components/shared/material-icon";
import { Button } from "@/components/shared/ui/button";
import { crowdReportTypeSchema, type CrowdReportType } from "@/lib/schemas";
import { cn } from "@/lib/utils/cn";
import { useReportDraftStore } from "@/store/report-store";

const reportOptions: Array<{
  value: CrowdReportType;
  label: string;
  icon: string;
}> = [
  { value: "empty", label: "Empty", icon: "sentiment_satisfied" },
  { value: "short_queue", label: "Short queue", icon: "directions_walk" },
  { value: "long_queue", label: "Long queue", icon: "groups" },
  { value: "accessibility_issue", label: "Access issue", icon: "accessible" },
  { value: "needs_water", label: "Needs water", icon: "water_drop" }
];

type QuickReportChipGroupProps = {
  boothSlug?: string;
};

export function QuickReportChipGroup({ boothSlug }: QuickReportChipGroupProps) {
  const selectedType = useReportDraftStore((state) => state.selectedType);
  const selectedBoothSlug = useReportDraftStore((state) => state.boothSlug);
  const setDraft = useReportDraftStore((state) => state.setDraft);

  return (
    <div className="space-y-3">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {reportOptions.map((option) => {
          const isSelected =
            selectedType === option.value && (boothSlug ? selectedBoothSlug === boothSlug : true);

          return (
            <Button
              key={option.value}
              type="button"
              variant={isSelected ? "default" : "outline"}
              className={cn("h-10 shrink-0 gap-2 px-3", isSelected && "border-primary")}
              onClick={() => setDraft(crowdReportTypeSchema.parse(option.value), boothSlug)}
            >
              <MaterialIcon name={option.icon} className="text-[18px]" />
              {option.label}
            </Button>
          );
        })}
      </div>
      <p className="text-xs leading-5 text-muted-foreground">
        Saved locally in this prototype. Future releases can submit reports through a Worker API.
      </p>
    </div>
  );
}
