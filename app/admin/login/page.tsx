'use client'
import { useState } from 'react'

export default function Page(){
  const [token, setToken] = useState('')
  async function login(e: React.FormEvent){
    e.preventDefault()
    document.cookie = `ea_admin=${encodeURIComponent(token)}; path=/; samesite=lax`
    window.location.href = '/admin'
  }
  return (
    <form onSubmit={login} className="max-w-sm space-y-3">
      <h1 className="text-2xl font-bold">Admin login</h1>
      <input className="input" value={token} onChange={e=>setToken(e.target.value)} placeholder="Admin token" />
      <button className="btn btn-primary" type="submit">Enter</button>
    </form>
  )
}
