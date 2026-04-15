import { z } from "zod";

export const candidateSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  party: z.string().min(1),
  locality: z.string().min(1),
  constituency: z.string().min(1),
  ward: z.string().min(1),
  age: z.number().int().positive(),
  education: z.string().min(1),
  occupation: z.string().min(1),
  priorities: z.array(z.string().min(1)).min(1),
  disclosureStatus: z.string().min(1),
  isIncumbent: z.boolean()
});

export type Candidate = z.infer<typeof candidateSchema>;
