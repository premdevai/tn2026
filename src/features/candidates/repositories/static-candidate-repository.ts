import { emptyCandidates } from "@/lib/data/empty-datasets";
import type { Candidate } from "@/lib/schemas";
import type { CandidateRepository } from "./candidate-repository";

export function createStaticCandidateRepository(): CandidateRepository {
  return {
    async list(params = {}) {
      let candidates: Candidate[] = emptyCandidates;
      const query = params.query?.trim().toLowerCase();

      if (params.locality) {
        candidates = candidates.filter((candidate) => candidate.locality === params.locality);
      }

      if (query) {
        candidates = candidates.filter((candidate) =>
          [candidate.name, candidate.party, candidate.locality, candidate.constituency]
            .join(" ")
            .toLowerCase()
            .includes(query)
        );
      }

      return candidates;
    }
  };
}
