import { NextResponse } from 'next/server'
import { ApplySchema, type ApplyInput } from '@/app/apply/schema'
import { verifyTurnstile } from '@/lib/security/captcha'
import { newId } from '@/lib/submissions/util'
import { getRepo } from '@/lib/submissions/repo'
import type { Submission } from '@/lib/submissions/types'

export async function POST(req: Request){
  try {
    const body = await req.text()
    const parsed = ApplySchema.safeParse(JSON.parse(body))
    if(!parsed.success){
      return NextResponse.json({ ok: false, error: 'Invalid input' }, { status: 400 })
    }
    const values: ApplyInput = parsed.data
    // Optional bot check
    const cf = (values as any).cfTurnstile as string | undefined
    if(cf){
      const ok = await verifyTurnstile(cf)
      if(!ok) return NextResponse.json({ ok: false, error: 'Bot verification failed' }, { status: 400 })
    }
    // Create submission
    const id = newId()
    const s: Submission = {
      id, createdAt: Date.now(), locale: 'en',
      applicant: {
        givenName: values.givenName,
        familyName: values.familyName,
        email: values.email,
        nationality: values.nationality,
        passportNumber: values.passportNumber,
        dob: values.dob,
      },
      travel: { plannedArrival: values.plannedArrival, plannedDeparture: values.plannedDeparture },
      eligibility: {
        criminalHistory: !!values.criminalHistory,
        communicableDisease: !!values.communicableDisease,
        overstayedBefore: !!values.overstayedBefore,
      },
      status: 'received'
    }
    const repo = getRepo()
    await repo.create(s)

    // TODO: send email confirmation via Resend (RESEND_API_KEY)
        // Email confirmation (if configured)
    try { const { sendReceiptEmail } = await import('@/lib/emails/send'); await sendReceiptEmail(s) } catch {}

    return NextResponse.json({ ok: true, id })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
