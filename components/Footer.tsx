import Link from 'next/link';

/**
 * Simple footer component for the EasyASTA website. Contains copyright
 * information and a few secondary links. Adjust as needed to include
 * additional legal notices or contact details.
 */
export default function Footer() {
  return (
    <footer className="bg-neutral text-gray-700 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} EasyASTA. All rights reserved.</p>
        <div className="flex space-x-4 text-sm mt-2 md:mt-0">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <Link href="/cookies" className="hover:underline">Cookies</Link>
          <Link href="/data-rights" className="hover:underline">Data Rights</Link>
        </div>
      </div>
    </footer>
  );
}