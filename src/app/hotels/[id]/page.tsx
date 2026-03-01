import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHotelById } from "@/lib/hotels";
import { BookNowButton } from "@/components/BookNowButton";

type Props = { params: Promise<{ id: string }> };

export default async function HotelDetailPage({ params }: Props) {
  const { id } = await params;
  const hotel = getHotelById(id);

  if (!hotel) {
    notFound();
  }

  const displayAmenities = hotel.amenities.slice(0, 4);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/95">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="text-xl font-bold text-emerald-600 dark:text-emerald-400"
          >
            StayFinder
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            ← Back to hotels
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
        <article>
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-700">
            <Image
              src={hotel.image}
              alt={hotel.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-0.5 rounded-md bg-black/60 px-2 py-1 text-sm font-medium text-white">
              <span aria-hidden>★</span>
              <span>{hotel.starRating} Star</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            <div>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                {hotel.name}
              </h1>
              <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                {hotel.location}
              </p>
              <p className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                ${hotel.pricePerNight}
                <span className="text-base font-normal text-zinc-500 dark:text-zinc-400">
                  {" "}
                  per night
                </span>
              </p>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300">{hotel.description}</p>

            <section aria-labelledby="amenities-heading">
              <h2 id="amenities-heading" className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Amenities
              </h2>
              <ul className="mt-2 flex flex-wrap gap-2" role="list">
                {displayAmenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="rounded-lg bg-zinc-200 px-3 py-2 text-sm font-medium text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </section>

            <div className="pt-2">
              <BookNowButton />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
