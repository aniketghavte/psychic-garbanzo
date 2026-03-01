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
      className="w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500 dark:hover:bg-emerald-600 sm:w-auto"
    >
      Book Now
    </button>
  );
}
