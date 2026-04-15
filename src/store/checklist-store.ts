"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type ChecklistState = {
  completedIds: string[];
  toggle: (id: string) => void;
  reset: () => void;
};

export const useChecklistStore = create<ChecklistState>()(
  persist(
    (set) => ({
      completedIds: [],
      toggle: (id) =>
        set((state) => ({
          completedIds: state.completedIds.includes(id)
            ? state.completedIds.filter((completedId) => completedId !== id)
            : [...state.completedIds, id]
        })),
      reset: () => set({ completedIds: [] })
    }),
    {
      name: "vote-smart-tn-checklist"
    }
  )
);
