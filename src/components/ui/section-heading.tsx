import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display inline-block w-fit border-b-[3px] border-orange-200 pb-0.5 text-2xl text-neutral-500 dark:border-orange-300/70 dark:text-neutral-200",
        className,
      )}
    >
      {children}
    </h2>
  );
}
