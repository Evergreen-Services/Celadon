import { client } from "@/config/client";
import type { PageSection } from "@/config/types";

export default function About({ section }: { section?: PageSection }) {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto text-center">
      {section?.heading && <h2 className="text-2xl md:text-3xl font-bold">{section.heading}</h2>}
      <p className="mt-4 text-[var(--color-muted-text)]">{section?.body ?? client.business.tagline}</p>
    </section>
  );
}
