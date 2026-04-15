import { emptyCrowdReports } from "@/lib/data/empty-datasets";
import type { CrowdReportRepository } from "./crowd-report-repository";

export function createStaticCrowdReportRepository(): CrowdReportRepository {
  return {
    async listRecent(limit = 5) {
      return emptyCrowdReports.slice(0, limit);
    },
    async listByBooth(boothSlug) {
      return emptyCrowdReports.filter((report) => report.boothSlug === boothSlug);
    }
  };
}
