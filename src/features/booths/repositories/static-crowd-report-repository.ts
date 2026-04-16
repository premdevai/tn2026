import { reportOptions } from "@/features/booths/data/report-options";
import { emptyCrowdReports } from "@/lib/data/empty-datasets";
import { crowdReportSchema } from "@/lib/schemas";
import type { CrowdReportRepository } from "./crowd-report-repository";

export function createStaticCrowdReportRepository(): CrowdReportRepository {
  return {
    async listRecent(limit = 5) {
      return emptyCrowdReports.slice(0, limit);
    },
    async listByBooth(boothSlug) {
      return emptyCrowdReports.filter((report) => report.boothSlug === boothSlug);
    },
    async listOptions() {
      return reportOptions;
    },
    async create(input) {
      return crowdReportSchema.parse({
        id: `fixture-report-${Date.now()}`,
        boothSlug: input.boothSlug ?? "unknown-booth",
        type: input.type,
        label: reportOptions.find((option) => option.value === input.type)?.label ?? "Queue update",
        reportedAt: new Date().toISOString(),
        locality: "Local booth",
        confidence: "low"
      });
    }
  };
}
