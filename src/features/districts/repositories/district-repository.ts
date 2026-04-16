import type { CandidateProfile, Constituency, District } from "@/lib/schemas";

export type ConstituencyRecord = {
  district: District;
  constituency: Constituency;
};

export type CandidateRecord = ConstituencyRecord & {
  candidate: CandidateProfile;
};

export interface DistrictRepository {
  list(): Promise<District[]>;
  listMobile(): Promise<District[]>;
  findBySlug(slug: string): Promise<District | null>;
  findConstituency(districtSlug: string, constituencySlug: string): Promise<ConstituencyRecord | null>;
  findCandidate(districtSlug: string, constituencySlug: string, candidateSlug: string): Promise<CandidateRecord | null>;
  listSlugs(): Promise<string[]>;
  listConstituencySlugs(): Promise<Array<{ slug: string; constituencySlug: string }>>;
  listCandidateSlugs(): Promise<Array<{ slug: string; constituencySlug: string; candidateSlug: string }>>;
}
