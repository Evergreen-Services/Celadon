import { client } from "@/config/client";
import Button from "@/components/ui/Button";

export default function Payments({ compact = false }: { compact?: boolean }) {
  if (!client.features.payments) return null;

  return (
    <section
      className={`px-6 text-center ${compact ? "py-16" : "py-24"} bg-[var(--color-secondary)]`}
    >
      <h2 className="text-2xl md:text-3xl font-bold">Pay Your Bill Online</h2>
      <p className="mt-3 text-[var(--color-text)]/80 max-w-md mx-auto">
        Secure, fast, and easy. Pay with a credit card, debit card, Apple Pay, or Google Pay.
      </p>

      <div className="mt-8">
        <Button href={client.payments.stripePaymentLink} external className="text-lg px-8 py-4">
          Pay Now
        </Button>
      </div>

      <p className="mt-4 text-xs text-[var(--color-text)]/50">
        Payments are processed securely by Stripe. We never see or store your card details.
      </p>
    </section>
  );
}