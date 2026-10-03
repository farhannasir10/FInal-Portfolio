import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact · Portfolio",
  description: "Get in touch with Farhan Nasir",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-3.5 pb-16 pt-[76px] md:px-0">
      <div className="text-center">
        <SectionHeading className="mx-auto text-3xl text-neutral-700 dark:text-neutral-100">
          Contact
        </SectionHeading>
        <p className="mt-3 text-sm text-neutral-400">
          Get In Touch with me, I will respond asap.
        </p>
      </div>

      <div className="mt-10 border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <h2 className="font-display text-lg text-neutral-600 dark:text-neutral-200">
          Say Hii..
        </h2>
        <p className="mt-1 text-sm text-neutral-400">
          Fill out the form below and I&apos;ll get back to you very soon.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
