export default function AdminPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>
      <p>
        This page is restricted to authorized administrators. In a full implementation it would
        display a list of applications, allow you to update statuses, export CSVs and more.
      </p>
    </div>
  );
}