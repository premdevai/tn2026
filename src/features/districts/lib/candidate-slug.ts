import type { CandidateProfile } from "@/lib/schemas";

export function toCandidateSlug(candidate: CandidateProfile | string) {
  const name = typeof candidate === "string" ? candidate : candidate.name;

  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function matchesCandidateSlug(candidate: CandidateProfile, slug: string) {
  return toCandidateSlug(candidate) === slug || encodeURIComponent(candidate.name) === slug;
}
