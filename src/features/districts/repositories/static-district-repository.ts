import { districts } from "@/features/districts/data/district-data";
import { districtSchema } from "@/lib/schemas";
import type { DistrictRepository } from "./district-repository";

const districtRecords = districtSchema.array().parse(districts);

export function createStaticDistrictRepository(): DistrictRepository {
  return {
    async list() {
      return districtRecords;
    },
    async listMobile() {
      return districtRecords.filter((district) => district.showOnMobile);
    },
    async findBySlug(slug) {
      return districtRecords.find((district) => district.slug === slug) ?? null;
    },
    async findConstituency(districtSlug, constituencySlug) {
      const district = districtRecords.find((item) => item.slug === districtSlug);
      const constituency = district?.constituenciesList.find((item) => item.slug === constituencySlug);

      return district && constituency ? { district, constituency } : null;
    },
    async listSlugs() {
      return districtRecords.map((district) => district.slug);
    },
    async listConstituencySlugs() {
      return districtRecords.flatMap((district) =>
        district.constituenciesList.map((constituency) => ({
          slug: district.slug,
          constituencySlug: constituency.slug
        }))
      );
    }
  };
}
