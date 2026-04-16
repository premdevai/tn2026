import { emptyCandidates } from "@/lib/data/empty-datasets";
import { candidateFiltersSchema, type Candidate } from "@/lib/schemas";
import type { CandidateRepository } from "./candidate-repository";

const fallbackFilters = candidateFiltersSchema.parse({
  localities: ["Adyar", "T Nagar", "Velachery", "Anna Nagar"]
});

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
    },
    async listFilters() {
      const localities = Array.from(new Set(emptyCandidates.map((candidate) => candidate.locality))).sort();

      return localities.length > 0 ? { localities } : fallbackFilters;
    }
  };
}
