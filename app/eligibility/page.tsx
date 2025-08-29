
const countries = [
  'Andorra', 'Australia', 'Austria', 'Belgium', 'Brunei', 'Chile', 'Croatia', 'Czech Republic',
  'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland',
  'Italy', 'Japan', 'Republic of Korea', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg',
  'Malta', 'Monaco', 'Netherlands', 'New Zealand', 'Norway', 'Poland', 'Portugal', 'San Marino',
  'Singapore', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'United Kingdom'
];

export default function EligibilityPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <Head>
        <title>Eligibility | EasyASTA</title>
      </Head>
      <h1 className="text-3xl font-semibold mb-4">Visa Waiver Program Eligibility</h1>
      <p className="mb-4">
        Citizens of certain countries may travel to the United States for tourism or business for up to
        90 days without a visa. This is possible through the Visa Waiver Program (VWP). To travel
        under the VWP you must obtain an Electronic System for Travel Authorization (ESTA) before
        boarding your flight or ship.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Eligible Countries (41)</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 list-disc pl-6">
        {countries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Requirements</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Hold a passport from one of the Visa Waiver Program countries listed above.</li>
        <li>Have an <strong>e‑passport</strong> with an embedded electronic chip【774526863783171†L95-L117】.</li>
        <li>Plan to stay in the U.S. for <strong>90 days or less</strong> for tourism or business.</li>
        <li>Obtain an approved ESTA authorization before boarding your carrier.</li>
        <li>Possess a return or onward ticket.</li>
      </ul>
      <p className="mt-6">
        If you are unsure about your eligibility or require a different type of visa, please consult
        the U.S. embassy or consulate in your country.
      </p>
    </div>
  );
}