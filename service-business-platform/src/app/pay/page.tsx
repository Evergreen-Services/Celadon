import { client } from "@/config/client";

export default function PayPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Pay Your Bill</h1>

      <p>Click below to pay securely online.</p>

      <a
        href={client.stripePaymentLink}
        style={{
          display: "inline-block",
          padding: 16,
          background: "black",
          color: "white"
        }}
      >
        Pay Now
      </a>
    </div>
  );
}