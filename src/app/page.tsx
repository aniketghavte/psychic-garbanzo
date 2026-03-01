"use client";

import { useMemo, useState } from "react";
import { HOTELS, filterAndSortHotels, type SortOption } from "@/lib/hotels";
import { HotelCard } from "@/components/HotelCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { Header } from "@/components/Header";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>(null);

  const hotels = useMemo(
    () => filterAndSortHotels(HOTELS, search, sort),
    [search, sort]
  );

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
            Discover
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Find your perfect stay
          </h1>
          <p className="mt-2 text-[var(--muted)]">
            Search by name or location, then filter by price or rating.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-5 sm:mb-10">
          <SearchBar value={search} onChange={setSearch} />
          <FilterBar sort={sort} onSortChange={setSort} />
        </div>

        {hotels.length === 0 ? (
          <div className="rounded-[var(--radius-xl)] border border-[var(--card-border)] bg-[var(--card)] p-10 text-center shadow-[var(--shadow-sm)]">
            <p className="text-[var(--muted)]">
              No hotels match your search. Try a different name or location.
            </p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel) => (
              <li key={hotel.id}>
                <HotelCard hotel={hotel} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
