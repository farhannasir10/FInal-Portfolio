import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getAdjacentProjects,
  getProject,
  projects,
} from "@/data/projects";
import { ColoredStackIcons } from "@/components/ui/stack-icons";
import { SectionHeading } from "@/components/ui/section-heading";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} · Portfolio`,
    description: project.summary,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const galleryImages = project.images.filter((image) => image.src !== project.cover);

  return (
    <article className="mx-auto max-w-2xl px-3.5 pb-10 pt-[66px] md:px-0">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-neutral-700 dark:hover:text-neutral-200"
      >
        <ArrowLeft className="size-4" />
        Projects
      </Link>

      <h1 className="mt-6 font-display text-3xl text-neutral-700 dark:text-neutral-100 sm:text-4xl">
        {project.title}
      </h1>

      <div className="mt-4">
        <ColoredStackIcons stack={project.stack} />
      </div>

      <p className="mt-5 text-[15px] leading-7 text-neutral-500 dark:text-neutral-300">
        {project.summary}
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="relative mx-auto max-h-[280px] w-full max-w-xl">
          <Image
            src={project.cover}
            alt={project.title}
            width={1200}
            height={750}
            className="mx-auto h-auto max-h-[280px] w-full object-contain object-top"
            sizes="(max-width: 768px) 100vw, 560px"
            priority
          />
        </div>
      </div>

      {galleryImages.length > 0 && (
        <section className="mt-10">
          <SectionHeading className="text-xl">Screenshots</SectionHeading>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {galleryImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={560}
                  className="mx-auto h-auto max-h-[200px] w-full object-contain object-top"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                <figcaption className="border-t border-neutral-100 px-3 py-2 text-xs text-neutral-400 dark:border-neutral-800">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12 space-y-8">
        <div>
          <SectionHeading className="text-xl">Details</SectionHeading>
          <div className="mt-4 space-y-3 text-sm leading-7 text-neutral-500 dark:text-neutral-300">
            {project.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {project.sections.map((section) => (
          <div key={section.heading}>
            <h3 className="font-display text-base text-neutral-600 dark:text-neutral-200">
              {section.heading}
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-500 dark:text-neutral-300">
              {section.body.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <nav className="mt-14 flex items-center justify-between gap-4 border-t border-neutral-100 pt-6 dark:border-neutral-800">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group max-w-[45%] text-sm text-neutral-400 transition hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            <span className="inline-flex items-center gap-1">
              <ArrowLeft className="size-3.5" /> Previous
            </span>
            <span className="mt-1 block font-display text-neutral-700 group-hover:underline dark:text-neutral-200">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group max-w-[45%] text-right text-sm text-neutral-400 transition hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            <span className="inline-flex items-center justify-end gap-1">
              Next <ArrowRight className="size-3.5" />
            </span>
            <span className="mt-1 block font-display text-neutral-700 group-hover:underline dark:text-neutral-200">
              {next.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
