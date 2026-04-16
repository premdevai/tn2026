import { dataCacheTtlSeconds } from "@/lib/api/cache-policy";
import type { createApiClient } from "@/lib/api/api-client";
import { aboutContentSchema, homeContentSchema } from "@/lib/schemas";
import type { ContentRepository } from "@/features/content/repositories/content-repository";

type ApiClient = ReturnType<typeof createApiClient>;

export function createApiContentRepository(apiClient: ApiClient): ContentRepository {
  return {
    async getHomeContent() {
      const response = await apiClient.get("/v1/content/home", {
        cacheTtlSeconds: dataCacheTtlSeconds.editorial,
        schema: homeContentSchema
      });

      return response.data;
    },
    async getAboutContent() {
      const response = await apiClient.get("/v1/content/about", {
        cacheTtlSeconds: dataCacheTtlSeconds.editorial,
        schema: aboutContentSchema
      });

      return response.data;
    }
  };
}
