import type { ClientConfig } from "./types";

export const branding: ClientConfig["branding"] = {
  favicon: "/favicon.ico",
  logo: {
    src: "/file.svg",
    alt: "Joe's Lawn Care logo",
    width: 32,
    height: 32,
  },
  heroImage: {
    src: "/globe.svg",
    alt: "Lawn care service area illustration",
  },
  socialImage: "/window.svg",
};

export default branding;
