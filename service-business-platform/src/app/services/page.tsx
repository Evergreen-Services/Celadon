import PageRenderer from "@/components/PageRenderer";
import { client } from "@/config/client";

export default function ServicesPage() {
  const page = client.pages.find((entry) => entry.slug === "services");

  if (!page) {
    return null;
  }

  return <PageRenderer page={page} />;
}