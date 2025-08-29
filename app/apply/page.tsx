import { useState } from 'react';
import TurnstileWidget from '@/components/TurnstileWidget';

type ApplicantData = {
  fullName: string;
  email: string;
  passportNumber: string;
  country: string;
};

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ApplicantData>({
    fullName: '',
    email: '',
    passportNumber: '',
    country: '',
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
  function handleVerify(token: string) {
    setCaptchaToken(token);
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: send data to API and proceed to payment step
    alert('This is a placeholder form. In a full implementation your application would be submitted and you would proceed to payment.');
  }
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Apply for ESTA</h1>
      {step === 1 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block mb-1 font-medium">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={data.fullName}
              onChange={handleChange}
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
              value={data.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label htmlFor="passportNumber" className="block mb-1 font-medium">Passport Number</label>
            <input
              id="passportNumber"
              name="passportNumber"
              type="text"
              required
              value={data.passportNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label htmlFor="country" className="block mb-1 font-medium">Country of Citizenship</label>
            <input
              id="country"
              name="country"
              type="text"
              required
              value={data.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          {/* Insert Turnstile or reCAPTCHA widget if configured */}
          {siteKey && (
            <div className="mt-2">
              <TurnstileWidget siteKey={siteKey} onVerify={handleVerify} />
            </div>
          )}
          <p className="text-sm text-gray-600">
            By continuing you agree to pay the official ESTA fee ($21) and our service fee. You will
            be redirected to a secure payment page after submitting your information.
          </p>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
          >
            Continue to Payment
          </button>
        </form>
      )}
      {step === 2 && (
        <div>
          {/* Payment step would go here. In a full implementation this would create a Stripe Checkout session or PayPal order. */}
          <p>Payment step placeholder. In a full implementation you would be redirected to Stripe or PayPal.</p>
        </div>
      )}
    </div>
  );
}