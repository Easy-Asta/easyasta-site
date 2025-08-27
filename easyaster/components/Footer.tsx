export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} EasyAster. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy" className="underline">Privacy Policy</a> ·{' '}
          <a href="/terms" className="underline">Terms & Conditions</a> ·{' '}
          <a href="/cookies" className="underline">Cookie Policy</a>
        </p>
      </div>
    </footer>
  );
}