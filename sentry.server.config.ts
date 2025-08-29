// Sentry server configuration for Next.js. This file initializes
// Sentry on the server side when the DSN is defined. By separating
// client and server configuration you can control options independently.

import * as Sentry from '@sentry/nextjs';

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
  });
}