export const TECH_ICONS: Record<
  string,
  { slug?: string; color: string; local?: string }
> = {
  "Next.js": { slug: "nextdotjs", color: "000000" },
  React: { slug: "react", color: "61DAFB" },
  ReactJs: { slug: "react", color: "61DAFB" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  "Node.js": { slug: "nodedotjs", color: "5FA04E" },
  NodeJs: { slug: "nodedotjs", color: "5FA04E" },
  NestJS: { slug: "nestjs", color: "E0234E" },
  "Nest.js": { slug: "nestjs", color: "E0234E" },
  "Express.js": { slug: "express", color: "000000" },
  PostgreSQL: { slug: "postgresql", color: "4169E1" },
  Postgres: { slug: "postgresql", color: "4169E1" },
  MySQL: { slug: "mysql", color: "4479A1" },
  MongoDB: { slug: "mongodb", color: "47A248" },
  Redis: { slug: "redis", color: "FF4438" },
  Prisma: { slug: "prisma", color: "2D3748" },
  Docker: { slug: "docker", color: "2496ED" },
  AWS: { local: "/tech/amazonaws.svg", color: "FF9900" },
  Nginx: { slug: "nginx", color: "009639" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  TailwindCSS: { slug: "tailwindcss", color: "06B6D4" },
  OpenAI: { local: "/tech/openai.svg", color: "412991" },
  LangChain: { slug: "langchain", color: "1C3C3C" },
  "Hugging Face": { slug: "huggingface", color: "FFD21E" },
  "Vercel AI SDK": { slug: "vercel", color: "000000" },
  "Auth.js": { slug: "auth0", color: "EB5424" },
  Electron: { slug: "electron", color: "47848F" },
  "Three.js": { slug: "threedotjs", color: "000000" },
  Open3D: { slug: "python", color: "3776AB" },
  "Node-API": { slug: "nodedotjs", color: "5FA04E" },
  "C++": { slug: "cplusplus", color: "00599C" },
  Python: { slug: "python", color: "3776AB" },
  Git: { slug: "git", color: "F05032" },
  "HTML / CSS": { slug: "html5", color: "E34F26" },
  "REST APIs": { slug: "fastapi", color: "009688" },
  Postman: { slug: "postman", color: "FF6C37" },
  Bun: { slug: "bun", color: "000000" },
};

export function techIconUrl(name: string) {
  const mapped = TECH_ICONS[name];
  if (!mapped) return null;
  if (mapped.local) return mapped.local;
  if (!mapped.slug) return null;
  return `https://cdn.simpleicons.org/${mapped.slug}/${mapped.color}`;
}
