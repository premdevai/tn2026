import { z } from "zod";

export const recommendationSchema = z.object({
  id: z.string().min(1),
  boothSlug: z.string().min(1).nullable(),
  title: z.string().min(1),
  summary: z.string().min(1),
  priority: z.enum(["low", "medium", "high"]),
  locality: z.string().min(1),
  icon: z.string().min(1)
});

export type Recommendation = z.infer<typeof recommendationSchema>;
