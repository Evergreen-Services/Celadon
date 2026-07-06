import type { Metadata } from "next";
import SiteLayout from "@/lib/SiteLayout";
import { client } from "@/config/client";
import { getThemeVariables } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(client.siteUrl),
  title: {
    default: client.business.name,
    template: `%s | ${client.business.name}`,
  },
  description: client.business.tagline,
  icons: {
    icon: client.branding.favicon,
  },
  openGraph: {
    title: client.business.name,
    description: client.business.tagline,
    images: client.branding.socialImage ? [client.branding.socialImage] : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={getThemeVariables()}>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
