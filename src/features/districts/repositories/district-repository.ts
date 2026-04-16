import type { Constituency, District } from "@/lib/schemas";

export type ConstituencyRecord = {
  district: District;
  constituency: Constituency;
};

export interface DistrictRepository {
  list(): Promise<District[]>;
  listMobile(): Promise<District[]>;
  findBySlug(slug: string): Promise<District | null>;
  findConstituency(districtSlug: string, constituencySlug: string): Promise<ConstituencyRecord | null>;
  listSlugs(): Promise<string[]>;
  listConstituencySlugs(): Promise<Array<{ slug: string; constituencySlug: string }>>;
}
