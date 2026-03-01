"use client";

export function BookNowButton() {
  function handleBook() {
    if (typeof window !== "undefined") {
      window.alert("Hotel Booked Successfully!");
    }
  }

  return (
    <button
      type="button"
      onClick={handleBook}
      className="w-full rounded-xl bg-[var(--primary)] px-8 py-4 font-semibold text-[var(--primary-foreground)] shadow-[var(--shadow)] transition-all hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-lg)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:w-auto sm:min-w-[180px]"
    >
      Book Now
    </button>
  );
}
