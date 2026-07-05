import { client } from "@/config/client";

export function getClientPage(slug: string) {
  return client.pages.find((page) => page.slug === slug);
}

export function getClientPageSlugs() {
  return client.pages.map((page) => page.slug);
}

export function getClientPageStaticParams() {
  return getClientPageSlugs().map((slug) => ({ slug }));
}
