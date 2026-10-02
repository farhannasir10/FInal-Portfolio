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

      <p className="mt-6 text-xs uppercase tracking-wide text-neutral-400">
        {study.source}
      </p>
      <h1 className="mt-2 font-display text-3xl text-neutral-800 dark:text-neutral-100">
        {study.title}
      </h1>
      <p className="mt-3 text-sm text-neutral-400">
        {study.date} · {study.readTime}
      </p>
      <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-300">
        {study.summary}
      </p>

      <div className="mt-6">
        <Link href={study.pdf} target="_blank" rel="noopener noreferrer">
          <PillButton className="gap-2">
            <Download className="size-4" />
            Download PDF
          </PillButton>
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
        <iframe
          title={study.title}
          src={`${study.pdf}#view=FitH`}
          className="h-[75vh] w-full bg-white"
        />
      </div>
    </article>
  );
}
