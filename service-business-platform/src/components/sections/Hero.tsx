import { client } from "@/config/client";
import Button from "@/components/ui/Button";

export default function Hero() {
  if (!client.features.hero) return null;

  return (
    <section className="bg-[var(--color-primary)] text-white px-6 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">{client.business.name}</h1>
      <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">{client.business.tagline}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button href="/contact" variant="secondary" className="!border-white !text-white">
          Request a Quote
        </Button>
        {client.features.payments && (
          <Button href="/pay" className="!bg-white !text-[var(--color-primary)]">
            Pay Your Bill
          </Button>
        )}
      </div>
    </section>
  );
}