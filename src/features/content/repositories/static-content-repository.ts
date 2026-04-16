import { aboutContent, homeContent } from "@/features/content/data/content-data";
import type { ContentRepository } from "@/features/content/repositories/content-repository";

export function createStaticContentRepository(): ContentRepository {
  return {
    async getHomeContent() {
      return homeContent;
    },
    async getAboutContent() {
      return aboutContent;
    }
  };
}
