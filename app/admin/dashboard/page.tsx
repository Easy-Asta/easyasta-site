importimport { getCurrentUser } from '../../../lib/auth';
import { prisma } from '../../../lib/db';


export default async function AdminDashboard() {
  const user = await getCurrentUser();
  if (!user) {
    return <div>Access denied</div>;
  }
  const totalApplications = await prisma.application.count();
  const totalPayments = await prisma.payment.count();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold">Applications</h3>
          <p className="text-2xl">{totalApplications}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold">Payments</h3>
          <p className="text-2xl">{totalPayments}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold">Logs</h3>
          <p className="text-2xl">--</p>
        </div>
      </div>
    </div>
  );
}
