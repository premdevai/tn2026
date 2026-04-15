import { createBoothService } from "@/features/booths/services/booth-service";
import { createCrowdReportService } from "@/features/booths/services/crowd-report-service";
import { createRecommendationService } from "@/features/booths/services/recommendation-service";
import { createChecklistService } from "@/features/checklist/services/checklist-service";
import { createCandidateService } from "@/features/candidates/services/candidate-service";
import { staticRepositories } from "@/lib/repositories/static-repositories";

export const appServices = {
  booths: createBoothService(staticRepositories.booths),
  candidates: createCandidateService(staticRepositories.candidates),
  checklist: createChecklistService(staticRepositories.checklist),
  crowdReports: createCrowdReportService(staticRepositories.crowdReports),
  recommendations: createRecommendationService(staticRepositories.recommendations)
};

export type AppServices = typeof appServices;
