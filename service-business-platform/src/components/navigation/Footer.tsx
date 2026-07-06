import Image from "next/image";
import Link from "next/link";
import { client } from "@/config/client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-secondary)]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src={client.branding.logo.src}
              alt={client.branding.logo.alt}
              width={client.branding.logo.width}
              height={client.branding.logo.height}
              className="h-8 w-8 shrink-0 object-contain"
            />
            <p className="font-bold text-[var(--color-text)]">{client.business.name}</p>
          </div>
          <p className="text-sm mt-2 text-[var(--color-text)]/80">{client.business.tagline}</p>
        </div>

        <div>
          <p className="font-semibold text-sm text-[var(--color-text)]">{client.copy?.footerContactLabel}</p>
          <p className="text-sm mt-2">
            <a href={`tel:${client.business.phone}`} className="hover:text-[var(--color-primary)]">
              {client.business.phone}
            </a>
          </p>
          <p className="text-sm mt-1">
            <a href={`mailto:${client.business.email}`} className="hover:text-[var(--color-primary)]">
              {client.business.email}
            </a>
          </p>
        </div>

        <div>
          <p className="font-semibold text-sm text-[var(--color-text)]">{client.copy?.footerServiceAreaLabel}</p>
          <p className="text-sm mt-2 text-[var(--color-text)]/80">
            {client.business.serviceArea.join(", ")}
          </p>

          <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {client.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--color-primary)]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] px-6 py-4 text-center text-xs text-[var(--color-muted-text)]">
        &copy; {year} {client.business.name}. {client.copy?.footerCopyrightNotice}
      </div>
    </footer>
  );
}
