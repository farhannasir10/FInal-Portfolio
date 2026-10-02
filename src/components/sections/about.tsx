import Link from "next/link";
import { Download } from "lucide-react";
import { site } from "@/data/site";
import { PillButton } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-2xl px-3.5 py-8 md:px-0">
      <h2 className="font-display border-b-4 border-orange-100 text-2xl text-neutral-500 dark:border-orange-200 dark:text-neutral-200">
        about me.
      </h2>
      <p className="mt-2 text-sm text-neutral-400">{site.about.subtitle}</p>

      <div className="mt-5 rounded-xl border border-neutral-100 p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="font-display text-lg text-neutral-600 dark:text-neutral-200">
          {site.about.title}
        </h3>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {site.about.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-neutral-50 px-3 py-3 text-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] dark:bg-neutral-800 dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.06)]"
            >
              <p className="font-display text-xl text-neutral-700 dark:text-neutral-100">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-3 text-sm leading-7 text-neutral-500 dark:text-neutral-300">
          {site.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-6">
          <Link href={site.cvPath} target="_blank" rel="noopener noreferrer">
            <PillButton className="gap-2">
              <Download className="size-4" />
              Download CV
            </PillButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
