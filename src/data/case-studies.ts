export type CaseStudy = {
  slug: string;
  title: string;
  source: string;
  summary: string;
  date: string;
  readTime: string;
  href: string;
  pdf: string;
  meta: { label: string; value: string }[];
  sections: { heading: string; body: string[] }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "event-marketplace",
    title: "Event & Vendor Marketplace",
    source: "software case study",
    summary:
      "A unified platform for discovering events, managing vendors, purchasing tickets, and planning the complete event experience.",
    date: "Mar 20, 2026",
    readTime: "8 min read",
    href: "/case-studies/event-marketplace",
    pdf: "/case-studies/event-marketplace.pdf",
    meta: [
      { label: "Client", value: "Confidential (NDA)" },
      { label: "Industry", value: "Events & Hospitality" },
      { label: "Type", value: "Multi-Sided Marketplace" },
      { label: "Timeline", value: "3 months" },
      { label: "Role", value: "Solo Full-Stack Developer" },
      { label: "Delivery", value: "End-to-End Web Platform" },
    ],
    sections: [
      {
        heading: "01 — Executive Summary & Challenge",
        body: [
          "Event planning is typically fragmented across multiple platforms for ticketing, vendor sourcing, and travel. This platform consolidates the entire journey into a single ecosystem.",
          "It connects Attendees (discovery & ticketing), Organizers (event creation, vendor sourcing, ticketing), Vendors (profiles, bidding, service management), and Administrators (platform moderation) into one seamless marketplace.",
        ],
      },
      {
        heading: "02 — Platform Ecosystem & Roles",
        body: [
          "Attendee Experience — Discover → Explore → Purchase → Attend. Users browse events, view details, and securely purchase tickets via Stripe without leaving the ecosystem. OAuth streamlines login.",
          "Organizer Experience — Create → Plan → Source → Negotiate → Manage. Organizers create events (manually or AI-assisted), sell tickets, request quotes, compare bids, negotiate, and manage accepted services.",
          "Vendor Experience — Onboard → Publish → Discover → Bid → Negotiate. Vendors use an AI-powered onboarding flow to generate a professional profile, receive quote requests by postal code, and manage bids from a dedicated dashboard.",
          "Administration Platform — Monitor → Moderate → Resolve → Manage. Admins monitor activity, flag events, manage users (including ban/unban), handle disputes, and process refunds from one dashboard.",
        ],
      },
      {
        heading: "03 — Technical Architecture & Integrations",
        body: [
          "The platform was built as a modern, serverless ecosystem on AWS.",
          "Frontend: Next.js, Tailwind CSS, AWS Amplify · Backend: NestJS, AWS Lambda (Serverless)",
          "Database: PostgreSQL on AWS RDS · Payments: Stripe",
          "Events: Ticketmaster, Eventbrite APIs · Travel: Flight & Hotel APIs",
          "AI: Hugging Face / AI services · Comms: Resend, Brevo SMTP, Mailchimp",
          "Engineering challenges solved: multi-sided marketplace infrastructure, complex bidding state machines, AI inside real workflows (event creation & vendor profiling), and structured disputes/payments with work-order logic and refund management.",
        ],
      },
      {
        heading: "04 — End-to-End Delivery & Results",
        body: [
          "Timeline: 3 months as a solo developer — from initial architecture to full AWS deployment.",
          "The result is a fully functional multi-sided marketplace featuring AI workflows, integrated payments, and centralized moderation — replacing fragmented tools with one cohesive product.",
        ],
      },
      {
        heading: "05 — Visual Product Showcase",
        body: [
          "Event discovery with filters for location, date, and price.",
          "Event details leading directly into ticket purchasing.",
          "Vendor workspace for packages, requests, bids, and payouts.",
          "AI-powered onboarding that turns vendor information into a structured marketplace profile.",
        ],
      },
      {
        heading: "Confidentiality note",
        body: [
          "Client identity and confidential business information have been omitted in accordance with the applicable NDA. Technical capabilities are presented solely to demonstrate the scope of development.",
        ],
      },
    ],
  },
  {
    slug: "eluxe3d",
    title: "Modernizing High-Precision 3D Scanning Software",
    source: "software case study",
    summary:
      "Re-architecting a legacy Windows application into a modern, high-performance 3D scanning platform for jewelry manufacturing and CAD workflows.",
    date: "Feb 28, 2026",
    readTime: "7 min read",
    href: "/case-studies/eluxe3d",
    pdf: "/case-studies/eluxe3d.pdf",
    meta: [
      { label: "Client", value: "eLUXE3D" },
      { label: "Industry", value: "Jewelry Manufacturing · 3D Scanning · CAD" },
      { label: "Project Type", value: "Desktop Software Modernization / 3D Processing" },
      { label: "Timeline", value: "~150–200 hours across 6 milestones" },
      { label: "Role", value: "Lead Software Architect & Full-Stack Developer" },
      { label: "Platform", value: "Windows Desktop" },
    ],
    sections: [
      {
        heading: "01 — Executive Summary & The Challenge",
        body: [
          "eLUXE3D develops high-precision 3D scanning technology for jewelry manufacturing. Their world-class hardware was limited by a legacy C++ architecture from ~2005. Modern scans exceeding 5 million points caused severe memory leaks, UI freezing, application crashes, and unreliable auto-alignment.",
          "The goal was to modernize the software architecture while preserving the raw computational power of C++ — separating the user experience from the heavy lifting, fixing memory instability, and providing professional CAD inspection tools.",
        ],
      },
      {
        heading: "02 — The Solution: Split-Stack Architecture",
        body: [
          "Rather than rewriting the computational engine in JavaScript, the application was redesigned around a strict separation of responsibilities:",
          "UI Layer (Electron + React + TailwindCSS): Manages user interaction, workflow, and scanner controls.",
          "Visualization Layer (Three.js + WebGL): Real-time point-cloud rendering and 3D interaction.",
          "Bridge Layer (Node.js + Node-API): Zero-copy binary data transfer to avoid memory duplication.",
          "Computational Layer (Modern C++): Heavy lifting using Open3D and Point Cloud Library (PCL) for point-cloud processing, ICP alignment, surface reconstruction, and mesh decimation.",
          "The result: the interface never carries the weight of the mathematics. Millions of points are processed natively without freezing the UI.",
        ],
      },
      {
        heading: "03 — Core Workflows & Hardware Control",
        body: [
          "Physical Jewelry → 3D Scanner → Point Cloud → Clean & Crop → Auto Alignment → Surface Reconstruction → Mesh Optimization → CAD Export (PLY / STL / OBJ).",
          "Hardware Control: Configure optics (30mm to 80mm FOV) and mechanical sweeps visually.",
          "3D Lasso Cropping: Interactively remove unwanted mounting fixtures before reconstruction.",
          "Automatic Scan Alignment: Uses Iterative Closest Point (ICP) to mathematically determine optimal alignment between overlapping scans.",
          "Surface Reconstruction & Decimation: Poisson Surface Reconstruction produces high-quality continuous meshes, while Quadric Error Metrics (QEM) decimation reduces file sizes by ~90% while preserving sharp details like prongs and gem facets.",
          "CAD Inspection: Digital calipers, cross-section slicing, and realistic material rendering bridge the gap between physical jewelry and digital CAD.",
        ],
      },
      {
        heading: "04 — End-to-End Delivery",
        body: [
          "Over ~150–200 hours, I operated as the Lead Software Architect and Full-Stack Developer — owning the complete modernization strategy from split-stack architecture and Node-API bridge design to the React/Three.js frontend and a signed Windows application with automatic OTA updates via AWS S3.",
          "The software transformed from a legacy bottleneck into a modern foundation for high-precision 3D scanning.",
        ],
      },
      {
        heading: "05 — Visual Product Showcase",
        body: [
          "Main scanning workspace with real-time mesh stats and jewelry material rendering.",
          "3D lasso selection around unwanted fixtures before deletion.",
          "Automated ICP-based alignment of multiple scans into a unified model.",
          "Polar radar / scan-angle visualization for custom mechanical sweep paths.",
        ],
      },
      {
        heading: "Confidentiality note",
        body: [
          "Certain proprietary mathematical configurations, hardware-driver implementations, and client-specific technical details are excluded from this case study in accordance with confidentiality requirements.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
