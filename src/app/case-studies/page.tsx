import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

export const metadata = {
  title: "Case Studies · Portfolio",
  description: "Case studies from products I've designed and shipped.",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-2xl px-3.5 pb-10 pt-[66px] md:px-0">
      <h1 className="font-display text-3xl text-neutral-700 dark:text-neutral-100">
        Case Studies.
      </h1>
      <p className="mt-2 text-sm text-neutral-400">
        Case studies from products I&apos;ve designed and shipped.
      </p>

      <div className="mt-8 space-y-4">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={study.href}
            className="block rounded-xl border border-neutral-100 p-4 transition hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            <h2 className="font-display text-lg text-neutral-800 dark:text-neutral-100">
              {study.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-300">
              {study.summary}
            </p>
            <p className="mt-3 text-xs text-neutral-400">
              {study.date} · {study.readTime}
            </p>
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="mt-8 inline-block text-sm text-neutral-400 transition hover:text-neutral-700"
      >
        ← Back home
      </Link>
    </div>
  );
}
