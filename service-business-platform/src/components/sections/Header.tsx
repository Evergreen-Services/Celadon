"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/config/client";
import Button from "@/components/ui/Button";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Desktop: always visible
      if (window.innerWidth >= 768) {
        setVisible(true);
        return;
      }

      // Mobile: hide on scroll down, show on scroll up
      if (currentY > lastScrollY.current && currentY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface)] border-b border-[var(--color-border)] transition-transform duration-200 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-[var(--color-text)]">
            <Image
              src={client.branding.logo.src}
              alt={client.branding.logo.alt}
              width={client.branding.logo.width}
              height={client.branding.logo.height}
              className="h-8 w-8 shrink-0 object-contain"
              priority
            />
            {client.business.name}
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {client.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--color-primary)]">
                {item.label}
              </Link>
            ))}
          </nav>

          {client.features.payments && (
            <Button href="/payments" className="text-sm px-4 py-2 shrink-0" variant="secondary">
              Pay Your Bill
            </Button>
          )}
        </div>

        <nav className="md:hidden flex items-center gap-4 text-sm font-medium overflow-x-auto pt-2 -mb-1">
          {client.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
