import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import { client } from "@/config/client";
import ThemeProvider from "@/themes/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: client.business.name,
    template: `%s | ${client.business.name}`,
  },
  description: client.business.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}