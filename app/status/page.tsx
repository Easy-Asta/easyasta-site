'use client'
import { useEffect, useState } from 'react'

type R = { ok: boolean, status?: string, id?: string, createdAt?: number, error?: string }

export default function Page(){
  const url = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
  const initialId = url.get('id') || ''
  const [id, setId] = useState(initialId)
  const [email, setEmail] = useState('')
  const [res, setRes] = useState<R | null>(null)

  async function lookup(e?: React.FormEvent){
    e?.preventDefault()
    setRes(null)
    const r = await fetch('/api/status', { method: 'POST', body: JSON.stringify({ id, email }) })
    setRes(await r.json())
  }

  useEffect(()=>{ if(initialId) lookup() }, [])

  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Track your application</h1>
      <form onSubmit={lookup} className="space-y-3">
        <label className="label">Reference ID</label>
        <input className="input" value={id} onChange={e=>setId(e.target.value)} placeholder="EA-XXXX" />
        <label className="label">Email used in application</label>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="you@example.com" />
        <button className="btn btn-primary" type="submit">Look up status</button>
      </form>
      {res && (
        <div className="card">
          {res.ok ? <div>
            <p><strong>ID:</strong> {res.id}</p>
            <p><strong>Status:</strong> {res.status}</p>
            <p className="text-xs text-slate-600">Created: {res.createdAt ? new Date(res.createdAt).toLocaleString() : ''}</p>
          </div> : <p className="text-red-700">{res.error}</p>}
        </div>
      )}
    </div>
  )
}
