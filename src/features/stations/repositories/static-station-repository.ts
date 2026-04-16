import { stationPageContent } from "@/features/stations/data/station-data";
import type { StationRepository } from "./station-repository";

export function createStaticStationRepository(): StationRepository {
  return {
    async getPageContent() {
      return stationPageContent;
    },
    async search(params = {}) {
      const query = params.query?.trim().toLowerCase();

      if (!query) {
        return [stationPageContent.defaultStation];
      }

      return [stationPageContent.defaultStation].filter((station) =>
        [station.name, station.address, ...station.nearbyStations].join(" ").toLowerCase().includes(query)
      );
    }
  };
}
