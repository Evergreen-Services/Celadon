import type { PageSection } from "@/config/types";
import Button from "@/components/ui/Button";

export default function CTA({ section }: { section?: PageSection }) {
  if (!section || !section.cta) return null;

  return (
    <section className="px-6 py-16 bg-[var(--color-primary)] text-[var(--color-primary-contrast)] text-center">
      <div className="max-w-4xl mx-auto">
        {section.heading && <h2 className="text-3xl font-bold">{section.heading}</h2>}
        {section.body && <p className="mt-3 opacity-90">{section.body}</p>}
        <div className="mt-6">
          <Button href={section.cta.href} className="!bg-[var(--color-primary-contrast)] !text-[var(--color-primary)]">{section.cta.label}</Button>
        </div>
      </div>
    </section>
  );
}
