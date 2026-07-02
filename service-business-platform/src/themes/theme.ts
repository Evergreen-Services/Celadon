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

export function getThemeVariables() { 
  const theme = getTheme();
  
    const root = document.documentElement;
    root.style.setProperty("--primary-color", theme.colors.primary);
    root.style.setProperty("--secondary-color", theme.colors.secondary);
    root.style.setProperty("--background-color", theme.colors.background);
    root.style.setProperty("--text-color", theme.colors.text);
    root.style.setProperty("--heading-font", theme.fonts.heading);
    root.style.setProperty("--body-font", theme.fonts.body);

}