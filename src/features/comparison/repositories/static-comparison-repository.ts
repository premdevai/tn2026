import { comparisonModel } from "@/features/comparison/data/comparison-data";
import type { ComparisonRepository } from "./comparison-repository";

export function createStaticComparisonRepository(): ComparisonRepository {
  return {
    async getModel() {
      return comparisonModel;
    }
  };
}
