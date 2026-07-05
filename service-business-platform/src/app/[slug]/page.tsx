import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageRenderer from "@/components/PageRenderer";
import { getClientPage, getClientPageStaticParams } from "@/lib/client-pages";

type SlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getClientPageStaticParams();
}

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getClientPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.subtitle,
  };
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const page = getClientPage(slug);

  if (!page) {
    notFound();
  }

  return <PageRenderer page={page} />;
}
