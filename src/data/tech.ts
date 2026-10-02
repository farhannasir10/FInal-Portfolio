export type TechItem = {
  name: string;
};

export type TechCategory = {
  name: string;
  items: TechItem[];
};

export const coreTech: TechItem[] = [
  { name: "Next.js" },
  { name: "NestJS" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "PostgreSQL" },
  { name: "OpenAI" },
  { name: "LangChain" },
  { name: "Tailwind CSS" },
  { name: "Docker" },
  { name: "AWS" },
];

export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    items: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML / CSS" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "NestJS" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "Auth.js" },
    ],
  },
  {
    name: "AI & Intelligence",
    items: [
      { name: "OpenAI" },
      { name: "LangChain" },
      { name: "Hugging Face" },
      { name: "Vercel AI SDK" },
    ],
  },
  {
    name: "Database & Infrastructure",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Nginx" },
    ],
  },
  {
    name: "Desktop / 3D",
    items: [
      { name: "Electron" },
      { name: "Three.js" },
      { name: "Open3D" },
      { name: "Node-API" },
      { name: "C++" },
    ],
  },
];
