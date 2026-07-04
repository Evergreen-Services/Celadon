import { client } from "@/config/client";
import { type ClientPage, type PageSection } from "@/stubs/pages";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";

function renderSection(section: PageSection) {
  switch (section.type) {
    case "hero":
      return (
        <section key={section.heading} className="px-6 py-16 bg-[var(--color-secondary)]">
          <div className="max-w-5xl mx-auto rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">{section.heading}</h2>
            {section.body && <p className="mt-4 text-[var(--color-text)]/80 max-w-2xl">{section.body}</p>}
            {section.cta && (
              <div className="mt-6">
                <Button href={section.cta.href}>{section.cta.label}</Button>
              </div>
            )}
          </div>
        </section>
      );
    case "cards":
      return (
        <section key={section.heading} className="px-6 py-16 max-w-6xl mx-auto">
          <div className="max-w-3xl">
            {section.heading && <h2 className="text-2xl md:text-3xl font-bold">{section.heading}</h2>}
            {section.body && <p className="mt-3 text-[var(--color-text)]/80">{section.body}</p>}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {section.items?.map((item) => (
              <div key={item.title} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                {item.eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">{item.eyebrow}</p>}
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                {item.description && <p className="mt-2 text-sm text-[var(--color-text)]/70">{item.description}</p>}
              </div>
            ))}
          </div>
        </section>
      );
    case "list":
      return (
        <section key={section.heading} className="px-6 py-16 max-w-5xl mx-auto">
          {section.heading && <h2 className="text-2xl md:text-3xl font-bold">{section.heading}</h2>}
          <ul className="mt-8 space-y-3">
            {section.items?.map((item) => (
              <li key={item.title} className="rounded-lg border border-black/10 bg-white px-5 py-4 shadow-sm">
                <span className="font-medium">{item.title}</span>
                {item.description && <span className="ml-2 text-[var(--color-text)]/70">{item.description}</span>}
              </li>
            ))}
          </ul>
        </section>
      );
    case "contact":
      return (
        <section key={section.heading} className="px-6 py-16 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-black/10 bg-[var(--color-secondary)] p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold">{section.heading}</h2>
            {section.body && <p className="mt-3 max-w-2xl text-[var(--color-text)]/80">{section.body}</p>}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`mailto:${client.business.email}`}>Email us</Button>
              <Button href={`tel:${client.business.phone.replace(/[^\d+]/g, "")}`} variant="secondary">Call now</Button>
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
      {page.sections?.map((section) => renderSection(section))}
    </>
  );
}
