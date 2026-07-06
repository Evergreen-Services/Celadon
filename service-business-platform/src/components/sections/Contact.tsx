import type { PageSection } from "@/config/types";
import Button from "@/components/ui/Button";

export default function ContactSection({ section }: { section?: PageSection }) {
  if (!section) return null;

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <div className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-secondary)] p-8 shadow-[var(--shadow-card)]">
        <h2 className="text-2xl md:text-3xl font-bold">{section.heading}</h2>
        {section.body && <p className="mt-3 max-w-2xl text-[var(--color-muted-text)]">{section.body}</p>}
        <div className="mt-8 flex flex-wrap gap-4">
          {section.buttons?.map((button) => (
            <Button key={button.href} href={button.href} external={button.external} variant={button.variant as any}>
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
