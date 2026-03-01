"use client";

import type { SortOption } from "@/lib/hotels";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: null, label: "All" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating-desc", label: "Star Rating" },
];

export function FilterBar({
  sort,
  onSortChange,
}: {
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
        Sort:
      </span>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Sort hotels">
        {SORT_OPTIONS.map((opt) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => onSortChange(opt.value)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              sort === opt.value
                ? "bg-emerald-600 text-white dark:bg-emerald-500"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
