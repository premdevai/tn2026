import { districts } from "@/features/districts/data/district-data";
import { matchesCandidateSlug, toCandidateSlug } from "@/features/districts/lib/candidate-slug";
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
    async findCandidate(districtSlug, constituencySlug, candidateSlug) {
      const district = districtRecords.find((item) => item.slug === districtSlug);
      const constituency = district?.constituenciesList.find((item) => item.slug === constituencySlug);
      const candidate = constituency?.candidates.find((item) => matchesCandidateSlug(item, candidateSlug));

      return district && constituency && candidate ? { district, constituency, candidate } : null;
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
    },
    async listCandidateSlugs() {
      return districtRecords.flatMap((district) =>
        district.constituenciesList.flatMap((constituency) =>
          constituency.candidates.map((candidate) => ({
            slug: district.slug,
            constituencySlug: constituency.slug,
            candidateSlug: toCandidateSlug(candidate)
          }))
        )
      );
    }
  };
}
