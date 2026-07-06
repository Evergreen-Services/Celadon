import type { PageSection } from "@/config/types";
import { client } from "@/config/client";

export default function Testimonials({ section }: { section?: PageSection }) {
  const testimonials = section?.items?.length
    ? section.items.map((item) => ({ name: item.title, quote: item.description ?? "" }))
    : client.testimonials;

  if (!client.features.testimonials || testimonials.length === 0) return null;

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {section?.heading && <h2 className="text-2xl md:text-3xl font-bold text-center">{section.heading}</h2>}
      {section?.body && <p className="mt-4 text-[var(--color-muted-text)] text-center">{section.body}</p>}

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.name}
            className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
          >
            <p className="text-sm text-[var(--color-muted-text)]">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-semibold text-[var(--color-primary)]">
              &mdash; {testimonial.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
