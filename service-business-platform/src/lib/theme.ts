import type { CSSProperties } from "react";
import { client } from "@/config/client";

export function getTheme() {
  return client.theme;
}

export function getThemeVariables(): CSSProperties {
  const theme = getTheme();

  return {
    "--color-primary": theme.colors.primary,
    "--color-primary-contrast": theme.colors.primaryContrast,
    "--color-secondary": theme.colors.secondary,
    "--color-background": theme.colors.background,
    "--color-surface": theme.colors.surface,
    "--color-text": theme.colors.text,
    "--color-muted-text": theme.colors.mutedText,
    "--color-border": theme.colors.border,
    "--font-heading": theme.fonts.heading,
    "--font-body": theme.fonts.body,
    "--radius-button": theme.radii.button,
    "--radius-card": theme.radii.card,
    "--radius-panel": theme.radii.panel,
    "--shadow-card": theme.shadows.card,
    "--shadow-elevated": theme.shadows.elevated,
  } as CSSProperties;
}
