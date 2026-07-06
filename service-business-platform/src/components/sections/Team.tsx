import type { PageSection } from "@/config/types";
import { client } from "@/config/client";

export default function Team({ section }: { section?: PageSection }) {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {section?.heading && <h2 className="text-2xl md:text-3xl font-bold text-center">{section.heading}</h2>}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder: use business name as a single team member when none provided */}
        {section?.items && section.items.length > 0 ? (
          section.items.map((m) => (
            <div key={m.title} className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
              <h3 className="font-semibold">{m.title}</h3>
              {m.description && <p className="mt-2 text-[var(--color-muted-text)]">{m.description}</p>}
            </div>
          ))
        ) : (
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
            <h3 className="font-semibold">{client.business.name}</h3>
            <p className="mt-2 text-[var(--color-muted-text)]">{client.business.tagline}</p>
          </div>
        )}
      </div>
    </section>
  );
}
