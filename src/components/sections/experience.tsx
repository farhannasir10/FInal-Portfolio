"use client";

import { useState } from "react";
import { experience } from "@/data/experience";
import { MoreToggle } from "@/components/ui/button";

export function Experience() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="experience" className="mx-auto max-w-2xl px-3.5 py-8 md:px-0">
      <div className="flex items-end gap-2">
        <h2 className="font-display text-sm text-neutral-400 dark:text-neutral-400">
          featured
        </h2>
      </div>
      <h2 className="font-display border-b-4 border-orange-100 text-2xl text-neutral-500 dark:border-orange-200 dark:text-neutral-200">
        experience.
      </h2>

      <div className="mt-5 space-y-5">
        {experience.map((item) => {
          const isOpen = open === item.company;
          const initials = item.company.slice(0, 2).toUpperCase();
          return (
            <div key={item.company} className="w-full">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-lg border border-neutral-200 p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] dark:border-neutral-700 dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.10)]">
                    <div className="flex size-9 items-center justify-center rounded bg-neutral-100 text-xs font-semibold text-neutral-600 md:size-10 dark:bg-neutral-800 dark:text-neutral-300">
                      {initials}
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-display text-lg text-neutral-600 dark:text-neutral-300">
                      {item.company}
                    </h3>
                    <p className="text-sm text-neutral-400">{item.role}</p>
                  </div>
                </div>
                <MoreToggle
                  open={isOpen}
                  onClick={() => setOpen(isOpen ? null : item.company)}
                />
              </div>

              {isOpen && (
                <div className="mt-3 space-y-2 border-l-2 border-orange-100 pl-4 dark:border-orange-200/40">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {item.period} · {item.location}
                  </p>
                  <ul className="space-y-2 text-sm leading-6 text-neutral-500 dark:text-neutral-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
