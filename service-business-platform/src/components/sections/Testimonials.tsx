import { client } from "@/config/client";

export default function Testimonials() {
  if (!client.features.testimonials || client.testimonials.length === 0) return null;

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center">What Customers Say</h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {client.testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.name}
            className="rounded-lg border border-black/10 p-6 bg-white shadow-sm"
          >
            <p className="text-sm text-[var(--color-text)]/80">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-semibold text-[var(--color-primary)]">
              — {testimonial.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}