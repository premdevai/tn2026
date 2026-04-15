import { createStaticBoothRepository } from "@/features/booths/repositories/static-booth-repository";
import { createStaticCrowdReportRepository } from "@/features/booths/repositories/static-crowd-report-repository";
import { createStaticRecommendationRepository } from "@/features/booths/repositories/static-recommendation-repository";
import { createStaticChecklistRepository } from "@/features/checklist/repositories/static-checklist-repository";
import { createStaticCandidateRepository } from "@/features/candidates/repositories/static-candidate-repository";

export const staticRepositories = {
  booths: createStaticBoothRepository(),
  candidates: createStaticCandidateRepository(),
  checklist: createStaticChecklistRepository(),
  crowdReports: createStaticCrowdReportRepository(),
  recommendations: createStaticRecommendationRepository()
};
