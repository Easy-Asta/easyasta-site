import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(){
  const key = process.env.STRIPE_SECRET_KEY
  const price = process.env.STRIPE_PRICE_SERVICE_FEE_GBP
  if(!key || !price) return NextResponse.json({ ok: false, error: 'Stripe not configured' }, { status: 500 })
  const stripe = new Stripe(key, { apiVersion: '2024-06-20' })
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/apply?paid=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
    currency: 'gbp'
  })
  return NextResponse.json({ ok: true, url: session.url })
}
