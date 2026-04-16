import { emptyBooths } from "@/lib/data/empty-datasets";
import type { Booth } from "@/lib/schemas";
import type { BoothRepository } from "./booth-repository";

export function createStaticBoothRepository(): BoothRepository {
  return {
    async list(params = {}) {
      const normalizedQuery = params.query?.trim().toLowerCase();
      let booths: Booth[] = emptyBooths;

      if (normalizedQuery) {
        booths = booths.filter((booth) =>
          [booth.name, booth.locality, booth.ward, booth.address, booth.assemblyConstituency]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery)
        );
      }

      if (params.locality) {
        booths = booths.filter((booth) => booth.locality === params.locality);
      }

      if (params.ward) {
        booths = booths.filter((booth) => booth.ward === params.ward);
      }

      return typeof params.limit === "number" ? booths.slice(0, params.limit) : booths;
    },
    async findBySlug(slug) {
      return emptyBooths.find((booth) => booth.slug === slug) ?? null;
    },
    async listSlugs() {
      return emptyBooths.map((booth) => booth.slug);
    }
  };
}
