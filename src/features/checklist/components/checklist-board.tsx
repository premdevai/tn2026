"use client";

import { EmptyState } from "@/components/shared/empty-state";
import { ChecklistItemCard } from "@/features/checklist/components/checklist-item-card";
import type { ChecklistItem } from "@/lib/schemas";
import { useChecklistStore } from "@/store/checklist-store";

type ChecklistBoardProps = {
  items: ChecklistItem[];
};

export function ChecklistBoard({ items }: ChecklistBoardProps) {
  const completedIds = useChecklistStore((state) => state.completedIds);
  const reset = useChecklistStore((state) => state.reset);
  const completedCount = items.filter((item) => completedIds.includes(item.id)).length;
  const progress = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  if (items.length === 0) {
    return (
      <EmptyState
        icon="fact_check"
        title="Checklist content is not connected yet"
        body="The checklist repository is in place and can be filled from official guidance or a CMS later."
      />
    );
  }

  return (
    <div className="space-y-4">
      <section className="rounded-lg border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Progress</p>
            <p className="text-2xl font-bold">
              {completedCount}/{items.length} ready
            </p>
          </div>
          <button type="button" onClick={reset} className="text-sm font-semibold text-primary">
            Reset
          </button>
        </div>
        <div className="mt-4 h-2 rounded-full bg-muted">
          <div className="h-2 rounded-full bg-primary" style={{ width: `${progress}%` }} />
        </div>
      </section>

      <div className="space-y-3">
        {items.map((item) => (
          <ChecklistItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
