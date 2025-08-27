export default function InfoPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">About the ESTA Process</h1>
      <p>
        The Electronic System for Travel Authorization (ESTA) allows citizens of Visa Waiver
        Program (VWP) countries to travel to the United States for tourism, business, or
        transit for stays of up to 90 days without obtaining a visa. ESTA approvals are valid
        for two years, or until your passport expires, whichever comes first.
      </p>
      <h2 className="text-xl font-semibold">Requirements</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Valid e-passport from a Visa Waiver Program country</li>
        <li>Purpose of travel: tourism, business, or transit</li>
        <li>Stay duration: up to 90 days</li>
        <li>Approved ESTA prior to boarding</li>
      </ul>
      <h2 className="text-xl font-semibold">Common Mistakes</h2>
      <p>
        Ensure your passport details are correct, your purpose of travel matches ESTA
        requirements, and you disclose any prior U.S. visa denials or criminal history. If you
        are unsure about your eligibility, consult our FAQ or contact support.
      </p>
      <h2 className="text-xl font-semibold">FAQ</h2>
      <details>
        <summary>How long does it take to get an ESTA?</summary>
        <p>Most applications are approved within minutes; however, it can take up to 72 hours.</p>
      </details>
      <details>
        <summary>How long is my ESTA valid?</summary>
        <p>Your ESTA is valid for two years or until your passport expires, whichever is sooner.</p>
      </details>
      <details>
        <summary>Can I extend my stay beyond 90 days?</summary>
        <p>No, ESTA does not allow stays longer than 90 days. You must obtain a visa.</p>
      </details>
    </div>
  );
}