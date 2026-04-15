import type { RecommendationRepository } from "@/features/booths/repositories/recommendation-repository";

export function createRecommendationService(repository: RecommendationRepository) {
  return {
    listForHome(limit?: number) {
      return repository.listForHome(limit);
    },
    listForBooth(boothSlug: string) {
      return repository.listByBooth(boothSlug);
    }
  };
}
