"use client";

import { create } from "zustand";

type CandidateFilterState = {
  locality: string;
  query: string;
  setLocality: (locality: string) => void;
  setQuery: (query: string) => void;
};

export const useCandidateFilterStore = create<CandidateFilterState>((set) => ({
  locality: "All",
  query: "",
  setLocality: (locality) => set({ locality }),
  setQuery: (query) => set({ query })
}));
