import type { PageSection } from "@/config/types";
import { client } from "@/config/client";
import Button from "@/components/ui/Button";

export default function Hero({ section }: { section?: PageSection }) {
  if (!client.features.hero) return null;
  const heroImage = client.branding.heroImage;
  const buttons = section?.buttons ?? (section?.cta ? [section.cta] : []);

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
        <h1 className="text-4xl md:text-5xl font-bold">{section?.heading ?? client.business.name}</h1>
        <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">{section?.body ?? client.business.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {buttons.map((button) => (
            <Button
              key={button.href}
              href={button.href}
              variant={button.variant as any}
              external={button.external}
              className={button.variant === "secondary" ? "!border-[var(--color-primary-contrast)] !text-[var(--color-primary-contrast)]" : "!bg-[var(--color-primary-contrast)] !text-[var(--color-primary)]"}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
