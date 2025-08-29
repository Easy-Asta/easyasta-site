export const metadata = { title: 'Contact & Support — EasyASTA' }

export default function Page(){
  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-2xl font-bold">Contact & Support</h1>
      <p>Email: <a href="mailto:support@easyasta.com" className="underline">support@easyasta.com</a></p>
      <p className="text-sm text-slate-600">SLA: we aim to respond within 24 hours.</p>
    </div>
  )
}
