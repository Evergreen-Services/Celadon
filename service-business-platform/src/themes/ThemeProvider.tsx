"use client";

import { useEffect } from "react";
import { getTheme } from "@/themes/theme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const theme = getTheme();
    const root = document.documentElement;

    root.style.setProperty("--color-primary", theme.colors.primary);
    root.style.setProperty("--color-background", theme.colors.background);
    root.style.setProperty("--color-text", theme.colors.text);

    if (theme.fonts?.heading) {
      root.style.setProperty("--font-heading", theme.fonts.heading);
    }

    if (theme.fonts?.body) {
      root.style.setProperty("--font-body", theme.fonts.body);
    }
  }, []);

  return <>{children}</>;
}