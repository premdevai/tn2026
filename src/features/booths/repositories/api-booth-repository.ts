import { dataCacheTtlSeconds } from "@/lib/api/cache-policy";
import type { createApiClient } from "@/lib/api/api-client";
import { isNotFoundError } from "@/lib/api/errors";
import { boothSchema } from "@/lib/schemas";
import type { BoothRepository } from "./booth-repository";

type ApiClient = ReturnType<typeof createApiClient>;

export function createApiBoothRepository(apiClient: ApiClient): BoothRepository {
  return {
    async list(params = {}) {
      const response = await apiClient.get("/v1/booths", {
        cacheTtlSeconds: dataCacheTtlSeconds.live,
        query: params,
        schema: boothSchema.array()
      });

      return response.data;
    },
    async findBySlug(slug) {
      try {
        const response = await apiClient.get(`/v1/booths/${slug}`, {
          cacheTtlSeconds: dataCacheTtlSeconds.live,
          schema: boothSchema
        });

        return response.data;
      } catch (error) {
        if (isNotFoundError(error)) {
          return null;
        }

        throw error;
      }
    },
    async listSlugs() {
      const response = await apiClient.get("/v1/booths", {
        cacheTtlSeconds: dataCacheTtlSeconds.reference,
        schema: boothSchema.array()
      });

      return response.data.map((booth) => booth.slug);
    }
  };
}
