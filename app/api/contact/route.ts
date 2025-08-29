import { NextResponse } from 'next/server';

// Only import Resend if the API key is available
let Resend: any;
const resendApiKey = process.env.RESEND_API_KEY;
const fromAddress = process.env.RESEND_FROM;
const supportEmail = process.env.SUPPORT_EMAIL || process.env.RESEND_FROM;

if (resendApiKey) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Resend = require('resend').Resend;
  } catch (_) {
    Resend = undefined;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, token } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    // TODO: verify token using reCAPTCHA/Turnstile secret if configured
    const html = `
      <p><strong>New contact form submission</strong></p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;
    if (!resendApiKey || !fromAddress || !supportEmail || !Resend) {
      console.warn('Resend API not configured. Email not sent.');
      return NextResponse.json({ ok: true }, { status: 200 });
    }
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: fromAddress!,
      to: supportEmail!,
      subject: 'New contact form submission',
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}