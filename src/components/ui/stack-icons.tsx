"use client";

import { cn } from "@/lib/utils";
import { techIconUrl } from "@/lib/tech-icons";

export function ColoredStackIcons({
  stack,
  className,
}: {
  stack: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {stack.map((tech) => {
        const icon = techIconUrl(tech);
        if (!icon) {
          return (
            <span
              key={tech}
              title={tech}
              className="flex size-7 items-center justify-center rounded-full bg-neutral-100 text-[9px] font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tech.slice(0, 2).toUpperCase()}
            </span>
          );
        }
        return (
          <span
            key={tech}
            title={tech}
            className="inline-flex size-7 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-700"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon} alt={tech} width={16} height={16} className="size-4" />
          </span>
        );
      })}
    </div>
  );
}
