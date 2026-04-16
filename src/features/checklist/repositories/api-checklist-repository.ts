import { dataCacheTtlSeconds } from "@/lib/api/cache-policy";
import type { createApiClient } from "@/lib/api/api-client";
import { checklistItemSchema } from "@/lib/schemas";
import type { ChecklistRepository } from "./checklist-repository";

type ApiClient = ReturnType<typeof createApiClient>;

export function createApiChecklistRepository(apiClient: ApiClient): ChecklistRepository {
  return {
    async list() {
      const response = await apiClient.get("/v1/checklist", {
        cacheTtlSeconds: dataCacheTtlSeconds.editorial,
        schema: checklistItemSchema.array()
      });

      return response.data;
    }
  };
}
