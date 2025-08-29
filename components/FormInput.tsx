import { FieldError } from 'react-hook-form'

export function Field({ label, children }: { label: string, children: React.ReactNode }){
  return <label className='block mb-3'>
    <div className='label'>{label}</div>
    {children}
  </label>
}

export function Error({ error }: { error?: FieldError }){
  if(!error) return null
  return <p className='text-sm text-red-700 mt-1'>{error.message}</p>
}
