import Link from "next/link";
import { client } from "@/config/client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-black/10 bg-[var(--color-secondary)]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-bold text-[var(--color-text)]">{client.business.name}</p>
          <p className="text-sm mt-2 text-[var(--color-text)]/80">{client.business.tagline}</p>
        </div>

        <div>
          <p className="font-semibold text-sm text-[var(--color-text)]">Contact</p>
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
          <p className="font-semibold text-sm text-[var(--color-text)]">Service Area</p>
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

      <div className="border-t border-black/10 px-6 py-4 text-center text-xs text-[var(--color-text)]/60">
        © {year} {client.business.name}. All rights reserved.
      </div>
    </footer>
  );
}