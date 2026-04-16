import { dataCacheTtlSeconds } from "@/lib/api/cache-policy";
import type { createApiClient } from "@/lib/api/api-client";
import { recommendationSchema } from "@/lib/schemas";
import type { RecommendationRepository } from "./recommendation-repository";

type ApiClient = ReturnType<typeof createApiClient>;

export function createApiRecommendationRepository(apiClient: ApiClient): RecommendationRepository {
  return {
    async listForHome(limit = 3) {
      const response = await apiClient.get("/v1/recommendations/home", {
        cacheTtlSeconds: dataCacheTtlSeconds.live,
        query: { limit },
        schema: recommendationSchema.array()
      });

      return response.data;
    },
    async listByBooth(boothSlug) {
      const response = await apiClient.get(`/v1/booths/${boothSlug}/recommendations`, {
        cacheTtlSeconds: dataCacheTtlSeconds.live,
        schema: recommendationSchema.array()
      });

      return response.data;
    }
  };
}
