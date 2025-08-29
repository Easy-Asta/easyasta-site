import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if(req.nextUrl.pathname.startsWith('/admin')){
    const cookie = req.cookies.get('ea_admin')
    if(cookie?.value === process.env.ASTA_ADMIN_TOKEN){
      return NextResponse.next()
    }
    // allow access to /admin/login
    if(req.nextUrl.pathname === '/admin/login'){
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
