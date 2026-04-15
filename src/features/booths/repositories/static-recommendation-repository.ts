import { emptyRecommendations } from "@/lib/data/empty-datasets";
import type { RecommendationRepository } from "./recommendation-repository";

export function createStaticRecommendationRepository(): RecommendationRepository {
  return {
    async listForHome(limit = 3) {
      return emptyRecommendations.slice(0, limit);
    },
    async listByBooth(boothSlug) {
      const boothSpecific = emptyRecommendations.filter(
        (recommendation) => recommendation.boothSlug === boothSlug
      );
      const general = emptyRecommendations.filter(
        (recommendation) => !recommendation.boothSlug,
      );

      return [...boothSpecific, ...general].slice(0, 3);
    }
  };
}
