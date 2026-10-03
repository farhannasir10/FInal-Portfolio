import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-2xl px-3.5 py-8 md:px-0">
      <SectionHeading>
        <span className="text-neutral-400">my</span> education.
      </SectionHeading>

      <div className="mt-5 space-y-4">
        {education.map((item) => (
          <div key={item.school} className="flex items-start gap-2.5">
            <div className="rounded-lg border border-neutral-200 p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] dark:border-neutral-700 dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.10)]">
              <div className="flex size-9 items-center justify-center rounded bg-neutral-100 text-xs font-semibold text-neutral-600 md:size-10 dark:bg-neutral-800 dark:text-neutral-300">
                {item.school.slice(0, 2).toUpperCase()}
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg text-neutral-600 dark:text-neutral-300">
                {item.school}
              </h3>
              <p className="text-sm text-neutral-400">{item.degree}</p>
              {item.period ? (
                <p className="mt-1 text-sm text-neutral-400">{item.period}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
