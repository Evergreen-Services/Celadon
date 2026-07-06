import type { PageSection } from "@/config/types";
import { client } from "@/config/client";
import Button from "@/components/ui/Button";

export default function Payments({ section, compact = false }: { section?: PageSection; compact?: boolean }) {
  if (!client.features.payments) return null;
  if (!section?.cta?.href) return null;

  return (
    <section
      className={`px-6 text-center ${compact ? "py-16" : "py-24"} bg-[var(--color-secondary)]`}
    >
      {section.heading && <h2 className="text-2xl md:text-3xl font-bold">{section.heading}</h2>}
      {section.body && (
        <p className="mt-3 text-[var(--color-muted-text)] max-w-md mx-auto">{section.body}</p>
      )}

      <div className="mt-8">
        <Button href={section.cta.href} external={section.cta.external} className="text-lg px-8 py-4" variant={section.cta.variant as any}>
          {section.cta.label}
        </Button>
      </div>

      {section.items?.length && (
        <p className="mt-4 text-xs text-[var(--color-muted-text)]">
          {section.items[0].description}
        </p>
      )}
    </section>
  );
}
