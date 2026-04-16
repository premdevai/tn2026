import { guideContent } from "@/features/guide/data/guide-data";
import type { GuideRepository } from "./guide-repository";

export function createStaticGuideRepository(): GuideRepository {
  return {
    async getContent() {
      return guideContent;
    }
  };
}
