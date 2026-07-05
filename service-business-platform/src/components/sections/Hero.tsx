import { client } from "@/config/client";
import Button from "@/components/ui/Button";

export default function Hero() {
  if (!client.features.hero) return null;
  const heroImage = client.branding.heroImage;

  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] text-[var(--color-primary-contrast)] px-6 py-20 text-center">
      {heroImage && (
        <div
          className="absolute inset-0 opacity-15 bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${heroImage.src})` }}
          role="img"
          aria-label={heroImage.alt}
        />
      )}

      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">{client.business.name}</h1>
        <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">{client.business.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="secondary" className="!border-[var(--color-primary-contrast)] !text-[var(--color-primary-contrast)]">
            Request a Quote
          </Button>
          {client.features.payments && (
            <Button href="/payments" className="!bg-[var(--color-primary-contrast)] !text-[var(--color-primary)]">
              Pay Your Bill
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
