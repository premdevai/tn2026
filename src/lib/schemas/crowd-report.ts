import { z } from "zod";

export const crowdReportTypeSchema = z.enum([
  "empty",
  "short_queue",
  "long_queue",
  "accessibility_issue",
  "needs_water"
]);

export const crowdReportSchema = z.object({
  id: z.string().min(1),
  boothSlug: z.string().min(1),
  type: crowdReportTypeSchema,
  label: z.string().min(1),
  reportedAt: z.string().datetime(),
  locality: z.string().min(1),
  confidence: z.enum(["low", "medium", "high"])
});

export const crowdReportCreateInputSchema = z.object({
  boothSlug: z.string().min(1).optional(),
  type: crowdReportTypeSchema
});

export type CrowdReportType = z.infer<typeof crowdReportTypeSchema>;
export type CrowdReport = z.infer<typeof crowdReportSchema>;
export type CrowdReportCreateInput = z.infer<typeof crowdReportCreateInputSchema>;
