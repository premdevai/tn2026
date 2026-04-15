import type { Booth } from "@/lib/schemas";

export type BoothListParams = {
  limit?: number;
  query?: string;
  locality?: string;
  ward?: string;
};

export interface BoothRepository {
  list(params?: BoothListParams): Promise<Booth[]>;
  findBySlug(slug: string): Promise<Booth | null>;
  listSlugs(): Promise<string[]>;
}
