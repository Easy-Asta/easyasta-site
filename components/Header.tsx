'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header(){
  const path = usePathname()
  return (
    <header className="border-b bg-white">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-bold">EasyASTA</Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/how-it-works" className={path?.startsWith('/how-it-works')?'font-semibold':''}>How it works</Link>
          <Link href="/pricing" className={path?.startsWith('/pricing')?'font-semibold':''}>Pricing</Link>
          <Link href="/apply" className={path?.startsWith('/apply')?'font-semibold':''}>Apply</Link>
          <Link href="/status" className={path?.startsWith('/status')?'font-semibold':''}>Track</Link>
          <Link href="/contact" className={path?.startsWith('/contact')?'font-semibold':''}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
