import { client } from "@/config/client";

export default function Payments() {
  if (!client.features.payments) return null;

  return (
    <section style={{ padding: 48 }}>
      <h3>Pay Online</h3>

      <a
        href={client.payments.stripePaymentLink}
        target="_blank"
      >
        Pay Now
      </a>
    </section>
  );
}