import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripeSecret || !webhookSecret) {
    return NextResponse.json({ error: 'Stripe webhook not configured' }, { status: 500 });
  }
  const stripe = new Stripe(stripeSecret, {
    apiVersion: '2023-08-16',
  });
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature') ?? '';
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, sig, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      // TODO: mark application as paid/complete in the database
      console.log('Checkout session completed', session.id, session.metadata);
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  return NextResponse.json({ received: true });
}