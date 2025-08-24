"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApplication } from '@/components/ApplicationContext';

/**
 * Step 5 – Travel Plans
 *
 * Gathers information about the applicant's intended travel to the
 * United States. This includes arrival and departure dates and a U.S.
 * address. Additional fields (such as flight number) can be added
 * later as requirements evolve.
 */
export default function Step5Travel() {
  const router = useRouter();
  const { data, update } = useApplication();
  const [form, setForm] = useState({ ...data.travel });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    update({ travel: form });
    router.push('/apply/step6-uploads');
  }

  const canContinue = form.arrivalDate && form.departureDate && form.address;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold">Travel Plans</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Arrival Date</label>
          <input
            name="arrivalDate"
            type="date"
            value={form.arrivalDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Departure Date</label>
          <input
            name="departureDate"
            type="date"
            value={form.departureDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>
      </div>
      <div>
        <label className="block mb-1">U.S. Address</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          rows={3}
          placeholder="Address during your stay in the United States"
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!canContinue}
          className={`px-4 py-2 rounded-md text-white ${canContinue ? 'bg-blue-600' : 'bg-gray-400'}`}
        >
          Continue
        </button>
      </div>
    </form>
  );
}