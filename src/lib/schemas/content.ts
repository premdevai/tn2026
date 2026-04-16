import { z } from "zod";

import { crowdReportTypeSchema } from "@/lib/schemas/crowd-report";

export const homeHeroContentSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  desktopSearchPlaceholder: z.string().min(1),
  desktopSearchLabel: z.string().min(1),
  mobileTitle: z.string().min(1),
  mobileDescription: z.string().min(1),
  mobileSearchPlaceholder: z.string().min(1),
  statusEyebrow: z.string().min(1),
  statusTitle: z.string().min(1),
  statusCtaLabel: z.string().min(1)
});

export const homeNearbyContentSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  viewMapLabelDesktop: z.string().min(1),
  viewMapLabelMobile: z.string().min(1)
});

export const homeChecklistTeaserItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1)
});

export const homeChecklistContentSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  items: z.array(homeChecklistTeaserItemSchema)
});

export const homeGuideCtaContentSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  primaryLabel: z.string().min(1),
  secondaryLabel: z.string().min(1),
  mobileTitle: z.string().min(1),
  mobileDescription: z.string().min(1),
  mobileLabel: z.string().min(1),
  image: z.string().min(1),
  imageAlt: z.string().min(1)
});

export const homeContentSchema = z.object({
  hero: homeHeroContentSchema,
  nearby: homeNearbyContentSchema,
  checklist: homeChecklistContentSchema,
  guideCta: homeGuideCtaContentSchema
});

export const aboutHighlightSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1)
});

export const aboutContentSchema = z.object({
  highlights: z.array(aboutHighlightSchema)
});

export const reportOptionSchema = z.object({
  value: crowdReportTypeSchema,
  label: z.string().min(1),
  icon: z.string().min(1)
});

export const candidateFiltersSchema = z.object({
  localities: z.array(z.string().min(1))
});

export type HomeHeroContent = z.infer<typeof homeHeroContentSchema>;
export type HomeNearbyContent = z.infer<typeof homeNearbyContentSchema>;
export type HomeChecklistTeaserItem = z.infer<typeof homeChecklistTeaserItemSchema>;
export type HomeChecklistContent = z.infer<typeof homeChecklistContentSchema>;
export type HomeGuideCtaContent = z.infer<typeof homeGuideCtaContentSchema>;
export type HomeContent = z.infer<typeof homeContentSchema>;
export type AboutHighlight = z.infer<typeof aboutHighlightSchema>;
export type AboutContent = z.infer<typeof aboutContentSchema>;
export type ReportOption = z.infer<typeof reportOptionSchema>;
export type CandidateFilters = z.infer<typeof candidateFiltersSchema>;
