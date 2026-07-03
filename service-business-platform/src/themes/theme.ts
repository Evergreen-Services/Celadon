import type { CSSProperties } from "react";
import { client } from "@/config/client";
import { lawnTheme } from "@/themes/lawn";
import { realtorTheme } from "@/themes/realtor";

export function getTheme() {
  switch (client.theme) {
    case "realtor":
      return realtorTheme;
    case "lawn":
      return lawnTheme;

    default:
      return lawnTheme;
  }
}

export function getThemeVariables(): CSSProperties {
  const theme = getTheme();

  return {
    "--primary-color": theme.colors.primary,
    "--secondary-color": theme.colors.secondary,
    "--background-color": theme.colors.background,
    "--text-color": theme.colors.text,
    "--heading-font": theme.fonts.heading,
    "--body-font": theme.fonts.body,
  } as CSSProperties;
}