import { emptyChecklistItems } from "@/lib/data/empty-datasets";
import type { ChecklistRepository } from "./checklist-repository";

export function createStaticChecklistRepository(): ChecklistRepository {
  return {
    async list() {
      return emptyChecklistItems;
    }
  };
}
