import { dataCacheTtlSeconds } from "@/lib/api/cache-policy";
import type { createApiClient } from "@/lib/api/api-client";
import { guideContentSchema } from "@/lib/schemas";
import type { GuideRepository } from "./guide-repository";

type ApiClient = ReturnType<typeof createApiClient>;

export function createApiGuideRepository(apiClient: ApiClient): GuideRepository {
  return {
    async getContent() {
      const response = await apiClient.get("/v1/guide", {
        cacheTtlSeconds: dataCacheTtlSeconds.editorial,
        schema: guideContentSchema
      });

      return response.data;
    }
  };
}
