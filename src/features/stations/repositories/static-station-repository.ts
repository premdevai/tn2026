import { stationPageContent } from "@/features/stations/data/station-data";
import type { StationRepository } from "./station-repository";

export function createStaticStationRepository(): StationRepository {
  return {
    async getPageContent() {
      return stationPageContent;
    }
  };
}
