import type { AboutContent, HomeContent } from "@/lib/schemas";

export interface ContentRepository {
  getHomeContent(): Promise<HomeContent>;
  getAboutContent(): Promise<AboutContent>;
}
