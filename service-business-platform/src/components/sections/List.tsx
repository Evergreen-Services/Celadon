import type { PageSection } from "@/config/types";

export default function ListSection({ section }: { section?: PageSection }) {
  if (!section) return null;

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      {section.heading && <h2 className="text-2xl md:text-3xl font-bold">{section.heading}</h2>}
      <ul className="mt-8 space-y-3">
        {section.items?.map((item) => (
          <li key={item.title} className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 shadow-[var(--shadow-card)]">
            <span className="font-medium">{item.title}</span>
            {item.description && <span className="ml-2 text-[var(--color-muted-text)]">{item.description}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
