"use client";

import { useEffect, useState } from "react";
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
    href: "/contact",
    shortcut: "Q",
    icon: Phone,
    keywords: "contact about cv email project discuss",
  },
];

/** Keyboard-only command palette (⌘K). No visible search bar. */
export function SearchHotkey() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered =
    query.trim() === ""
      ? navigationItems
      : navigationItems.filter((item) => {
          const q = query.trim().toLowerCase();
          return (
            item.label.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.keywords.toLowerCase().includes(q)
          );
        });

  useEffect(() => setActiveIndex(0), [query, open]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

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
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((i) => (filtered.length ? (i + 1) % filtered.length : 0));
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((i) =>
          filtered.length ? (i - 1 + filtered.length) % filtered.length : 0,
        );
      }
      if (event.key === "Enter" && filtered[activeIndex]) {
        event.preventDefault();
        setOpen(false);
        router.push(filtered[activeIndex].href);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, activeIndex, router]);

  if (!open) return null;

  return (
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
        <ul className="max-h-80 overflow-y-auto p-2">
          {filtered.map((item, index) => {
            const Icon = item.icon;
            const active = index === activeIndex;
            return (
              <li key={item.href}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => {
                    setOpen(false);
                    router.push(item.href);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                    active
                      ? "bg-neutral-100 dark:bg-neutral-800"
                      : "hover:bg-neutral-50 dark:hover:bg-neutral-900"
                  }`}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 dark:border-neutral-700">
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
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
