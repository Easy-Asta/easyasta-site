// API route for handling data rights requests.
// This endpoint accepts POST requests with JSON body containing name, email, requestType and message.
// It sends an email to the DPO (Data Protection Officer) or support team using Resend.

import { NextResponse } from 'next/server';

// Only import Resend if the API key is available. This avoids bundling optional dependency when unused.
let Resend: any;
const resendApiKey = process.env.RESEND_API_KEY;
const fromAddress = process.env.RESEND_FROM;
const dpoEmail = process.env.DPO_EMAIL || process.env.DP_EMAIL || process.env.RESEND_FROM;

if (resendApiKey) {
  try {
    // Dynamically import resend to avoid bundling unused dependencies
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Resend = require('resend').Resend;
  } catch (_) {
    Resend = undefined;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, requestType, message } = body;
    if (!name || !email || !requestType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const html = `
      <p><strong>Data rights request received</strong></p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Request type:</strong> ${requestType}</p>
      <p><strong>Message:</strong></p>
      <p>${message || '(none)'}</p>
    `;
    if (!resendApiKey || !fromAddress || !dpoEmail || !Resend) {
      console.warn('Resend API not configured. Email not sent.');
      return NextResponse.json({ ok: true }, { status: 200 });
    }
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: fromAddress!,
      to: dpoEmail!,
      subject: 'New Data Rights Request',
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}