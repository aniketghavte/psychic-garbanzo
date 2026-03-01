"use client";

export function SearchBar({
  value,
  onChange,
  placeholder = "Search by name or location...",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative w-full">
      <label htmlFor="hotel-search" className="sr-only">
        Search hotels by name or location
      </label>
      <input
        id="hotel-search"
        type="search"
        role="searchbox"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-zinc-300 bg-white py-3 pl-4 pr-10 text-zinc-900 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
        aria-label="Search hotels by name or location"
      />
      <span
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
        aria-hidden
      >
        🔍
      </span>
    </div>
  );
}
