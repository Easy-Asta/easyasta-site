import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GA from '@/lib/analytics/ga'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'EasyASTA — Assisted Secure Travel Applications',
  description: 'Guided help for U.S. ESTA forms. Not affiliated with the U.S. Government.',
  openGraph: { title: 'EasyASTA', description: 'Assisted Secure Travel Applications', type: 'website' },
  alternates: { canonical: '/' }
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <GA />
        <Header />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
