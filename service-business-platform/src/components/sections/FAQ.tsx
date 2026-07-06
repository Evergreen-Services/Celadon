import type { PageSection } from "@/config/types";

export default function FAQ({ section }: { section?: PageSection }) {
  if (!section) return null;

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      {section.heading && <h2 className="text-2xl md:text-3xl font-bold text-center">{section.heading}</h2>}
      {section.body && <p className="mt-4 text-[var(--color-muted-text)] text-center">{section.body}</p>}
      <div className="mt-8 space-y-4">
        {section.items?.map((item) => (
          <details key={item.title} className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-4 bg-[var(--color-surface)]">
            <summary className="font-semibold">{item.title}</summary>
            {item.description && <div className="mt-2 text-[var(--color-muted-text)]">{item.description}</div>}
          </details>
        ))}
      </div>
    </section>
  );
}
