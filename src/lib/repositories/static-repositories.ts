import { createStaticBoothRepository } from "@/features/booths/repositories/static-booth-repository";
import { createStaticCrowdReportRepository } from "@/features/booths/repositories/static-crowd-report-repository";
import { createStaticRecommendationRepository } from "@/features/booths/repositories/static-recommendation-repository";
import { createStaticChecklistRepository } from "@/features/checklist/repositories/static-checklist-repository";
import { createStaticCandidateRepository } from "@/features/candidates/repositories/static-candidate-repository";
import { createStaticComparisonRepository } from "@/features/comparison/repositories/static-comparison-repository";
import { createStaticDistrictRepository } from "@/features/districts/repositories/static-district-repository";
import { createStaticGuideRepository } from "@/features/guide/repositories/static-guide-repository";
import { createStaticStationRepository } from "@/features/stations/repositories/static-station-repository";

export const staticRepositories = {
  booths: createStaticBoothRepository(),
  candidates: createStaticCandidateRepository(),
  checklist: createStaticChecklistRepository(),
  comparison: createStaticComparisonRepository(),
  crowdReports: createStaticCrowdReportRepository(),
  districts: createStaticDistrictRepository(),
  guide: createStaticGuideRepository(),
  recommendations: createStaticRecommendationRepository(),
  stations: createStaticStationRepository()
};
