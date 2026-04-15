"use client";

import { create } from "zustand";
import type { CrowdReportType } from "@/lib/schemas";

type ReportDraftState = {
  selectedType: CrowdReportType | null;
  boothSlug?: string;
  setDraft: (selectedType: CrowdReportType, boothSlug?: string) => void;
};

export const useReportDraftStore = create<ReportDraftState>((set) => ({
  selectedType: null,
  boothSlug: undefined,
  setDraft: (selectedType, boothSlug) => set({ selectedType, boothSlug })
}));
