import { ThemeToggle } from "@/components/theme-toggle";
import { SearchHotkey } from "@/components/search-hotkey";
import { Logo } from "@/components/logo";
import Link from "next/link";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#experience", label: "Experience" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/cv.pdf", label: "CV", external: true },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background transition-colors duration-200">
      <div className="mx-auto flex max-w-2xl items-center gap-3 overflow-x-auto px-3.5 py-3 md:px-0 lg:py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Logo />

        <nav className="flex shrink-0 items-center gap-x-3 text-[12px] whitespace-nowrap sm:gap-x-4 sm:text-[12.5px] md:gap-x-5 md:text-sm">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-normal text-neutral-500 transition-colors duration-150 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="shrink-0 font-normal text-neutral-500 transition-colors duration-150 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <ThemeToggle />
        <SearchHotkey />
      </div>
    </header>
  );
}
