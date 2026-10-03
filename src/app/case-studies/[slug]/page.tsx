import Link from "next/link";
import { notFound } from "next/navigation";
import { Download } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { PillButton } from "@/components/ui/button";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study" };
  return { title: `${study.title} · Portfolio`, description: study.summary };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article className="mx-auto max-w-2xl px-3.5 pb-10 pt-[66px] md:px-0">
      <Link
        href="/case-studies"
        className="inline-flex text-sm text-neutral-400 transition hover:text-neutral-700 dark:hover:text-neutral-200"
      >
        ← All case studies
      </Link>

      <p className="mt-6 text-xs font-medium uppercase tracking-wide text-neutral-400">
        {study.source}
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-neutral-800 dark:text-neutral-100">
        {study.title}
      </h1>
      <p className="mt-3 text-sm text-neutral-400">
        {study.date} · {study.readTime}
      </p>
      <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-300">
        {study.summary}
      </p>

      <div className="mt-6">
        <Link href={study.pdf} target="_blank" rel="noopener noreferrer" download>
          <PillButton className="gap-2">
            <Download className="size-4" />
            Download PDF
          </PillButton>
        </Link>
      </div>

      <dl className="mt-8 grid grid-cols-1 gap-4 rounded-xl border border-neutral-100 p-5 sm:grid-cols-2 dark:border-neutral-800">
        {study.meta.map((item) => (
          <div key={item.label}>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
              {item.label}
            </dt>
            <dd className="mt-1 text-sm font-medium text-neutral-700 dark:text-neutral-200">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 space-y-10">
        {study.sections.map((section) => (
          <section
            key={section.heading}
            className="border-t border-neutral-100 pt-8 dark:border-neutral-800"
          >
            <h2 className="font-display text-xl font-semibold text-neutral-800 dark:text-neutral-100">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-neutral-500 dark:text-neutral-300">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
