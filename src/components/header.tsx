import { ThemeToggle } from "@/components/theme-toggle";
import { Search } from "@/components/search";
import { Logo } from "@/components/logo";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background transition-colors duration-200">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-3.5 py-3 md:px-0 lg:py-4">
        <div className="flex items-center gap-3 md:gap-6">
          <Logo />
          <ul className="flex gap-3 text-[12.5px] sm:gap-5 md:gap-6 md:text-sm">
            <li>
              <Link
                href="/#projects"
                className="relative block text-neutral-500 transition-colors duration-150 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#case-studies"
                className="relative block text-neutral-500 transition-colors duration-150 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Case Studies
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Search />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
