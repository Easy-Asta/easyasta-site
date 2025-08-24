"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApplication } from '@/components/ApplicationContext';

/**
 * Step 3 – Personal Information
 *
 * Collects the applicant's personal details such as name, date of birth,
 * citizenship and contact information. The fields mirror the official
 * ESTA form but can be extended later to include additional data.
 */
export default function Step3Info() {
  const router = useRouter();
  const { data, update } = useApplication();
  const [form, setForm] = useState({ ...data.info });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    update({ info: form });
    router.push('/apply/step4-passport');
  }

  const canContinue =
    form.firstName && form.lastName && form.birthDate && form.citizenship && form.email && form.phone;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold">Personal Information</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">First Name</label>
          <input
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Last Name</label>
          <input
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Date of Birth</label>
          <input
            name="birthDate"
            type="date"
            value={form.birthDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Citizenship</label>
          <input
            name="citizenship"
            type="text"
            value={form.citizenship}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Country"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Phone</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
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