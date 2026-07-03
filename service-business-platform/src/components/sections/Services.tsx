import { client } from "@/config/client";
 
export default function Services() {
  if (!client.features.services) return null;
 
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Our Services</h2>
 
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {client.business.services.map((service) => (
          <div
            key={service}
            className="rounded-lg border border-black/10 p-6 bg-white shadow-sm"
          >
            <h3 className="font-semibold text-lg text-[var(--color-primary)]">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}