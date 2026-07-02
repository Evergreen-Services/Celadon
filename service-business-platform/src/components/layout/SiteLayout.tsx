import { client } from "@/config/client";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header style={{ padding: 20 }}>
        <h1>{client.businessName}</h1>
        <p>{client.tagline}</p>
        <p>{client.phone}</p>
      </header>

      <main>{children}</main>

      <footer style={{ padding: 20 }}>
        <p>© {client.businessName}</p>
      </footer>
    </div>
  );
}