import { dataCacheTtlSeconds } from "@/lib/api/cache-policy";
import type { createApiClient } from "@/lib/api/api-client";
import { candidateFiltersSchema, candidateSchema } from "@/lib/schemas";
import type { CandidateRepository } from "./candidate-repository";

type ApiClient = ReturnType<typeof createApiClient>;

export function createApiCandidateRepository(apiClient: ApiClient): CandidateRepository {
  return {
    async list(params = {}) {
      const response = await apiClient.get("/v1/candidates", {
        cacheTtlSeconds: dataCacheTtlSeconds.reference,
        query: params,
        schema: candidateSchema.array()
      });

      return response.data;
    },
    async listFilters() {
      const response = await apiClient.get("/v1/candidates/filters", {
        cacheTtlSeconds: dataCacheTtlSeconds.reference,
        schema: candidateFiltersSchema
      });

      return response.data;
    }
  };
}
