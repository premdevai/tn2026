import type { ChecklistItem } from "@/lib/schemas";

export interface ChecklistRepository {
  list(): Promise<ChecklistItem[]>;
}
