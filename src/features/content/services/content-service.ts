import type { ContentRepository } from "@/features/content/repositories/content-repository";

export function createContentService(repository: ContentRepository) {
  return {
    getHomeContent() {
      return repository.getHomeContent();
    },
    getAboutContent() {
      return repository.getAboutContent();
    }
  };
}
