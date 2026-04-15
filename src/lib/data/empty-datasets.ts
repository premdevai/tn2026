import { boothSchema } from "@/lib/schemas/booth";
import { candidateSchema } from "@/lib/schemas/candidate";
import { checklistItemSchema } from "@/lib/schemas/checklist-item";
import { crowdReportSchema } from "@/lib/schemas/crowd-report";
import { recommendationSchema } from "@/lib/schemas/recommendation";

export const emptyBooths = boothSchema.array().parse([]);
export const emptyCandidates = candidateSchema.array().parse([]);
export const emptyChecklistItems = checklistItemSchema.array().parse([]);
export const emptyCrowdReports = crowdReportSchema.array().parse([]);
export const emptyRecommendations = recommendationSchema.array().parse([]);
