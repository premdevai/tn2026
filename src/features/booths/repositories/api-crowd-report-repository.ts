import { dataCacheTtlSeconds } from "@/lib/api/cache-policy";
import type { createApiClient } from "@/lib/api/api-client";
import { crowdReportSchema, reportOptionSchema } from "@/lib/schemas";
import type { CrowdReportRepository } from "./crowd-report-repository";

type ApiClient = ReturnType<typeof createApiClient>;

export function createApiCrowdReportRepository(apiClient: ApiClient): CrowdReportRepository {
  return {
    async listRecent(limit = 5) {
      const response = await apiClient.get("/v1/crowd-reports/recent", {
        cacheTtlSeconds: dataCacheTtlSeconds.live,
        query: { limit },
        schema: crowdReportSchema.array()
      });

      return response.data;
    },
    async listByBooth(boothSlug) {
      const response = await apiClient.get(`/v1/booths/${boothSlug}/crowd-reports`, {
        cacheTtlSeconds: dataCacheTtlSeconds.live,
        schema: crowdReportSchema.array()
      });

      return response.data;
    },
    async listOptions() {
      const response = await apiClient.get("/v1/content/report-options", {
        cacheTtlSeconds: dataCacheTtlSeconds.editorial,
        schema: reportOptionSchema.array()
      });

      return response.data;
    },
    async create(input) {
      const response = await apiClient.post("/v1/crowd-reports", {
        body: input,
        schema: crowdReportSchema
      });

      return response.data;
    }
  };
}
