import { z } from "zod";

export const stationFacilitySchema = z.object({
  icon: z.string().min(1),
  label: z.string().min(1),
  detail: z.string().min(1)
});

export const stationCandidateSchema = z.object({
  name: z.string().min(1),
  party: z.string().min(1),
  image: z.string().min(1),
  imageAlt: z.string().min(1)
});

export const stationSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  address: z.string().min(1),
  statusLabel: z.string().min(1),
  waitLabel: z.string().min(1),
  waitMinutes: z.number().int().nonnegative(),
  trafficLabel: z.string().min(1),
  heroImage: z.string().min(1),
  mobileHeroImage: z.string().min(1),
  mapImage: z.string().min(1),
  facilities: z.array(stationFacilitySchema),
  candidates: z.array(stationCandidateSchema),
  nearbyStations: z.array(z.string().min(1))
});

export const stationLandingContentSchema = z.object({
  heroImage: z.string().min(1),
  mobileHeroImage: z.string().min(1),
  benefits: z.array(
    z.object({
      icon: z.string().min(1),
      title: z.string().min(1),
      description: z.string().min(1)
    })
  )
});

export const stationPageContentSchema = z.object({
  landing: stationLandingContentSchema,
  defaultStation: stationSchema
});

export type StationFacility = z.infer<typeof stationFacilitySchema>;
export type StationCandidate = z.infer<typeof stationCandidateSchema>;
export type Station = z.infer<typeof stationSchema>;
export type StationLandingContent = z.infer<typeof stationLandingContentSchema>;
export type StationPageContent = z.infer<typeof stationPageContentSchema>;
