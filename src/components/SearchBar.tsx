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
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" aria-hidden>
        <SearchIcon className="h-5 w-5" />
      </span>
      <input
        id="hotel-search"
        type="search"
        role="searchbox"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--input-border)] bg-[var(--surface)] py-3.5 pl-12 pr-4 text-[var(--foreground)] placeholder-[var(--muted-foreground)] shadow-[var(--shadow-sm)] transition-all focus:border-[var(--ring)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]/20"
        aria-label="Search hotels by name or location"
      />
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}
