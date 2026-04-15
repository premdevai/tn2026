import type {
  CandidateListParams,
  CandidateRepository
} from "@/features/candidates/repositories/candidate-repository";

export function createCandidateService(repository: CandidateRepository) {
  return {
    listCandidates(params?: CandidateListParams) {
      return repository.list(params);
    }
  };
}
