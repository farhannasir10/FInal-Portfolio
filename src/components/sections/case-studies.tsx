import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { InsetButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-2xl px-3.5 py-8 md:px-0">
      <p className="font-display text-sm text-neutral-400">featured</p>
      <SectionHeading>case studies.</SectionHeading>

      <div className="mt-5 space-y-4">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={study.href}
            className="block rounded-xl p-3 transition hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <h3 className="font-display text-lg text-neutral-700 dark:text-neutral-200">
              {study.title}
            </h3>
            <p className="mt-1 text-xs text-neutral-400">{study.source}</p>
            <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-300">
              {study.summary}
            </p>
            <p className="mt-2 text-xs text-neutral-400">
              {study.date} · {study.readTime}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/case-studies">
          <InsetButton type="button">View All Case Studies</InsetButton>
        </Link>
      </div>
    </section>
  );
}
