import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Navigation bar for the EasyASTA website.
 * Displays links to the main sections of the site. On small screens the
 * navigation collapses into a hamburger menu (not yet implemented). The
 * currently active link is styled differently for better accessibility.
 */
export default function Navbar() {
  const pathname = usePathname();
  const linkClasses = (href: string) =>
    `px-3 py-2 rounded-md text-sm font-medium ${pathname === href ? 'text-white bg-primary' : 'text-gray-700 hover:bg-neutral-100 hover:text-primary'}`;
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="EasyASTA logo" className="h-8 w-auto" />
          <span className="text-xl font-semibold text-primary">EasyASTA</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className={linkClasses('/')}>Home</Link>
          <Link href="/eligibility" className={linkClasses('/eligibility')}>Eligibility</Link>
          <Link href="/apply" className={linkClasses('/apply')}>Apply</Link>
          <Link href="/pricing" className={linkClasses('/pricing')}>Pricing</Link>
          <Link href="/status" className={linkClasses('/status')}>Status</Link>
          <Link href="/faq" className={linkClasses('/faq')}>FAQ</Link>
          <Link href="/contact" className={linkClasses('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}