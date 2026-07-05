import type { PageSection, ClientPage } from "@/config/types";
import Button from "@/components/ui/Button";

export default function Cards({ section }: { section?: PageSection }) {
  if (!section) return null;

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="max-w-3xl">
        {section.heading && <h2 className="text-2xl md:text-3xl font-bold">{section.heading}</h2>}
        {section.body && <p className="mt-3 text-[var(--color-muted-text)]">{section.body}</p>}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {section.items?.map((item) => (
          <div key={item.title} className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
            {item.eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">{item.eyebrow}</p>}
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            {item.description && <p className="mt-2 text-sm text-[var(--color-muted-text)]">{item.description}</p>}
            {item.title && (
              <div className="mt-4">
                <Button href="#">Learn more</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
