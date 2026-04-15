import { z } from "zod";

export const checklistCategorySchema = z.enum(["document", "route", "personal", "rule"]);

export const checklistItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  category: checklistCategorySchema,
  dueWhen: z.string().min(1),
  order: z.number().int().positive()
});

export type ChecklistCategory = z.infer<typeof checklistCategorySchema>;
export type ChecklistItem = z.infer<typeof checklistItemSchema>;
