import type { GuideContent } from "@/lib/schemas";

export interface GuideRepository {
  getContent(): Promise<GuideContent>;
}
