import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function AdminApplicationsPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  }
  const applications = await prisma.application.findMany({
    include: { applicant: true, payment: true },
    orderBy: { createdAt: 'desc' },
    take: 100,
  });
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Applications</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-neutral">
            <th className="p-2 border">Reference</th>
            <th className="p-2 border">Applicant</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Created</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="odd:bg-white even:bg-neutral">
              <td className="p-2 border font-mono">{app.reference}</td>
              <td className="p-2 border">{app.applicant?.fullName}</td>
              <td className="p-2 border">{app.applicant?.email}</td>
              <td className="p-2 border">{app.status}</td>
              <td className="p-2 border">{app.createdAt.toISOString().split('T')[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}