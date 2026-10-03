export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  website?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Tekvill",
    role: "Software Engineer",
    period: "2023 – Present",
    location: "Remote",
    logo: "/companies/tekvill.webp",
    website: "https://www.tekvill.com",
    bullets: [
      "Shipped full-stack product features across Next.js and NestJS, owning UI flows, API design, and production releases.",
      "Built marketplace and booking workflows with payments, role-based access, and reliable integrations.",
      "Collaborated with stakeholders to turn product requirements into clean, maintainable architecture.",
    ],
  },
  {
    company: "DailyRemote",
    role: "Intern",
    period: "2021 – 2022",
    location: "Remote",
    logo: "/companies/dailyremote.svg",
    bullets: [
      "Built and maintained remote-first product features for a distributed audience, shipping reliable web experiences end to end—from UI flows to API integrations and release support.",
      "Collaborated asynchronously with designers and stakeholders across time zones, improving delivery cadence through clear specs, iterative releases, and solid debugging practices on production issues.",
      "Owned feature slices across the stack: implementing interfaces, wiring backend endpoints, and tightening performance and stability for day-to-day remote work use cases.",
    ],
  },
];
