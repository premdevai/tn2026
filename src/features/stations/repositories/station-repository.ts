import type { StationPageContent } from "@/lib/schemas";

export interface StationRepository {
  getPageContent(): Promise<StationPageContent>;
}
