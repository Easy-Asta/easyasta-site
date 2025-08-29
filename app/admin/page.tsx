'use client'
import { useEffect, useState } from 'react'

type S = {
  id: string; createdAt: number; status: string;
  applicant: { givenName: string; familyName: string; email: string; nationality: string; passportNumber: string; dob: string }
}

export default function Page(){
  const [items, setItems] = useState<S[]>([])

  async function load(){
    const r = await fetch('/api/admin/submissions')
    const data = await r.json(); setItems(data.items || [])
  }
  useEffect(()=>{ load() }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin — Submissions</h1>
      <div className="grid gap-3">
        {items.map(it => (
          <div key={it.id} className="card">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{it.id}</div>
              <div className="text-sm">{new Date(it.createdAt).toLocaleString()}</div>
            </div>
            <p className="text-sm">{it.applicant.givenName} {it.applicant.familyName} • {it.applicant.email} • {it.applicant.nationality}</p>
            <p className="text-sm">Status: <strong>{it.status}</strong></p>
          </div>
        ))}
      </div>
    </div>
  )
}
