import Link from 'next/link'
import PriceBreakdown from '@/components/PriceBreakdown'
import Alert from '@/components/Alert'

export default function Page(){
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <span className="badge">ASTA = Assisted Secure Travel Applications</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold">Apply · Submit · Track · Approve</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Fast, friendly help to get your U.S. ESTA right the first time. We’re not a government website — we’re a private service that prepares your application and keeps you updated.</p>
        <div className="flex gap-3 justify-center">
          <Link className="btn btn-primary" href="/apply">Start application</Link>
          <Link className="btn" href="/how-it-works">How it works</Link>
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-6">
        <PriceBreakdown />
        <div className="card">
          <h3 className="font-semibold mb-2">Why EasyASTA?</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Clear steps and checks before submission</li>
            <li>Email updates and status tracker</li>
            <li>Multilingual support (EN, ES, FR, AR, UR)</li>
            <li>Secure forms, anti‑bot protection, and privacy by design</li>
          </ul>
        </div>
      </section>
      <Alert>Prefer to DIY? Apply direct with U.S. CBP for just the official fee. We’ll always show you that option.</Alert>
    </div>
  )
}
