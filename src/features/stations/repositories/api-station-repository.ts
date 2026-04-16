import { dataCacheTtlSeconds } from "@/lib/api/cache-policy";
import type { createApiClient } from "@/lib/api/api-client";
import { stationPageContentSchema, stationSchema } from "@/lib/schemas";
import type { StationRepository } from "./station-repository";

type ApiClient = ReturnType<typeof createApiClient>;

export function createApiStationRepository(apiClient: ApiClient): StationRepository {
  return {
    async getPageContent() {
      const response = await apiClient.get("/v1/stations/page-content", {
        cacheTtlSeconds: dataCacheTtlSeconds.live,
        schema: stationPageContentSchema
      });

      return response.data;
    },
    async search(params = {}) {
      const response = await apiClient.get("/v1/stations/search", {
        cacheTtlSeconds: dataCacheTtlSeconds.live,
        query: params,
        schema: stationSchema.array()
      });

      return response.data;
    }
  };
}
