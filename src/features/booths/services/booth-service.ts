import type { BoothListParams, BoothRepository } from "@/features/booths/repositories/booth-repository";

export function createBoothService(repository: BoothRepository) {
  return {
    listFeaturedBooths() {
      return repository.list({ limit: 4 });
    },
    searchBooths(params: BoothListParams) {
      return repository.list(params);
    },
    getBoothBySlug(slug: string) {
      return repository.findBySlug(slug);
    },
    listBoothSlugs() {
      return repository.listSlugs();
    }
  };
}
