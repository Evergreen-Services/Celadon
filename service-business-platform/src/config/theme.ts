import type { ClientTheme } from "./types";

export const theme: ClientTheme = {
  colors: {
    primary: "#2F6B3F",
    primaryContrast: "#FFFFFF",
    secondary: "#51805c",
    secondaryContrast: "#FFFFFF",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    text: "#1B1B1B",
    mutedText: "rgba(27, 27, 27, 0.72)",
    border: "rgba(0, 0, 0, 0.10)",
  },
  fonts: {
    heading: "var(--font-geist-sans), system-ui, sans-serif",
    body: "var(--font-geist-sans), system-ui, sans-serif",
  },
  radii: {
    button: "0.375rem",
    card: "0.5rem",
    panel: "1rem",
  },
  shadows: {
    card: "0 1px 2px rgba(0, 0, 0, 0.05)",
    elevated: "0 12px 30px rgba(27, 27, 27, 0.12)",
  },
};

export default theme;
