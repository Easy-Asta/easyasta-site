import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <span className="text-2xl font-bold">EasyAster</span>
        </Link>
        <div className="space-x-4">
          <Link href="/apply">Apply</Link>
          <Link href="/info">Info</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}