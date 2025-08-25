// Changed to relative imports to avoid reliance on path aliases.
import { getCurrentUser } from '../../../lib/auth';
import { prisma } from '../../../lib/db';

export default async function LogsPage() {
  const user = await getCurrentUser();
  if (!user) return <div>Access denied</div>;
  const logs = await prisma.log.findMany({ orderBy: { createdAt: 'desc' }, take: 50 });
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">System Logs</h1>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Actor</th>
            <th className="p-2 border">Action</th>
            <th className="p-2 border">Result</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id} className="border-b">
              <td className="p-2 border">{log.createdAt.toLocaleString()}</td>
              <td className="p-2 border">{log.actorId || 'system'}</td>
              <td className="p-2 border">{log.action}</td>
              <td className="p-2 border">{log.error ? 'Error' : 'Success'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}