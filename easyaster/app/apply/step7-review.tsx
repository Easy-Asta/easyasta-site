"use client";

import { useRouter } from 'next/navigation';
import { useApplication } from '@/components/ApplicationContext';

/**
 * Step 7 – Review
 *
 * Displays a summary of all the information entered by the user in
 * previous steps. Users should confirm that everything is correct
 * before proceeding to payment. You can extend this page with edit
 * links to individual steps in the future.
 */
export default function Step7Review() {
  const router = useRouter();
  const { data } = useApplication();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Review Your Information</h1>
      <section className="space-y-2">
        <h2 className="font-semibold">Personal Information</h2>
        <p>
          Name: {data.info.firstName} {data.info.lastName}
        </p>
        <p>Date of Birth: {data.info.birthDate}</p>
        <p>Citizenship: {data.info.citizenship}</p>
        <p>Email: {data.info.email}</p>
        <p>Phone: {data.info.phone}</p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold">Passport</h2>
        <p>Number: {data.passport.number}</p>
        <p>Expiry: {data.passport.expiry}</p>
        <p>Country: {data.passport.country}</p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold">Travel</h2>
        <p>Arrival: {data.travel.arrivalDate}</p>
        <p>Departure: {data.travel.departureDate}</p>
        <p>U.S. Address: {data.travel.address}</p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold">Uploads</h2>
        {data.uploads.passportImageUrl ? (
          <a
            href={data.uploads.passportImageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View uploaded passport
          </a>
        ) : (
          <p>No document uploaded.</p>
        )}
      </section>
      <div className="flex justify-end">
        <button
          onClick={() => router.push('/apply/step8-payment')}
          className="px-4 py-2 rounded-md bg-blue-600 text-white"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}