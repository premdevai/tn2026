import type { Station, StationPageContent } from "@/lib/schemas";

export type StationSearchParams = {
  lat?: number;
  lng?: number;
  query?: string;
};

export interface StationRepository {
  getPageContent(): Promise<StationPageContent>;
  search(params?: StationSearchParams): Promise<Station[]>;
}
