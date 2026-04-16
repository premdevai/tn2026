import { createBoothService } from "@/features/booths/services/booth-service";
import { createCrowdReportService } from "@/features/booths/services/crowd-report-service";
import { createRecommendationService } from "@/features/booths/services/recommendation-service";
import { createChecklistService } from "@/features/checklist/services/checklist-service";
import { createCandidateService } from "@/features/candidates/services/candidate-service";
import { createComparisonService } from "@/features/comparison/services/comparison-service";
import { createDistrictService } from "@/features/districts/services/district-service";
import { createGuideService } from "@/features/guide/services/guide-service";
import { createStationService } from "@/features/stations/services/station-service";
import { staticRepositories } from "@/lib/repositories/static-repositories";

export const appServices = {
  booths: createBoothService(staticRepositories.booths),
  candidates: createCandidateService(staticRepositories.candidates),
  checklist: createChecklistService(staticRepositories.checklist),
  comparison: createComparisonService(staticRepositories.comparison),
  crowdReports: createCrowdReportService(staticRepositories.crowdReports),
  districts: createDistrictService(staticRepositories.districts),
  guide: createGuideService(staticRepositories.guide),
  recommendations: createRecommendationService(staticRepositories.recommendations),
  stations: createStationService(staticRepositories.stations)
};

export type AppServices = typeof appServices;
