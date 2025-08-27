import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminRoute = nextUrl.pathname.startsWith('/admin');
      if (isAdminRoute && !isLoggedIn) return false;
      return true;
    },
  },
  providers: [
    // OAuth or email providers can be added here.
  ],
} satisfies NextAuthConfig;