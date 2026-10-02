import { cn } from "@/lib/utils";

/** Matches Mrityunjay inset chip / CTA style */
export function InsetButton({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-1 rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)] transition hover:cursor-pointer dark:border-neutral-700 dark:text-neutral-200 dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.08)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/** Matches Get in touch ghost pill */
export function PillButton({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "relative inline-flex h-9 items-center justify-center rounded-full border border-neutral-200 bg-transparent px-4 py-2 text-sm font-medium text-foreground shadow transition-transform duration-100 hover:cursor-pointer hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/** Tech stack more/less text control */
export function MoreToggle({
  open,
  onClick,
  className,
}: {
  open: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inter flex cursor-pointer items-center gap-0.5 text-xs text-neutral-400 transition hover:text-neutral-700 dark:hover:text-neutral-300",
        className,
      )}
    >
      {open ? "less" : "more"}
      <span
        className={cn(
          "inline-flex transition-transform duration-300",
          open && "rotate-180",
        )}
      >
        <svg
          fill="none"
          height="12"
          width="12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </button>
  );
}

export function TechChip({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-1 rounded-md border border-dashed border-neutral-300 px-1.5 py-[4px] text-[12.5px] font-medium text-neutral-500 shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-500 hover:scale-[1.02] hover:cursor-pointer md:py-[5px] md:text-sm dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-300 dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)]">
      <span className="flex size-[18px] items-center justify-center rounded bg-neutral-100 text-[9px] font-semibold uppercase text-neutral-500 dark:bg-neutral-800">
        {name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2)}
      </span>
      {name}
    </div>
  );
}
