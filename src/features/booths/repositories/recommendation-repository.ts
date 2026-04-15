import type { Recommendation } from "@/lib/schemas";

export interface RecommendationRepository {
  listForHome(limit?: number): Promise<Recommendation[]>;
  listByBooth(boothSlug: string): Promise<Recommendation[]>;
}
