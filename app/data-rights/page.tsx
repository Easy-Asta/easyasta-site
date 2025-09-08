'use client';
This page allows users to submit data rights requests (e.g. access or erasure requests).
// It renders a simple form with fields for name, email, request type and message.
// When submitted, the form posts to the `/api/data-rights` endpoint defined in this project.

import { useState } from 'react';

export default function DataRightsPage() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch('/api/data-rights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('Your request has been submitted. We will reach out shortly.');
        e.currentTarget.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus(body?.error || 'An error occurred submitting your request.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An unexpected error occurred.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Data Rights Request</h1>
      <p className="mb-6">
        Under applicable data protection laws (such as GDPR), you have the right to request
        access to or erasure of your personal data. Please complete the form below to
        submit your request. A member of our team will contact you to verify your identity and
        confirm your request.
      </p>
      {status && (
        <div className="mb-4 text-sm text-green-700">
          {status}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="requestType">Request Type</label>
          <select
            id="requestType"
            name="requestType"
            required
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="access">Access my data</option>
            <option value="erasure">Erase my data</option>
            <option value="correction">Correct my data</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="message">Additional Details (optional)</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 rounded bg-primary text-white disabled:opacity-50"
          >
            {submitting ? 'Submitting…' : 'Submit Request'}
          </button>
        </div>
      </form>
    </div>
  );
}
