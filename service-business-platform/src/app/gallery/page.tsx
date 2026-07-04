import PageRenderer from "@/components/PageRenderer";
import { client } from "@/config/client";

export default function GalleryPage() {
  const page = client.pages.find((entry) => entry.slug === "gallery");

  if (!page) {
    return null;
  }

  return <PageRenderer page={page} />;
}