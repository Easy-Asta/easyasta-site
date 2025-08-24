export default function PricingPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Pricing</h1>
      <p>
        We charge a flat service fee of <strong>£50</strong> for assisting with your ESTA application.
        Additionally, the official U.S. government fee of <strong>$21</strong> is paid directly to U.S.
        Customs and Border Protection during the process.
      </p>
      <p>There are no hidden costs. Our service fee covers:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Expert review of your application</li>
        <li>24/7 customer support via chat and email</li>
        <li>Guidance on required information and uploads</li>
      </ul>
    </div>
  );
}