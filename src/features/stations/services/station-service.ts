import type { StationRepository } from "@/features/stations/repositories/station-repository";

export function createStationService(repository: StationRepository) {
  return {
    getStationPageContent() {
      return repository.getPageContent();
    }
  };
}
