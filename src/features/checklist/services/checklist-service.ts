import type { ChecklistRepository } from "@/features/checklist/repositories/checklist-repository";

export function createChecklistService(repository: ChecklistRepository) {
  return {
    listItems() {
      return repository.list();
    }
  };
}
