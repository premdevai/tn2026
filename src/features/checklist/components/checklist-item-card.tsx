"use client";

import { LucideIcon } from "@/components/shared/lucide-icon";
import { Card, CardContent } from "@/components/shared/ui/card";
import type { ChecklistItem } from "@/lib/schemas";
import { cn } from "@/lib/utils/cn";
import { useChecklistStore } from "@/store/checklist-store";

type ChecklistItemCardProps = {
  item: ChecklistItem;
};

export function ChecklistItemCard({ item }: ChecklistItemCardProps) {
  const completed = useChecklistStore((state) => state.completedIds.includes(item.id));
  const toggle = useChecklistStore((state) => state.toggle);

  return (
    <Card className={cn("shadow-sm", completed && "border-primary/40 bg-primary/5")}>
      <CardContent className="flex gap-3 p-4">
        <button
          type="button"
          onClick={() => toggle(item.id)}
          className={cn(
            "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-muted-foreground",
            completed && "border-primary bg-primary text-primary-foreground"
          )}
          aria-pressed={completed}
          aria-label={`Mark ${item.title} complete`}
        >
          <LucideIcon name={completed ? "check" : "circle"} className="text-[18px]" />
        </button>
        <div className="min-w-0 space-y-1">
          <p className={cn("font-bold leading-snug", completed && "text-muted-foreground line-through")}>
            {item.title}
          </p>
          <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
          <p className="text-xs font-semibold uppercase text-primary">{item.dueWhen}</p>
        </div>
      </CardContent>
    </Card>
  );
}
