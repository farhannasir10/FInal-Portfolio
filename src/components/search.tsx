"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search as SearchIcon,
  X,
  Home,
  FolderKanban,
  PenLine,
  Phone,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  label: string;
  description: string;
  href: string;
  shortcut: string;
  icon: LucideIcon;
  keywords: string;
};

const navigationItems: NavItem[] = [
  {
    label: "Go to Home",
    description: "Navigate to Home Page",
    href: "/",
    shortcut: "H",
    icon: Home,
    keywords: "home portfolio",
  },
  {
    label: "Go to Projects",
    description: "View my projects",
    href: "/#projects",
    shortcut: "P",
    icon: FolderKanban,
    keywords: "projects products work",
  },
  {
    label: "Go to Case Studies",
    description: "Read my case studies",
    href: "/case-studies",
    shortcut: "C",
    icon: PenLine,
    keywords: "blogs writing case studies",
  },
  {
    label: "Go to Contact",
    description: "Get in touch",
    href: "/#about",
    shortcut: "Q",
    icon: Phone,
    keywords: "contact about cv email",
  },
];

export function Search() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return navigationItems;
    return navigationItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
        return;
      }

      if (!open) return;

      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((index) =>
          filtered.length === 0 ? 0 : (index + 1) % filtered.length,
        );
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((index) =>
          filtered.length === 0
            ? 0
            : (index - 1 + filtered.length) % filtered.length,
        );
        return;
      }

      if (event.key === "Enter" && filtered[activeIndex]) {
        event.preventDefault();
        go(filtered[activeIndex].href);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, activeIndex, router]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-2xl border-none bg-transparent px-3 py-2 text-sm font-normal text-neutral-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] dark:text-neutral-300 dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)]"
      >
        <SearchIcon className="size-3.5" />
        <span className="mr-0 hidden sm:inline md:mr-5">Search</span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-neutral-200 bg-neutral-100 px-1.5 font-mono text-[10px] font-medium text-neutral-500 opacity-100 sm:inline-flex dark:border-neutral-700 dark:bg-neutral-800">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-100 flex items-start justify-center bg-black/50 px-4 pt-[18vh]"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-700 dark:bg-neutral-950"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-neutral-100 px-4 py-3.5 dark:border-neutral-800">
              <SearchIcon className="size-4 shrink-0 text-neutral-400" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-400 dark:text-neutral-100"
              />
              <button
                type="button"
                aria-label="Close search"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="px-3 py-8 text-center text-sm text-neutral-400">
                  No results found.
                </p>
              ) : (
                <>
                  <p className="px-3 pb-1 pt-2 text-xs font-medium text-neutral-400">
                    Navigation
                  </p>
                  <ul>
                    {filtered.map((item, index) => {
                      const Icon = item.icon;
                      const active = index === activeIndex;
                      return (
                        <li key={item.href}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveIndex(index)}
                            onClick={() => go(item.href)}
                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                              active
                                ? "bg-neutral-100 dark:bg-neutral-800"
                                : "hover:bg-neutral-50 dark:hover:bg-neutral-900"
                            }`}
                          >
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 dark:border-neutral-700 dark:text-neutral-300">
                              <Icon className="size-4" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-medium text-neutral-800 dark:text-neutral-100">
                                {item.label}
                              </span>
                              <span className="block text-xs text-neutral-400">
                                {item.description}
                              </span>
                            </span>
                            <kbd className="shrink-0 rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-mono text-[10px] text-neutral-400 dark:border-neutral-700 dark:bg-neutral-900">
                              ⌘ {item.shortcut}
                            </kbd>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
