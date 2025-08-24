"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApplication } from '@/components/ApplicationContext';

/**
 * Step 4 – Passport Details
 *
 * Collects the applicant's passport information including number,
 * expiration date and issuing country. These details are essential
 * for the ESTA application.
 */
export default function Step4Passport() {
  const router = useRouter();
  const { data, update } = useApplication();
  const [form, setForm] = useState({ ...data.passport });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    update({ passport: form });
    router.push('/apply/step5-travel');
  }

  const canContinue = form.number && form.expiry && form.country;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold">Passport Details</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1">Passport Number</label>
          <input
            name="number"
            type="text"
            value={form.number}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Expiration Date</label>
          <input
            name="expiry"
            type="date"
            value={form.expiry}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Issuing Country</label>
          <input
            name="country"
            type="text"
            value={form.country}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Country"
            required
          />
        </div>
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