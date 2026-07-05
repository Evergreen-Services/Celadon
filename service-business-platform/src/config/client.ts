import type { ClientConfig } from "./types";
import { branding } from "./branding";
import { theme } from "./theme";
import { pages } from "./pages";

export const siteUrl = "https://joes-lawn-care.example.com";

export const business: ClientConfig["business"] = {
  name: "Joe's Lawn Care",
  tagline: "Reliable lawn care you can trust",
  phone: "(555) 555-5555",
  email: "joe@lawncare.com",
  services: ["Mowing", "Edging", "Seasonal cleanup", "Fertilization", "Aeration"],
  serviceArea: ["Dallas", "Plano"],
};

export const features: ClientConfig["features"] = {
  hero: true,
  services: true,
  gallery: true,
  testimonials: true,
  contact: true,
  payments: true,
};

export const navigation: ClientConfig["navigation"] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Payments", href: "/payments" },
];

export const testimonials: ClientConfig["testimonials"] = [
  { name: "John Doe", quote: "Joe and his team did an amazing job with our lawn care needs!" },
];

export const client: ClientConfig = {
  siteUrl,
  business,
  branding,
  theme,
  features,
  pages,
  navigation,
  testimonials,
};

export { branding as clientBranding, theme as clientTheme, pages as clientPages };

