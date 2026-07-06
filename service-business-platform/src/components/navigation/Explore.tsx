import Link from "next/link";
import { client } from "@/config/client";

export default function Explore() {
  return (
    <div style={{ padding: 16, borderBottom: "1px solid #eee" }}>
      <strong>{client.copy?.exploreLabel}</strong>{" "}

      {client.navigation.map((item) => (
        <Link key={item.href} href={item.href} style={{ marginRight: 12 }}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}