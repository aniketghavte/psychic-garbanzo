"use client";

import { useMemo, useState } from "react";
import { HOTELS, filterAndSortHotels, type SortOption } from "@/lib/hotels";
import { HotelCard } from "@/components/HotelCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import Link from "next/link";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>(null);

  const hotels = useMemo(
    () => filterAndSortHotels(HOTELS, search, sort),
    [search, sort]
  );

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="text-xl font-bold text-emerald-600 dark:text-emerald-400"
          >
            StayFinder
          </Link>
          <nav aria-label="Main">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Hotels
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <h1 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Discover Hotels
        </h1>

        <div className="mb-6 flex flex-col gap-4 sm:mb-8">
          <SearchBar value={search} onChange={setSearch} />
          <FilterBar sort={sort} onSortChange={setSort} />
        </div>

        {hotels.length === 0 ? (
          <p className="rounded-xl border border-zinc-200 bg-white p-8 text-center text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
            No hotels match your search. Try a different name or location.
          </p>
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
