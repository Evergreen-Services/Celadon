import { client } from "@/config/client";

export default function Hero() {
  return (
    <section style={{ padding: 40 }}>
      <h2>Professional Lawn Care</h2>
      <p>{client.tagline}</p>

      <a
        href="/pay"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: 12,
          background: "green",
          color: "white"
        }}
      >
        Pay Online
      </a>
    </section>
  );
}