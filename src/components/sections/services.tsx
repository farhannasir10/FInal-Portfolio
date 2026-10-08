import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-2xl px-3.5 py-8 md:px-0">
      <p className="font-display text-sm text-neutral-400">what i do</p>
      <SectionHeading>Services.</SectionHeading>

      <div className="mt-5 divide-y divide-neutral-100 dark:divide-neutral-800">
        {services.map((service) => (
          <div key={service.title} className="py-4">
            <h3 className="font-display text-base text-neutral-600 dark:text-neutral-200">
              {service.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
