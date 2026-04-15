import type { CrowdReport } from "@/lib/schemas";

export interface CrowdReportRepository {
  listRecent(limit?: number): Promise<CrowdReport[]>;
  listByBooth(boothSlug: string): Promise<CrowdReport[]>;
}
