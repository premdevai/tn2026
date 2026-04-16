import type { ComparisonRepository } from "@/features/comparison/repositories/comparison-repository";

export function createComparisonService(repository: ComparisonRepository) {
  return {
    getComparisonModel() {
      return repository.getModel();
    }
  };
}
