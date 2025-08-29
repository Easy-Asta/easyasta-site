export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At EasyASTA we take your privacy seriously. This privacy policy explains how we collect,
        use and protect your personal information. We comply with the General Data Protection
        Regulation (GDPR) and other applicable data protection laws.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">What information we collect</h2>
      <p>
        When you submit an application or contact us we collect your name, email address,
        passport details and other information necessary to process your ESTA application. We
        do not sell your data to third parties.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">How we use your information</h2>
      <p>
        We use your information to process and submit your ESTA application to the U.S. Customs and
        Border Protection agency, to communicate with you about your application status and to
        improve our service. We may retain your information for compliance and record‑keeping as
        required by law.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Data security</h2>
      <p>
        We use industry‑standard encryption and follow best practices to protect your data in transit
        and at rest. Access to your personal information is restricted to authorized personnel
        only.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Your rights</h2>
      <p>
        You have the right to access, correct or erase your personal data. To exercise your rights
        please use our <a href="/data-rights" className="underline text-primary">Data Rights Request</a> form.
      </p>
    </div>
  );
}