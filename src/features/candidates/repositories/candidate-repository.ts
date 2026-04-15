import type { Candidate } from "@/lib/schemas";

export type CandidateListParams = {
  locality?: string;
  query?: string;
};

export interface CandidateRepository {
  list(params?: CandidateListParams): Promise<Candidate[]>;
}
