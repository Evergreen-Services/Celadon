import { client } from "@/config/client";

export default function Hero() {

if (!client.features.hero) return null;

  return (
    <section style={{ padding: 40 }}>
      <h2>Professional Lawn Care</h2>
      <p>{client.business.tagline}</p>
    </section>
  );
}