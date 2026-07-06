import { client } from "@/config/client";
import type { ClientPage, PageSection } from "@/config/types";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import { sectionRegistry } from "@/lib/sectionRegistry";

function renderFallbackSection(section: PageSection, index: number) {
  const sectionKey = `${section.type}-${section.heading ?? index}`;

  switch (section.type) {
    case "cards":
      return (
        <section key={sectionKey} className="px-6 py-16 max-w-6xl mx-auto">
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
              </div>
            ))}
          </div>
        </section>
      );
    case "list":
      return (
        <section key={sectionKey} className="px-6 py-16 max-w-5xl mx-auto">
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
    case "contact":
      return (
        <section key={sectionKey} className="px-6 py-16 max-w-5xl mx-auto">
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
    default:
      return null;
  }
}

export default function PageRenderer({ page }: { page: ClientPage }) {
  return (
    <>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      {page.sections?.map((section, index) => {
        const SectionComponent = sectionRegistry[section.type.toLowerCase()];
        if (SectionComponent) return <SectionComponent key={`${section.type}-${index}`} section={section} page={page} index={index} />;

        return renderFallbackSection(section, index);
      })}
    </>
  );
}
