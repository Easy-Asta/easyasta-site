
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export default async function AdminDashboard() {
  const session = await auth();
  if (!session?.user) {
    return <div className="mx-auto max-w-4xl px-4 py-10"><p>Please sign in to access the admin dashboard.</p></div>;
  }
  const counts = {
    total: await prisma.application.count(),
    draft: await prisma.application.count({ where: { status: "Draft" } }),
    submitted: await prisma.application.count({ where: { status: "Submitted" } }),
    awaiting: await prisma.application.count({ where: { status: "Awaiting U.S. Response" } }),
    completed: await prisma.application.count({ where: { status: "Completed" } }),
  };
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(counts).map(([k,v]) => (
          <div key={k} className="card">
            <div className="text-sm text-gray-600">{k}</div>
            <div className="text-2xl font-bold">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
