import Stripe from 'stripe';

// Server-side Stripe instance. Make sure STRIPE_SECRET_KEY is defined in your env.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
});

// On the client, use getStripe() from stripe-js library via Next.js dynamic import.