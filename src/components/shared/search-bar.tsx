"use client";

import * as React from "react";

import { MaterialIcon } from "@/components/shared/material-icon";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (query: string) => void;
  label?: string;
  className?: string;
};

export function SearchBar({
  placeholder,
  label = "Search",
  className,
  value,
  onChange,
  onSearch,
}: SearchBarProps) {
  const id = React.useId();
  const [internalValue, setInternalValue] = React.useState("");
  const currentValue = value ?? internalValue;

  function handleChange(nextValue: string) {
    if (onChange) {
      onChange(nextValue);
      return;
    }

    setInternalValue(nextValue);
  }

  function handleSearch() {
    onSearch?.(currentValue.trim());
  }

  return (
    <div className={cn("w-full", className)}>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <div className="flex min-h-12 items-center gap-2 rounded-md border border-border bg-card px-3 shadow-soft">
        <MaterialIcon className="text-[1.2rem] text-muted-foreground" name="search" />
        <input
          className="min-w-0 flex-1 bg-transparent text-base font-medium outline-none placeholder:text-muted-foreground"
          id={id}
          onChange={(event) => handleChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder={placeholder}
          type="search"
          value={currentValue}
        />
      </div>
    </div>
  );
}
