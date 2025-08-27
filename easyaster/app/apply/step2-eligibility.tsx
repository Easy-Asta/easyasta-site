"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApplication } from '@/components/ApplicationContext';

export default function Step2Eligibility() {
  const router = useRouter();
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const { update } = useApplication();
  const questions = [
    {
      id: 'vwp',
      text: 'Are you a citizen of a Visa Waiver Program country?',
    },
    {
      id: 'travelPurpose',
      text: 'Is your visit for tourism, business, or transit purposes?',
    },
    {
      id: 'duration',
      text: 'Is your planned stay 90 days or less?',
    },
  ];
  const allAnswered = questions.every(q => answers[q.id]);
  const eligible = allAnswered && Object.values(answers).every(a => a === 'yes');
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Eligibility</h1>
      {questions.map(q => (
        <div key={q.id} className="space-y-2">
          <p>{q.text}</p>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name={q.id}
                value="yes"
                onChange={() => setAnswers(prev => ({ ...prev, [q.id]: 'yes' }))}
                checked={answers[q.id] === 'yes'}
              />
              <span className="ml-1">Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name={q.id}
                value="no"
                onChange={() => setAnswers(prev => ({ ...prev, [q.id]: 'no' }))}
                checked={answers[q.id] === 'no'}
              />
              <span className="ml-1">No</span>
            </label>
          </div>
        </div>
      ))}
      {allAnswered && !eligible && (
        <p className="text-red-600">Based on your answers, you may not be eligible for ESTA.</p>
      )}
      <button
        disabled={!eligible}
        onClick={() => {
          update({ eligibility: answers });
          router.push('/apply/step3-info');
        }}
        className={`px-4 py-2 rounded-md text-white ${eligible ? 'bg-blue-600' : 'bg-gray-400'}`}
      >
        Continue
      </button>
    </div>
  );
}