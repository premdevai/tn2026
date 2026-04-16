import { z } from "zod";

export const candidateProfileSchema = z.object({
  name: z.string().min(1),
  party: z.string().min(1),
  mobileParty: z.string().min(1).optional(),
  symbolIcon: z.string().min(1),
  mobileImage: z.string().min(1),
  desktopImage: z.string().min(1),
  imageAlt: z.string().min(1),
  mobileEducation: z.string().min(1),
  mobileAssets: z.string().min(1),
  desktopEducation: z.string().min(1),
  desktopAssets: z.string().min(1),
  accent: z.enum(["primary", "tertiary"])
});

export const boothStatusSchema = z.object({
  name: z.string().min(1),
  detail: z.string().min(1),
  icon: z.string().min(1),
  tone: z.enum(["low", "medium", "high"]),
  waitLabel: z.string().min(1),
  actionLabel: z.string().min(1).optional()
});

export const constituencySchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  division: z.string().min(1),
  tag: z.string().min(1),
  tagTone: z.enum(["official", "bellwether"]),
  turnout: z.string().min(1),
  status: z.string().min(1),
  assemblyNumber: z.string().min(1),
  thumbnail: z.string().min(1),
  thumbnailAlt: z.string().min(1),
  mapMobile: z.string().min(1),
  mapDesktop: z.string().min(1),
  assignedStation: z.string().min(1),
  booths: z.array(boothStatusSchema),
  mobileBooths: z.array(boothStatusSchema).optional(),
  desktopBooths: z.array(boothStatusSchema).optional(),
  candidates: z.array(candidateProfileSchema)
});

export const districtSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  region: z.string().min(1),
  icon: z.string().min(1),
  mobileTagline: z.string().min(1),
  constituencies: z.string().min(1),
  mobileVoters: z.string().min(1),
  desktopVoters: z.string().min(1),
  registeredVotersLong: z.string().min(1),
  totalSeats: z.string().min(1),
  turnout: z.string().min(1),
  registrationStatus: z.string().min(1),
  lastUpdate: z.string().min(1),
  mobileImage: z.string().min(1),
  desktopImage: z.string().min(1),
  detailHeroImage: z.string().min(1),
  mobileAlt: z.string().min(1),
  desktopAlt: z.string().min(1),
  detailHeroAlt: z.string().min(1),
  featured: z.boolean().optional(),
  badge: z.string().min(1).optional(),
  showOnMobile: z.boolean().optional(),
  overviewText: z.string().min(1),
  constituenciesList: z.array(constituencySchema)
});

export type CandidateProfile = z.infer<typeof candidateProfileSchema>;
export type BoothStatus = z.infer<typeof boothStatusSchema>;
export type Constituency = z.infer<typeof constituencySchema>;
export type District = z.infer<typeof districtSchema>;
