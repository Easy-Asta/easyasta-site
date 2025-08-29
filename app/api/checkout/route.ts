import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_PRICE_GBP_50) {
    return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 });
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-08-16',
  });
  try {
    const body = await req.json();
    const { reference, email } = body;
    if (!reference || !email) {
      return NextResponse.json({ error: 'Missing reference or email' }, { status: 400 });
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price: process.env.STRIPE_PRICE_GBP_50,
          quantity: 1,
        },
      ],
      currency: 'gbp',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/status?ref=${reference}&success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/status?ref=${reference}&canceled=1`,
      metadata: {
        reference,
      },
    });
    return NextResponse.json({ id: session.id, url: session.url });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}