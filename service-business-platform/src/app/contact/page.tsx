import PageRenderer from "@/components/PageRenderer";
import { client } from "@/config/client";

export default function ContactPage() {
  const page = client.pages.find((entry) => entry.slug === "contact");

  if (!page) {
    return null;
  }

  return <PageRenderer page={page} />;
}