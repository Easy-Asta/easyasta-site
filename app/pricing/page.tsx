export default function PricingPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Pricing</h1>
      <p className="mb-4">
        Applying for an ESTA requires payment of the official U.S. government fee and, when using
        EasyASTA, a service fee that covers our assistance and support.
      </p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Official ESTA Fee</h2>
          <p>
            The United States Customs and Border Protection charges <strong>$21</strong> to process
            your ESTA application【774526863783171†L95-L117】. This fee includes a $4 processing fee and a $17 authorization fee.
          </p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">EasyASTA Service Fee</h2>
          <p>
            Our service fee covers secure form handling, application review, email support and status
            notifications. The fee is <strong>£50</strong> (approximately €60 / $60 depending on exchange rates).
          </p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Money‑back Guarantee</h2>
          <p>
            If your application is not approved, we refund our service fee in full. The U.S. government
            fee is non‑refundable.
          </p>
        </div>
      </div>
      <p className="mt-6">
        <strong>No hidden charges</strong>. The prices listed above are exactly what you will pay.
      </p>
    </div>
  );
}