import type { CrowdReportRepository } from "@/features/booths/repositories/crowd-report-repository";

export function createCrowdReportService(repository: CrowdReportRepository) {
  return {
    listRecentReports(limit?: number) {
      return repository.listRecent(limit);
    },
    listReportsForBooth(boothSlug: string) {
      return repository.listByBooth(boothSlug);
    }
  };
}
