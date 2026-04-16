import type { CrowdReport, CrowdReportCreateInput, ReportOption } from "@/lib/schemas";

export interface CrowdReportRepository {
  listRecent(limit?: number): Promise<CrowdReport[]>;
  listByBooth(boothSlug: string): Promise<CrowdReport[]>;
  listOptions(): Promise<ReportOption[]>;
  create(input: CrowdReportCreateInput): Promise<CrowdReport>;
}
