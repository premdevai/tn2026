import type { GuideRepository } from "@/features/guide/repositories/guide-repository";

export function createGuideService(repository: GuideRepository) {
  return {
    getGuideContent() {
      return repository.getContent();
    }
  };
}
