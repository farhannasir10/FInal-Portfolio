import { CaseStudies } from "@/components/sections/case-studies";
import { Newsletter } from "@/components/sections/newsletter";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <Experience />
      <Education />
      <Projects />
      <Services />
      <CaseStudies />
      <Newsletter />
      <About />
    </>
  );
}
