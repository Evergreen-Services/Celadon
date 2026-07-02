import { client } from "@/config/client";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: 32,
        borderTop: "1px solid #eee"
      }}
    >
      <p>{client.business.name}</p>
      <p>{client.business.phone}</p>
    </footer>
  );
}