import type { DistrictRepository } from "@/features/districts/repositories/district-repository";

export function createDistrictService(repository: DistrictRepository) {
  return {
    listDistricts() {
      return repository.list();
    },
    listMobileDistricts() {
      return repository.listMobile();
    },
    getDistrictBySlug(slug: string) {
      return repository.findBySlug(slug);
    },
    getConstituencyBySlug(districtSlug: string, constituencySlug: string) {
      return repository.findConstituency(districtSlug, constituencySlug);
    },
    listDistrictSlugs() {
      return repository.listSlugs();
    },
    listConstituencySlugs() {
      return repository.listConstituencySlugs();
    }
  };
}
