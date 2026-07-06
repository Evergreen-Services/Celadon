import type { PageSection } from "@/config/types";
import Button from "@/components/ui/Button";

export default function Pricing({ section }: { section?: PageSection }) {
  if (!section) return null;

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {section.heading && <h2 className="text-2xl md:text-3xl font-bold text-center">{section.heading}</h2>}
      {section.body && <p className="mt-4 text-[var(--color-muted-text)] text-center">{section.body}</p>}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {section.items?.map((plan) => (
          <div key={plan.title} className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-semibold">{plan.title}</h3>
            {plan.description && <p className="mt-2 text-[var(--color-muted-text)]">{plan.description}</p>}
            {plan.href && plan.buttonLabel && (
              <div className="mt-4">
                <Button href={plan.href} variant={plan.buttonLabel ? "primary" : "secondary"} className="w-full">
                  {plan.buttonLabel}
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
