import { client } from "@/config/client";

export default function Services() {
  if (!client.features.services) return null;

  const services = client.business.services || [];
  return (
    <section style={{ padding: 48 }}>
      <h3>Services</h3>
      <ul>
        {services.map((service: string, index: number) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
}