export type CaseStudy = {
  slug: string;
  title: string;
  source: string;
  summary: string;
  date: string;
  readTime: string;
  href: string;
  pdf: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "event-marketplace",
    title: "Evenzs — Event Marketplace Case Study",
    source: "case study",
    summary:
      "Full case study PDF: building a production event marketplace covering organizers, vendors, ticketing, payments, and travel.",
    date: "Mar 20, 2026",
    readTime: "PDF",
    href: "/case-studies/event-marketplace",
    pdf: "/case-studies/event-marketplace.pdf",
  },
  {
    slug: "eluxe3d",
    title: "eLUXE3D — Jewelry 3D Scanning Case Study",
    source: "case study",
    summary:
      "Full case study PDF: rebuilding a jewelry 3D scanning engine with Electron, C++, Three.js, and Open3D for 5M+ point clouds.",
    date: "Feb 28, 2026",
    readTime: "PDF",
    href: "/case-studies/eluxe3d",
    pdf: "/case-studies/eluxe3d.pdf",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
