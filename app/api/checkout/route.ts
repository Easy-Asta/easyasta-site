import { stripe } from '@/lib/stripe';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { amount, currency, metadata } = await req.json();
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency,
            product_data: { name: 'EasyAster Service Fee' },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/apply/step9-submission?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/apply/step8-payment`,
      metadata,
    });
    return new Response(JSON.stringify({ sessionId: session.id }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}