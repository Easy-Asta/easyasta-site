"use client";

import { useState, useEffect } from 'react';
import { useApplication } from '@/components/ApplicationContext';

/**
 * Step 9 – Submission
 *
 * Once payment has been processed, this step submits the accumulated
 * application data to the backend. A new Application record is
 * created in the database. Users see a confirmation and their
 * application ID for reference. In a production implementation,
 * additional actions such as sending confirmation emails would be
 * triggered here.
 */
export default function Step9Submission() {
  const { data } = useApplication();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [appId, setAppId] = useState<string>('');

  useEffect(() => {
    async function submit() {
      try {
        const res = await fetch('/api/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data }),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || 'Submission failed');
        setAppId(json.applicationId);
        setStatus('success');
      } catch (err) {
        setStatus('error');
      }
    }
    submit();
  }, [data]);

  if (status === 'loading') {
    return <p>Submitting your application…</p>;
  }
  if (status === 'error') {
    return <p className="text-red-600">There was an error submitting your application.</p>;
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Application Submitted</h1>
      <p>Thank you for your application. Your reference number is:</p>
      <p className="font-mono text-lg">{appId}</p>
      <p>
        We have received your information and will process it shortly. You will receive an email
        confirmation with further details.
      </p>
    </div>
  );
}