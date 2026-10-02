"use client";

import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, { slug: string; color: string }> = {
  "Next.js": { slug: "nextdotjs", color: "000000" },
  "Nest.js": { slug: "nestjs", color: "E0234E" },
  NestJS: { slug: "nestjs", color: "E0234E" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  Postgres: { slug: "postgresql", color: "4169E1" },
  PostgreSQL: { slug: "postgresql", color: "4169E1" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  "Node.js": { slug: "nodedotjs", color: "5FA04E" },
  Electron: { slug: "electron", color: "47848F" },
  "Three.js": { slug: "threedotjs", color: "000000" },
  Open3D: { slug: "python", color: "3776AB" },
  "Express.js": { slug: "express", color: "000000" },
  MySQL: { slug: "mysql", color: "4479A1" },
  Redis: { slug: "redis", color: "FF4438" },
  AWS: { slug: "amazonaws", color: "FF9900" },
  Docker: { slug: "docker", color: "2496ED" },
  Nginx: { slug: "nginx", color: "009639" },
  React: { slug: "react", color: "61DAFB" },
  OpenAI: { slug: "openai", color: "412991" },
  LangChain: { slug: "langchain", color: "1C3C3C" },
  "REST APIs": { slug: "fastapi", color: "009688" },
  "Node-API / node-gyp": { slug: "nodedotjs", color: "5FA04E" },
  "Multithreaded C++": { slug: "cplusplus", color: "00599C" },
  "C++": { slug: "cplusplus", color: "00599C" },
};

export function ColoredStackIcons({
  stack,
  className,
}: {
  stack: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {stack.map((tech) => {
        const mapped = ICON_MAP[tech];
        if (!mapped) {
          return (
            <span
              key={tech}
              title={tech}
              className="flex size-7 items-center justify-center rounded-full bg-neutral-100 text-[9px] font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tech.slice(0, 2).toUpperCase()}
            </span>
          );
        }
        return (
          <span
            key={tech}
            title={tech}
            className="inline-flex size-7 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-700"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cdn.simpleicons.org/${mapped.slug}/${mapped.color}`}
              alt={tech}
              width={16}
              height={16}
              className="size-4"
            />
          </span>
        );
      })}
    </div>
  );
}
