import { useState } from 'react';

export default function StatusPage() {
  const [ref, setRef] = useState('');
  const [result, setResult] = useState<string | null>(null);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Call API to fetch status by reference. For now, show a placeholder message.
    setResult('Status lookup is not yet implemented. Please contact support for assistance.');
  }
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Check Your Application Status</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="ref" className="block font-medium">Reference Number</label>
        <input
          id="ref"
          name="ref"
          type="text"
          value={ref}
          onChange={(e) => setRef(e.target.value)}
          required
          className="w-full border border-gray-300 rounded p-2"
        />
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark">
          Check Status
        </button>
      </form>
      {result && <p className="mt-4 text-gray-700">{result}</p>}
    </div>
  );
}