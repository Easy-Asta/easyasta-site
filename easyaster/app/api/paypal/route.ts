import { NextRequest } from 'next/server';
import { createOrder, captureOrder } from '@/lib/paypal';

export async function POST(req: NextRequest) {
  const { amount } = await req.json();
  try {
    const orderId = await createOrder(amount);
    return new Response(JSON.stringify({ orderId }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const orderId = req.nextUrl.searchParams.get('orderId') as string;
  try {
    const result = await captureOrder(orderId);
    return new Response(JSON.stringify({ result }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}