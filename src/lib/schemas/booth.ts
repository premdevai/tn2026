import { z } from "zod";

export const crowdLevelSchema = z.enum(["light", "steady", "busy"]);

export const boothSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  ward: z.string().min(1),
  wardNumber: z.number().int().positive(),
  locality: z.string().min(1),
  district: z.string().min(1),
  address: z.string().min(1),
  assemblyConstituency: z.string().min(1),
  parliamentaryConstituency: z.string().min(1),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number()
  }),
  crowdLevel: crowdLevelSchema,
  queueMinutes: z.number().int().nonnegative(),
  distanceMeters: z.number().int().nonnegative(),
  lastUpdatedAt: z.string().datetime(),
  facilities: z.object({
    wheelchair: z.boolean(),
    drinkingWater: z.boolean(),
    parking: z.boolean(),
    shadedQueue: z.boolean()
  }),
  tags: z.array(z.string().min(1))
});

export type CrowdLevel = z.infer<typeof crowdLevelSchema>;
export type Booth = z.infer<typeof boothSchema>;
