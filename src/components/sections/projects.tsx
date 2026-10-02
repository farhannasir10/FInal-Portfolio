import Image from "next/image";
import Link from "next/link";
import { Globe, FileText, Sparkles } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { ColoredStackIcons } from "@/components/ui/stack-icons";
import { InsetButton } from "@/components/ui/button";

function GitHubMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-2xl px-3.5 py-8 md:px-0">
      <h2 className="font-display text-sm text-neutral-400">featured</h2>
      <h2 className="font-display border-b-4 border-orange-100 text-2xl text-neutral-500 dark:border-orange-200 dark:text-neutral-200">
        products.
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            className="group flex flex-col rounded-xl border border-neutral-100 bg-white p-2.5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <Link
              href={`/work/${project.slug}`}
              className="relative block aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800"
            >
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </Link>

            <div className="flex flex-1 flex-col px-1.5 pb-2 pt-3">
              <div className="flex items-start justify-between gap-2">
                <Link href={`/work/${project.slug}`}>
                  <h3 className="font-display text-lg leading-tight text-neutral-800 dark:text-neutral-100">
                    {project.shortTitle ?? project.title}
                  </h3>
                </Link>
                <div className="flex shrink-0 items-center gap-1.5 text-neutral-400">
                  <GitHubMini className="size-3.5" />
                  <Globe className="size-3.5" />
                  <FileText className="size-3.5" />
                  <Sparkles className="size-3.5" />
                </div>
              </div>

              <p className="mt-2 line-clamp-3 text-[13px] leading-5 text-neutral-500 dark:text-neutral-400">
                {project.summary}
              </p>

              <div className="mt-auto pt-3">
                <p className="mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                  Stack:
                </p>
                <ColoredStackIcons stack={project.stack} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/work/event-management-vendor-booking-system">
          <InsetButton type="button">See All Projects</InsetButton>
        </Link>
      </div>
    </section>
  );
}
