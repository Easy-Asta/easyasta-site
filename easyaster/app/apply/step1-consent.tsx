"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApplication } from '@/components/ApplicationContext';

export default function Step1Consent() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const { update } = useApplication();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Consent & Data Agreement</h1>
      <p>
        Before proceeding, please agree to our processing of your personal data for the purpose of
        facilitating your ESTA application. See our Privacy Policy for details.
      </p>
      <label className="flex items-center space-x-2">
        <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
        <span>I consent to the processing of my data.</span>
      </label>
      <button
        disabled={!agreed}
        onClick={() => {
          update({ consent: true });
          router.push('/apply/step2-eligibility');
        }}
        className={`px-4 py-2 rounded-md text-white ${agreed ? 'bg-blue-600' : 'bg-gray-400'}`}
      >
        Continue
      </button>
    </div>
  );
}