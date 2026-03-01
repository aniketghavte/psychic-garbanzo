"use client";

import type { SortOption } from "@/lib/hotels";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: null, label: "All" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "rating-desc", label: "Top rated" },
];

export function FilterBar({
  sort,
  onSortChange,
}: {
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-[var(--muted)]">Sort by</span>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Sort hotels">
        {SORT_OPTIONS.map((opt) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => onSortChange(opt.value)}
            className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
              sort === opt.value
                ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--shadow)]"
                : "border border-[var(--card-border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--muted)]/50 hover:shadow-[var(--shadow-sm)]"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
