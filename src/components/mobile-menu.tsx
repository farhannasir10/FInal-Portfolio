"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/case-studies", label: "All Case Studies" },
  { href: "/contact", label: "Contact" },
  { href: "/#about", label: "About" },
  { href: "/cv.pdf", label: "Download CV", external: true },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-8 items-center justify-center rounded-full text-neutral-400 transition hover:text-neutral-700 dark:hover:text-neutral-200"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-neutral-200 bg-white py-2 shadow-xl dark:border-neutral-700 dark:bg-neutral-950">
            <p className="px-3.5 pb-1.5 pt-1 text-[11px] font-medium uppercase tracking-wide text-neutral-400">
              Menu
            </p>
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block px-3.5 py-2.5 text-sm text-neutral-700 transition hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-neutral-900"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3.5 py-2.5 text-sm text-neutral-700 transition hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-neutral-900"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </>
      )}
    </div>
  );
}
