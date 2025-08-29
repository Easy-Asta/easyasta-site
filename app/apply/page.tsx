'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ApplySchema, type ApplyInput } from './schema'
import { Field, Error } from '@/components/FormInput'
import { useState } from 'react'

export const metadata = { title: 'Apply — EasyASTA' }

export default function Page(){
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ApplyInput>({
    resolver: zodResolver(ApplySchema)
  })
  const [result, setResult] = useState<{ok:boolean, id?: string, error?: string} | null>(null)

  async function onSubmit(values: ApplyInput){
    setResult(null)
    const res = await fetch('/api/apply', { method: 'POST', body: JSON.stringify(values) })
    const data = await res.json()
    setResult(data)
    if(data.ok) window.location.href = `/status?id=${encodeURIComponent(data.id)}`
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">ESTA Assisted Application</h1>
      <p className="text-slate-600 mb-6">We will validate your answers and prepare your ESTA. We never log sensitive details in the browser console.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <Field label="Given name"><input className="input" {...register('givenName')} /></Field><Error error={errors.givenName} />
        <Field label="Family name"><input className="input" {...register('familyName')} /></Field><Error error={errors.familyName} />
        <Field label="Email"><input className="input" type="email" {...register('email')} /></Field><Error error={errors.email} />
        <Field label="Nationality (country of passport)"><input className="input" {...register('nationality')} /></Field><Error error={errors.nationality} />
        <Field label="Passport number"><input className="input" {...register('passportNumber')} /></Field><Error error={errors.passportNumber} />
        <Field label="Date of birth (YYYY‑MM‑DD)"><input className="input" placeholder="1980-01-31" {...register('dob')} /></Field><Error error={errors.dob} />
        <div className="grid sm:grid-cols-2 gap-3">
          <div><Field label="Planned arrival date (optional)"><input className="input" placeholder="2025-12-15" {...register('plannedArrival')} /></Field></div>
          <div><Field label="Planned departure date (optional)"><input className="input" placeholder="2026-01-02" {...register('plannedDeparture')} /></Field></div>
        </div>
        <div className="card">
          <p className="font-semibold mb-2">Eligibility (optional screening)</p>
          <label className="flex items-center gap-2"><input type="checkbox" {...register('criminalHistory')} /> Criminal record history</label>
          <label className="flex items-center gap-2"><input type="checkbox" {...register('communicableDisease')} /> Communicable disease</label>
          <label className="flex items-center gap-2"><input type="checkbox" {...register('overstayedBefore')} /> Overstayed a U.S. visit before</label>
        </div>
        <button className="btn btn-primary" disabled={isSubmitting} type="submit">{isSubmitting ? 'Submitting...' : 'Submit'}</button>
      </form>
      {result && !result.ok && <p className="text-red-700 mt-3">{result.error}</p>}
      <p className="text-xs text-slate-500 mt-6">We are not affiliated with the U.S. Government. You can apply directly with CBP and pay only the official fee.</p>
    </div>
  )
}
