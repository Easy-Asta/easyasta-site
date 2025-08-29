import { NextResponse } from 'next/server'
export async function POST(){ 
  // TODO: verify signature and mark invoice paid
  return NextResponse.json({ ok: true })
}
