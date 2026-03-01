import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHotelById } from "@/lib/hotels";
import { BookNowButton } from "@/components/BookNowButton";
import { Header } from "@/components/Header";

type Props = { params: Promise<{ id: string }> };

export default async function HotelDetailPage({ params }: Props) {
  const { id } = await params;
  const hotel = getHotelById(id);

  if (!hotel) {
    notFound();
  }

  const displayAmenities = hotel.amenities.slice(0, 4);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header backLink />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
        <article className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow-lg)]">
          <div className="relative aspect-video w-full overflow-hidden bg-[var(--surface)]">
            <Image
              src={hotel.image}
              alt={hotel.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="rounded-lg bg-black/50 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                {hotel.location}
              </span>
              <div className="flex items-center gap-1 rounded-lg bg-black/50 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                <span aria-hidden>★</span>
                <span>{hotel.starRating} Star</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
                {hotel.name}
              </h1>
              <p className="mt-1 text-[var(--muted)]">{hotel.location}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[var(--foreground)]">
                  ${hotel.pricePerNight}
                </span>
                <span className="text-[var(--muted)]">per night</span>
              </div>
            </div>

            <p className="text-[var(--muted)] leading-relaxed">
              {hotel.description}
            </p>

            <section className="mt-8" aria-labelledby="amenities-heading">
              <h2
                id="amenities-heading"
                className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]"
              >
                Amenities
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2" role="list">
                {displayAmenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="rounded-xl border border-[var(--card-border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)]"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-8 pt-6 border-t border-[var(--card-border)]">
              <BookNowButton />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
