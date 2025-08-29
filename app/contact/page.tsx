import { useState } from 'react';
import TurnstileWidget from '@/components/TurnstileWidget';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, token }),
      });
      if (res.ok) {
        setStatus('Thank you for reaching out. We have received your message and will respond shortly.');
        e.currentTarget.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus(body?.error || 'An error occurred while submitting your message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('An unexpected error occurred.');
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="mb-6">If you have any questions or need assistance, please use the form below to send us a message.</p>
      {status && <p className="mb-4 text-green-700">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        {siteKey && (
          <div className="mt-2">
            <TurnstileWidget siteKey={siteKey} onVerify={setToken} />
          </div>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
        >
          {submitting ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}