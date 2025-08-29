'use client'
import { useEffect, useState } from 'react'

function currentOfficialFee(now: Date){
  // As per Federal Register, new fee applies starting 2025-09-30
  const changeDate = new Date('2025-09-30T00:00:00Z')
  return now >= changeDate ? 40 : 21
}

export default function PriceBreakdown(){
  const [fee, setFee] = useState<number|null>(null)
  useEffect(()=>{ setFee(currentOfficialFee(new Date())) },[])
  return (
    <div className="card">
      <h3 className="font-semibold mb-2">Transparent pricing</h3>
      <ul className="space-y-2">
        <li className="flex items-center justify-between"><span>Service fee (EasyASTA)</span><span>£50</span></li>
        <li className="flex items-center justify-between"><span>Official ESTA fee (paid to U.S. CBP)</span><span>{fee ? `$${fee}` : '$—'}</span></li>
      </ul>
      <p className="text-xs text-slate-600 mt-3">Official fee auto‑updates based on date. You can also apply directly at the CBP website.</p>
    </div>
  )
}
