import type { PageSection } from "@/config/types";

export default function Gallery({ section }: { section?: PageSection }) {
  if (!section) return null;

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {section.heading && <h2 className="text-2xl md:text-3xl font-bold text-center">{section.heading}</h2>}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {section.items?.map((item) => (
          <div key={item.title} className="rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              {item.description && <p className="mt-2 text-sm text-[var(--color-muted-text)]">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
