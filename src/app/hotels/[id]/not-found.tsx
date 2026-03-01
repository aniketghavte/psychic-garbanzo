import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 px-4 dark:bg-zinc-900">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Hotel not found
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        The hotel you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
      >
        Back to hotels
      </Link>
    </div>
  );
}
