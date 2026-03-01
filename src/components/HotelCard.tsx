import Image from "next/image";
import Link from "next/link";
import type { Hotel } from "@/lib/hotels";

export function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <Link
      href={`/hotels/${hotel.id}`}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] transition-all duration-300 hover:border-[var(--muted)]/50 hover:shadow-[var(--shadow-xl)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--surface)]">
        <Image
          src={hotel.thumbnail}
          alt={hotel.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm">
            {hotel.city}
          </span>
          <div className="flex items-center gap-1 rounded-lg bg-black/60 px-2.5 py-1 text-sm font-medium text-white backdrop-blur-sm">
            <span aria-hidden>★</span>
            <span>{hotel.starRating}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="font-semibold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--muted)]">
          {hotel.name}
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">{hotel.city}</p>
        <div className="mt-4 flex items-baseline gap-1 border-t border-[var(--card-border)] pt-4">
          <span className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
            ${hotel.pricePerNight}
          </span>
          <span className="text-sm text-[var(--muted)]">/ night</span>
        </div>
      </div>
    </Link>
  );
}
