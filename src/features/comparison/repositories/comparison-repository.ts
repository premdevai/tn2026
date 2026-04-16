import type { ComparisonModel } from "@/lib/schemas";

export interface ComparisonRepository {
  getModel(): Promise<ComparisonModel>;
}
