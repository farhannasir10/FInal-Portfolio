"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Globe } from "lucide-react";
import { experience } from "@/data/experience";
import { MoreToggle } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="experience" className="mx-auto max-w-2xl px-3.5 py-8 md:px-0">
      <p className="font-display text-sm text-neutral-400">featured</p>
      <SectionHeading>Experience.</SectionHeading>

      <div className="mt-5 space-y-5">
        {experience.map((item) => {
          const isOpen = open === item.company;
          return (
            <div key={item.company} className="w-full">
              <div className="flex w-full items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2.5">
                  <div className="rounded-lg border border-neutral-200 p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)] dark:border-neutral-700 dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.08)]">
                    <div
                      className={`relative h-9 w-16 overflow-hidden rounded md:h-10 md:w-[4.5rem] ${
                        item.company === "Tekvill" ? "bg-neutral-950" : "bg-white dark:bg-neutral-900"
                      }`}
                    >
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        className="object-contain p-1"
                        sizes="72px"
                      />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <h3 className="font-display text-lg text-neutral-600 dark:text-neutral-300">
                        {item.company}
                      </h3>
                      {item.website ? (
                        <Link
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${item.company} website`}
                          className="text-neutral-400 transition hover:text-neutral-700 dark:hover:text-neutral-200"
                        >
                          <Globe className="size-3.5" />
                        </Link>
                      ) : null}
                    </div>
                    <p className="text-sm text-neutral-400">{item.role}</p>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col items-end gap-1">
                  <p className="text-right text-xs text-neutral-400 sm:text-sm">
                    {item.period}
                  </p>
                  <p className="text-xs text-neutral-400">({item.location})</p>
                  <MoreToggle
                    open={isOpen}
                    onClick={() => setOpen(isOpen ? null : item.company)}
                  />
                </div>
              </div>

              {isOpen && (
                <div className="mt-3 space-y-2 border-l-2 border-orange-200 pl-4 dark:border-orange-300/40">
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
