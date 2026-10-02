"use client";

import { useState } from "react";
import { coreTech, techCategories } from "@/data/tech";
import { MoreToggle, TechChip } from "@/components/ui/button";

export function TechStack() {
  const [expanded, setExpanded] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const visibleCore = expanded ? coreTech : coreTech.slice(0, 8);

  return (
    <section id="tech" className="mx-auto max-w-2xl px-3.5 py-8 md:px-0">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-xl text-neutral-500 dark:text-neutral-200 md:text-2xl">
          my tech stack.
        </h2>
        <MoreToggle
          open={expanded}
          onClick={() => {
            setExpanded((v) => !v);
            if (expanded) setOpenCategory(null);
          }}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2.5 text-neutral-500 md:gap-3.5 dark:text-neutral-300">
        {visibleCore.map((item) => (
          <TechChip key={item.name} name={item.name} />
        ))}
      </div>

      {expanded && (
        <div className="mt-6 space-y-1">
          {techCategories.map((category) => {
            const isOpen = openCategory === category.name;
            return (
              <div
                key={category.name}
                className="rounded-xl border border-neutral-100 dark:border-neutral-800"
              >
                <div className="flex w-full items-center justify-between px-3 py-3">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenCategory(isOpen ? null : category.name)
                    }
                    className="font-display text-left text-base text-neutral-600 dark:text-neutral-300"
                  >
                    {category.name}
                  </button>
                  <MoreToggle
                    open={isOpen}
                    onClick={() =>
                      setOpenCategory(isOpen ? null : category.name)
                    }
                  />
                </div>
                {isOpen && (
                  <div className="flex flex-wrap gap-2.5 px-3 pb-4 md:gap-3.5">
                    {category.items.map((item) => (
                      <TechChip
                        key={`${category.name}-${item.name}`}
                        name={item.name}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
