import { NextRequest } from 'next/server';
import { resend } from '@/lib/resend';

export async function POST(req: NextRequest) {
  const { to, subject, bodyHtml } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'EasyAster <support@easyaster.com>',
      to,
      subject,
      html: bodyHtml,
    });
    if (error) {
      throw error;
    }
    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}