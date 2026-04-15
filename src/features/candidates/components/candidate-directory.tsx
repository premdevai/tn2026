"use client";

import { EmptyState } from "@/components/shared/empty-state";
import { SearchBar } from "@/components/shared/search-bar";
import { Button } from "@/components/shared/ui/button";
import { CandidateCard } from "@/features/candidates/components/candidate-card";
import type { Candidate } from "@/lib/schemas";
import { useCandidateFilterStore } from "@/store/candidate-filter-store";

type CandidateDirectoryProps = {
  candidates: Candidate[];
};

const localities = ["All", "Adyar", "T Nagar", "Velachery", "Anna Nagar"] as const;

export function CandidateDirectory({ candidates }: CandidateDirectoryProps) {
  const locality = useCandidateFilterStore((state) => state.locality);
  const query = useCandidateFilterStore((state) => state.query);
  const setLocality = useCandidateFilterStore((state) => state.setLocality);
  const setQuery = useCandidateFilterStore((state) => state.setQuery);

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesLocality = locality === "All" || candidate.locality === locality;
    const matchesQuery =
      query.length === 0 ||
      [candidate.name, candidate.party, candidate.locality, candidate.constituency]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());

    return matchesLocality && matchesQuery;
  });

  return (
    <div className="space-y-4">
      <SearchBar placeholder="Search name, party, locality..." onSearch={setQuery} />
      <div className="flex gap-2 overflow-x-auto pb-1">
        {localities.map((option) => (
          <Button
            key={option}
            type="button"
            variant={locality === option ? "default" : "outline"}
            className="h-10 shrink-0"
            onClick={() => setLocality(option)}
          >
            {option}
          </Button>
        ))}
      </div>
      <div className="space-y-3">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))
        ) : (
          <EmptyState
            icon="groups"
            title="Candidate data is not connected yet"
            body="The candidate repository can later read official declarations through the same service contract."
          />
        )}
      </div>
    </div>
  );
}
