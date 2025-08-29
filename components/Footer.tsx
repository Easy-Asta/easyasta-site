import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 text-sm text-slate-600 space-y-3">
        <p><strong>Non‑affiliation:</strong> EasyASTA is not a government website. You can apply directly via the official U.S. CBP ESTA portal at a lower cost.</p>
        <nav className="flex flex-wrap gap-4">
          <Link href="/legal/non-affiliation">Non‑Affiliation</Link>
          <Link href="/legal/terms">Terms</Link>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/cookies">Cookies</Link>
          <Link href="/legal/accessibility">Accessibility</Link>
        </nav>
        <p className="text-xs">© {new Date().getFullYear()} EasyASTA. All rights reserved.</p>
      </div>
    </footer>
  )
}
