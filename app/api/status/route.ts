import { NextResponse } from 'next/server'
import { getRepo } from '@/lib/submissions/repo'

export async function POST(req: Request){
  try {
    const { id, email } = await req.json()
    if(!id || !email) return NextResponse.json({ ok: false, error: 'Missing id or email' }, { status: 400 })
    const repo = getRepo()
    const s = await repo.getById(id)
    if(!s) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
    if(s.applicant.email.toLowerCase() !== String(email).toLowerCase()){
      return NextResponse.json({ ok: false, error: 'Email does not match' }, { status: 403 })
    }
    return NextResponse.json({ ok: true, id: s.id, status: s.status, createdAt: s.createdAt })
  } catch {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
