import { getServerSession, type Session } from 'next-auth';
import { athConfig } from '../auth.config';

export async function auth() {
  return getServerSession(authConfig);
}

export async function getCurrentUser(): Promise<Session['user'] | null> {
  const session = await auth();
  return session?.user ?? null;
}
