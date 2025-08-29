import { NextResponse } from 'next/server'
import { getRepo } from '@/lib/submissions/repo'

export async function GET(){
  const repo = getRepo()
  const items = await repo.list()
  return NextResponse.json({ items })
}
