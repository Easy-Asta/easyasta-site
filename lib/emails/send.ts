import { Resend } from 'resend'
import type { Submission } from '@/lib/submissions/types'

export async function sendReceiptEmail(s: Submission){
  const key = process.env.RESEND_API_KEY
  const from = process.env.ASTA_SUPPORT_FROM_EMAIL
  if(!key || !from) return
  const resend = new Resend(key)
  const subject = `EasyASTA: we received your application ${s.id}`
  const body = [
    `Hello ${s.applicant.givenName},`,
    ``,
    `We received your application (${s.id}). You can track status here: ${process.env.NEXT_PUBLIC_BASE_URL}/status?id=${s.id}`,
    ``,
    `This email confirms receipt only. We will review and update you by email.`,
    ``,
    `— EasyASTA`,
  ].join('\n')
  await resend.emails.send({ from, to: s.applicant.email, subject, text: body })
}
