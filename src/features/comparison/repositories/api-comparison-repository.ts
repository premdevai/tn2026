import { dataCacheTtlSeconds } from "@/lib/api/cache-policy";
import type { createApiClient } from "@/lib/api/api-client";
import { comparisonModelSchema } from "@/lib/schemas";
import type { ComparisonRepository } from "./comparison-repository";

type ApiClient = ReturnType<typeof createApiClient>;

export function createApiComparisonRepository(apiClient: ApiClient): ComparisonRepository {
  return {
    async getModel() {
      const response = await apiClient.get("/v1/comparison", {
        cacheTtlSeconds: dataCacheTtlSeconds.editorial,
        schema: comparisonModelSchema
      });

      return response.data;
    }
  };
}
