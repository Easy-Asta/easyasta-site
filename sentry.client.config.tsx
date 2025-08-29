// Sentry client configuration for Next.js. This file should be imported
// automatically by the @sentry/nextjs package. It initializes Sentry
// on the client side when the public DSN is defined. You can adjust
// the sampling rate or add additional options if necessary.

import * as Sentry from '@sentry/nextjs';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1.0,
  });
}