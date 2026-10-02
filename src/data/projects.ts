export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  summary: string;
  stack: string[];
  cover: string;
  featured?: boolean;
  images: ProjectImage[];
  overview: string[];
  sections: { heading: string; body: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "event-management-vendor-booking-system",
    title: "Event Marketplace Platform (Production Live Project)",
    shortTitle: "Event Marketplace",
    summary:
      "A complete full-stack Event Marketplace built from scratch as the sole developer. It connects event organizers, vendors, and attendees in one easy-to-use platform — covering event creation, vendor booking, ticketing, and travel integration.",
    stack: ["Next.js", "Tailwind CSS", "Nest.js", "Postgres"],
    cover: "/projects/event-management-vendor-booking-system/cover.png",
    featured: true,
    images: [
      {
        src: "/projects/event-management-vendor-booking-system/01-events-search.png",
        alt: "Events Search Page",
      },
      {
        src: "/projects/event-management-vendor-booking-system/02-flights-search.png",
        alt: "Flights Search Page",
      },
      {
        src: "/projects/event-management-vendor-booking-system/03-vendor-search.png",
        alt: "Vendor Search Page",
      },
      {
        src: "/projects/event-management-vendor-booking-system/04-vendor-dashboard.png",
        alt: "Vendor Dashboard",
      },
      {
        src: "/projects/event-management-vendor-booking-system/05-vendor-profile.png",
        alt: "Vendor Profile",
      },
      {
        src: "/projects/event-management-vendor-booking-system/06-vendor-services.png",
        alt: "Vendor Services",
      },
      {
        src: "/projects/event-management-vendor-booking-system/07-vendor-request.png",
        alt: "Vendor Request Page",
      },
    ],
    overview: [
      "This is a complete full-stack Event Marketplace Platform that streamlines the entire event lifecycle — from creation and management to vendor booking, ticketing, and travel integration — all within a single unified system.",
      "Built as the sole full-stack developer from scratch, the platform enables event organizers to easily create, publish, and manage events while connecting them with verified vendors and attendees.",
    ],
    sections: [
      {
        heading: "Key Features",
        body: [
          "Event Creation: Manual creation + AI-assisted event generation using Hugging Face APIs",
          "Ticketing System: Flexible ticket types, pricing tiers, and secure checkout",
          "Vendor Marketplace: Vendor discovery, KYC verification, RFQ system, and booking workflow",
          "Attendee Experience: Dynamic event listings with smooth booking flow",
          "Travel Integration: In-platform travel package options for comprehensive event planning",
          "Notifications & Marketing: Automated emails via Brevo SMTP and Mailchimp",
        ],
      },
      {
        heading: "Technical Implementation",
        body: [
          "Frontend: Next.js (App Router) with modern, responsive UI",
          "Backend: NestJS with well-structured, scalable REST APIs and role-based access control",
          "Database: AWS RDS (PostgreSQL) with a flexible and relational schema",
          "Authentication: Google OAuth",
          "Payments: Stripe for secure payments and escrow logic",
          "AI Integration: Hugging Face APIs for intelligent event creation",
          "Infrastructure: Deployed on AWS using serverless architecture — frontend on Amplify, backend on Lambda, with separate staging and production environments",
        ],
      },
    ],
  },
  {
    slug: "citypulse-smart-city",
    title: "CityPulse-Smart CIty",
    shortTitle: "CityPulse",
    summary:
      "CityPulse is an AI-powered platform that converts any location into a real-time, decision-ready dashboard. It aggregates geospatial, weather, and local data, using AI to deliver insights, recommendations, and clear next steps for users.",
    stack: ["Next.js", "Tailwind CSS"],
    cover: "/projects/citypulse-smart-city/cover.png",
    featured: true,
    images: [
      {
        src: "/projects/citypulse-smart-city/cover.png",
        alt: "Real-time location insights with AI-powered planning.",
      },
      {
        src: "/projects/citypulse-smart-city/01-screenshot.png",
        alt: "CityPulse screenshot",
      },
    ],
    overview: [
      "CityPulse is an AI-powered platform designed to eliminate decision fatigue when exploring any location. With a single search, users get a complete, real-time understanding of a place — without switching between multiple apps.",
    ],
    sections: [
      {
        heading: "Problem It Solves",
        body: [
          "When visiting a new city or area, users typically rely on multiple platforms (maps, reviews, traffic, etc.) to gather information. This is time-consuming and fragmented.",
          "CityPulse solves this by bringing all critical insights into one unified system, helping users quickly understand and act on their surroundings.",
        ],
      },
      {
        heading: "Key Features",
        body: [
          "Unified Location Dashboard — nearby services like food, parking, gas stations, libraries, and more",
          "Real-Time Insights — traffic, mobility, safety, and activity levels",
          "AI-Driven Recommendations — contextual suggestions based on current conditions",
          "Actionable Planning — step-by-step suggestions on what to do next",
          "Multi-Source Data Integration — APIs, public datasets, and location-based services",
          "Optimized Performance — intelligent caching and efficient data handling",
        ],
      },
    ],
  },
  {
    slug: "eluxe3d",
    title: "Eluxe3D",
    shortTitle: "Eluxe3D",
    summary:
      "eLUXE3D is a high-performance 3D scanning engine built specifically for the jewelry industry. I architected a modern Windows desktop application to replace a crashing, legacy 2005 system—transforming heavy 3D math and massive 5M+ point clouds into a sleek, lightning-fast, and fully automated workflow.",
    stack: ["Electron", "Node-API / node-gyp", "Three.js", "Multithreaded C++", "Open3D"],
    cover: "/projects/eluxe3d/cover-app.png",
    featured: true,
    images: [
      {
        src: "/projects/eluxe3d/01-align.png",
        alt: "Align — ICP / Point-to-Plane ICP (Manual + Auto Align, Moving / Fixed / Result Preview)",
      },
      {
        src: "/projects/eluxe3d/02-cross-section.png",
        alt: "Cross Section — plane–mesh intersection with X/Y/Z clipping controls",
      },
      {
        src: "/projects/eluxe3d/03-merged.png",
        alt: "Merge — voxel / Poisson surface reconstruction into a single watertight mesh",
      },
      {
        src: "/projects/eluxe3d/04-lasso-crop.png",
        alt: "Lasso Crop — screen-space selection → ray-casting → mesh partition",
      },
    ],
    overview: [
      "To prevent the UI from freezing during heavy math calculations, I engineered a strict separation of concerns using zero-copy binary memory transfers between Electron, React, and a multithreaded C++ math engine.",
      "The product pipeline covers Scan → Lasso Crop → Align → Merge → Cross Section → Decimate → Export, with jewelry-specific inspection tools and CAD-ready outputs at a strict 1 unit = 1 mm scale.",
    ],
    sections: [
      {
        heading: "Core Algorithms",
        body: [
          "Align — Iterative Closest Point (ICP) / Point-to-Plane ICP: registers Not Aligned (Moving) scans onto Aligned (Fixed) references; optional manual landmark seeding (1–6 matching dots) before Auto Align refinement",
          "Merge — Voxel-based fusion / Poisson Surface Reconstruction: fuses aligned point clouds into one watertight mesh (e.g. owl1+owl2_aligned_merged.ply)",
          "Cross Section — Plane–mesh intersection / planar clipping: live 2D profiles and thickness checks along X/Y/Z cutting planes",
          "Lasso Crop — Screen-space polygon selection mapped into 3D via ray-casting, then mesh/point partitioning to keep or discard selected vertices and faces",
          "Export — Vertex/face serialization to CAD-ready .PLY, .STL, and .OBJ while preserving physical millimetre scale (1 unit = 1.00 mm)",
        ],
      },
      {
        heading: "The Tech Stack (Split-Stack Architecture)",
        body: [
          "Desktop Wrapper: Electron",
          "Frontend UI: React.js, Tailwind CSS, TypeScript",
          "3D Viewport: Three.js / React Three Fiber for high-FPS WebGL rendering",
          "Backend Math Engine: Modern multithreaded C++",
          "The Bridge: Node-API (node-gyp) enabling JavaScript to execute heavy C++ threads",
          "Mathematical Libraries: Open3D & Point Cloud Library (PCL)",
        ],
      },
      {
        heading: "Core Features",
        body: [
          "Live capture with Orbit + Lasso interaction modes in the viewport",
          "Hardware Active Sync — turntable / laser feedback (e.g. Laser 450nm) for blind-spot rescans",
          "Jewelry Material Studio — Platinum, 18K Yellow Gold, Rose Gold, White Gold shaders",
          "Mesh inspector with vertices, triangles, dimensions, and volume readouts",
          "1-Click style pipeline: Scan → Crop → Align → Merge → Decimate → Export",
        ],
      },
    ],
  },
  {
    slug: "condo-bridge",
    title: "Condo Bridge",
    shortTitle: "Condo Bridge",
    summary:
      "Backend architecture and system design for a modern condominium property management platform, supporting residents, boards, management teams, financial operations, communications, and property workflows.",
    stack: ["Node.js", "Express.js", "MySQL", "AWS"],
    cover: "/projects/condo-bridge/cover-app.png",
    featured: true,
    images: [
      { src: "/projects/condo-bridge/cover-app.png", alt: "Condo Bridge homepage" },
      { src: "/projects/condo-bridge/01-community.webp", alt: "Condo Bridge community" },
      { src: "/projects/condo-bridge/02-vendors.webp", alt: "Condo Bridge vendors" },
    ],
    overview: [
      "Condo Bridge is a comprehensive condominium property management platform designed to streamline operations for property managers, condo boards, residents, and service providers.",
      "I worked on the backend architecture, core system functionality, and overall system design, focusing on building reliable and scalable foundations for the platform.",
    ],
    sections: [
      {
        heading: "Key areas",
        body: [
          "Designing backend architecture and structuring core application services",
          "Developing APIs and business logic for property and user management",
          "Designing data models and relationships for complex condominium workflows",
          "Implementing backend functionality for financial and accounting operations",
          "Building systems for maintenance requests, communications, documents, and admin workflows",
          "Managing role-based access across residents, board members, managers, and administrators",
        ],
      },
    ],
  },
  {
    slug: "smsall-high-scale-backend-system-architecture",
    title: "SMSall — High-Scale Backend & System Architecture",
    shortTitle: "SMSall",
    summary:
      "Designed and engineered backend architecture for SMSall, building the systems and infrastructure required to reliably support a platform serving 1M+ users with high-volume messaging and concurrent activity.",
    stack: ["Node.js", "Express.js", "MySQL", "Redis", "REST APIs", "AWS", "Docker", "Nginx"],
    cover: "/projects/smsall-high-scale-backend-system-architecture/cover.jpg",
    featured: false,
    images: [
      {
        src: "/projects/smsall-high-scale-backend-system-architecture/cover.jpg",
        alt: "SMSall high-scale messaging platform",
      },
    ],
    overview: [
      "SMSall is a large-scale communication platform built around high-volume user interactions and messaging. The project required a backend architecture capable of handling significant traffic, concurrent users, and large volumes of data while maintaining reliability and performance.",
      "I worked on the backend system design and architecture, focusing on building a scalable foundation capable of supporting approximately 1 million users.",
    ],
    sections: [
      {
        heading: "Key areas",
        body: [
          "Designing scalable backend architecture for high user concurrency",
          "Structuring APIs and core backend services around business requirements",
          "Designing database models and data flows for large-scale messaging data",
          "Optimizing high-volume operations to reduce unnecessary database load",
          "Planning for scalability, reliability, and fault tolerance",
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : null,
  };
}
