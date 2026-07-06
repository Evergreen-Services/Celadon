import type { PageSection } from "@/config/types";
import { client } from "@/config/client";

export default function Services({ section }: { section?: PageSection }) {
  if (!client.features.services) return null;

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {section?.heading && <h2 className="text-2xl md:text-3xl font-bold text-center">{section.heading}</h2>}
      {section?.body && <p className="mt-4 text-[var(--color-muted-text)] text-center">{section.body}</p>}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(section?.items?.length ? section.items.map((item) => item.title) : client.business.services).map((service) => (
          <div
            key={service}
            className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
          >
            <h3 className="font-semibold text-lg text-[var(--color-primary)]">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
