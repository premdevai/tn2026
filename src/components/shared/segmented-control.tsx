"use client";

import { Button } from "@/components/shared/ui/button";
import { cn } from "@/lib/utils/cn";

export type SegmentedControlItem = {
  label: string;
  value: string;
};

type SegmentedControlProps = {
  items: SegmentedControlItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export function SegmentedControl({ className, items, onChange, value }: SegmentedControlProps) {
  return (
    <div className={cn("inline-flex rounded-lg bg-surface-container p-1", className)}>
      {items.map((item) => (
        <Button
          className={cn(value === item.value && "bg-surface-container-lowest shadow-sm")}
          key={item.value}
          onClick={() => onChange(item.value)}
          size="sm"
          type="button"
          variant={value === item.value ? "ghost" : "subtle"}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
}
