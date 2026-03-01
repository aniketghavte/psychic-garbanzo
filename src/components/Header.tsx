import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header({ backLink }: { backLink?: boolean }) {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--card-border)] bg-[var(--card)]/95 shadow-[var(--shadow-sm)] backdrop-blur supports-[backdrop-filter]:bg-[var(--card)]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--foreground)] transition-colors hover:text-[var(--muted)] sm:text-2xl"
        >
          StayFinder
        </Link>
        <div className="flex items-center gap-3">
          {backLink && (
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            >
              ← Back
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
