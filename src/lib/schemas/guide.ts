import { z } from "zod";

export const guideImagesSchema = z.object({
  sideLogo: z.string().min(1),
  pollingStation: z.string().min(1),
  inkMark: z.string().min(1),
  evm: z.string().min(1),
  vvpat: z.string().min(1)
});

export const guideNavItemSchema = z.object({
  href: z.string().min(1),
  icon: z.string().min(1),
  label: z.string().min(1),
  active: z.boolean()
});

export const guideStepSchema = z.object({
  image: z.string().min(1).optional(),
  alt: z.string().min(1).optional(),
  icon: z.string().min(1).optional(),
  number: z.string().min(1).optional(),
  title: z.string().min(1),
  description: z.string().min(1)
});

export const guideFaqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1)
});

export const guideContentSchema = z.object({
  images: guideImagesSchema,
  sideNavItems: z.array(guideNavItemSchema),
  mobileStationSteps: z.array(guideStepSchema),
  desktopStationSteps: z.array(guideStepSchema),
  mobileFaqItems: z.array(guideFaqItemSchema),
  desktopFaqItems: z.array(guideFaqItemSchema)
});

export type GuideImages = z.infer<typeof guideImagesSchema>;
export type GuideNavItem = z.infer<typeof guideNavItemSchema>;
export type GuideStep = z.infer<typeof guideStepSchema>;
export type GuideFaqItem = z.infer<typeof guideFaqItemSchema>;
export type GuideContent = z.infer<typeof guideContentSchema>;
