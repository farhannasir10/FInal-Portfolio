"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Logo({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      aria-label="home"
      className={`group inline-flex items-center ${className ?? ""}`}
      onClick={(event) => {
        if (pathname === "/") {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <span className="relative flex size-8 items-center justify-center rounded-full border border-orange-200/70 bg-linear-to-br from-orange-50 to-white shadow-[inset_0_1px_2px_rgba(253,186,116,0.3)] transition group-hover:border-orange-300 dark:border-orange-300/25 dark:from-neutral-900 dark:to-neutral-950">
        <span className="font-display text-[15px] font-medium leading-none text-orange-400">
          F
        </span>
      </span>
    </Link>
  );
}
