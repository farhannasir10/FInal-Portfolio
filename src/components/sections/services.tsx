import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-2xl px-3.5 py-8 md:px-0">
      <h2 className="font-display text-sm text-neutral-400">what i do</h2>
      <h2 className="font-display border-b-4 border-orange-100 text-2xl text-neutral-500 dark:border-orange-200 dark:text-neutral-200">
        services.
      </h2>

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
