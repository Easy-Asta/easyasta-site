"use client";
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useRouter } from 'next/navigation';

export default function Step8Payment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  async function handleStripePayment() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 5000, // £50 service fee in pence (example, convert to smallest unit)
          currency: 'gbp',
          metadata: { service: 'ESTA' },
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Payment failed');
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: data.sessionId });
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Payment</h1>
      <p>Total due: £50 service fee + $21 official ESTA fee (paid separately).</p>
      {error && <p className="text-red-600">{error}</p>}
      {/* Show Stripe button only if key is configured */}
      {stripeKey ? (
        <button
          onClick={handleStripePayment}
          disabled={loading}
          className="px-4 py-2 rounded-md bg-blue-600 text-white shadow-md hover:bg-blue-700 active:translate-y-px"
        >
          Pay with Stripe
        </button>
      ) : (
        <p className="text-yellow-700">Stripe configuration missing. Please set your Stripe keys.</p>
      )}
      {/* Render PayPal buttons only if client ID exists */}
      {paypalClientId ? (
        <div>
          <PayPalScriptProvider options={{ 'client-id': paypalClientId }}>
            <PayPalButtons
              createOrder={async () => {
                const res = await fetch('/api/paypal', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ amount: '50.00' }),
                });
                const data = await res.json();
                return data.orderId;
              }}
              onApprove={async (data) => {
                await fetch(`/api/paypal?orderId=${data.orderID}`, { method: 'PUT' });
                router.push('/apply/step9-submission');
              }}
            />
          </PayPalScriptProvider>
        </div>
      ) : (
        <p className="text-yellow-700">PayPal configuration missing. Please set your PayPal client ID.</p>
      )}
    </div>
  );
}