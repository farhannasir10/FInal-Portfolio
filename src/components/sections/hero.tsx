import Image from "next/image";
import Link from "next/link";
import { MousePointer2 } from "lucide-react";
import { site } from "@/data/site";
import { PillButton } from "@/components/ui/button";

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display rounded-md px-1.5 font-semibold text-neutral-500 shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] dark:bg-neutral-900 dark:text-neutral-200 dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.12)]">
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-2xl px-4 md:px-0">
      <div className="my-10 mt-[76px] flex w-full flex-col items-stretch justify-between gap-6 rounded-xl border border-neutral-200/80 p-5 shadow-none sm:max-w-xl md:max-w-2xl md:flex-row md:items-end md:p-10 md:px-14 md:shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex flex-1 flex-col justify-center">
          <div className="text-xl sm:text-2xl md:text-3xl">
            <div className="font-[family-name:var(--font-inter)]">Hi there,</div>
            <div className="flex items-center gap-1 font-[family-name:var(--font-inter)]">
              I&apos;m{" "}
              <span className="font-display font-medium text-orange-300">
                {site.firstName}.
              </span>
            </div>
            <div className="font-[family-name:var(--font-inter)] text-[12px] text-neutral-400 sm:text-base md:text-lg md:whitespace-nowrap">
              I&apos;m an {site.role}.
            </div>
          </div>

          <div className="mt-2 md:mt-2">
            <Link href="/contact">
              <PillButton className="origin-left scale-90 sm:scale-95 md:scale-100">
                Get in touch
                <MousePointer2 className="ml-1 size-4" />
              </PillButton>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-40 shrink-0 overflow-hidden rounded-xl bg-white sm:w-48 md:mx-0 md:w-56 dark:bg-neutral-900">
          <Image
            src="/projects/covers/avatar-v2.jpg"
            alt={site.name}
            fill
            className="object-cover object-top grayscale mix-blend-multiply dark:mix-blend-normal"
            sizes="224px"
            priority
          />
          <span className="absolute bottom-2 right-2 size-3 rounded-full border-2 border-white bg-green-500 dark:border-neutral-900" />
        </div>
      </div>

      <div className="mb-5 space-y-3 px-1 font-[family-name:var(--font-inter)] text-neutral-500 leading-8 md:text-lg dark:text-neutral-300">
        <p>
          I&apos;m an{" "}
          <Highlight>AI and Full-Stack Developer</Highlight> based in{" "}
          <Highlight>Lahore, Pakistan</Highlight>, specializing in building
          scalable{" "}
          <Highlight>SaaS applications</Highlight> and{" "}
          <Highlight>marketplaces</Highlight>.
        </p>
        <p>
          I focus on{" "}
          <Highlight>clean architecture</Highlight>, performance, and
          delivering production-ready code that your future team will love. With
          strong expertise in{" "}
          <Highlight>Next.js</Highlight>, <Highlight>NestJS</Highlight>,{" "}
          <Highlight>TypeScript</Highlight>, and <Highlight>AWS</Highlight>, I
          help startups launch MVPs fast and turn ideas into working products.
        </p>
        <p>
          Currently open for freelance full-stack projects (especially{" "}
          <Highlight>marketplaces</Highlight> and{" "}
          <Highlight>booking platforms</Highlight>).
        </p>
      </div>
    </section>
  );
}
