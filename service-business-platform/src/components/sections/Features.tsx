import type { PageSection } from "@/config/types";

export default function Features({ section }: { section?: PageSection }) {
  if (!section) return null;

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      {section.heading && <h2 className="text-2xl md:text-3xl font-bold text-center">{section.heading}</h2>}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {section.items?.map((f) => (
          <div key={f.title} className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-4 bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
            <h4 className="font-semibold">{f.title}</h4>
            {f.description && <p className="mt-2 text-[var(--color-muted-text)]">{f.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
