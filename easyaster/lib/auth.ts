import { getServerSession } from 'next-auth/next';
import type { Session } from 'next-auth';
import { authConfig } from '../auth.config';

export async function getCurrentUser(): Promise<Session['user'] | null> {
  const session = await getServerSession(authConfig);
  return session?.user ?? null;
}