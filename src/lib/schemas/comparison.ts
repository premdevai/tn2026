import { z } from "zod";

export const partyProfileSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  shortName: z.string().min(1),
  leaning: z.string().min(1),
  focus: z.string().min(1),
  summary: z.string().min(1),
  score: z.number().int().min(0).max(100),
  image: z.string().min(1),
  colorClass: z.string().min(1)
});

export const policySectorSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  icon: z.string().min(1),
  context: z.string().min(1),
  analysis: z.string().min(1),
  fiscalNote: z.string().min(1),
  feasibilityNote: z.string().min(1)
});

export const comparisonModelSchema = z.object({
  parties: z.array(partyProfileSchema),
  sectors: z.array(policySectorSchema),
  policyCopy: z.record(z.record(z.string().min(1))),
  parameterLabels: z.array(z.string().min(1))
});

export type PartyProfile = z.infer<typeof partyProfileSchema>;
export type PolicySector = z.infer<typeof policySectorSchema>;
export type ComparisonModel = z.infer<typeof comparisonModelSchema>;
