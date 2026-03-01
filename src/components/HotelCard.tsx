import Image from "next/image";
import Link from "next/link";
import type { Hotel } from "@/lib/hotels";

export function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <Link
      href={`/hotels/${hotel.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-700">
        <Image
          src={hotel.thumbnail}
          alt={hotel.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute right-2 top-2 flex items-center gap-0.5 rounded-md bg-black/60 px-2 py-1 text-sm font-medium text-white">
          <span aria-hidden>★</span>
          <span>{hotel.starRating}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
          {hotel.name}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{hotel.city}</p>
        <p className="mt-auto pt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          ${hotel.pricePerNight}
          <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
            {" "}
            / night
          </span>
        </p>
      </div>
    </Link>
  );
}
