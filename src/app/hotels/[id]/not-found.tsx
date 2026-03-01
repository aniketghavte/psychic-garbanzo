import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[var(--background)] px-4">
      <h1 className="text-2xl font-bold text-[var(--foreground)]">
        Hotel not found
      </h1>
      <p className="text-center text-[var(--muted)]">
        The hotel you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-[var(--primary)] px-5 py-2.5 font-medium text-[var(--primary-foreground)] transition-colors hover:bg-[var(--primary-hover)]"
      >
        Back to hotels
      </Link>
    </div>
  );
}
