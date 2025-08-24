import { NextRequest } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(req: NextRequest) {
  const blob = await req.blob();
  const filename = req.nextUrl.searchParams.get('filename') ?? 'file';
  try {
    const result = await put(filename, blob, { access: 'private', addRandomSuffix: true });
    return new Response(JSON.stringify({ url: result.url }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}