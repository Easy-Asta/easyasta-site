// Next.js configuration for the EasyASTA project.
// We wrap the configuration with Sentry so that errors are captured
// both during build and at runtime. If you modify this file,
// ensure that the Sentry wrapper remains applied.

const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Allow images from our own domain and common CDN providers.
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = withSentryConfig(nextConfig, {
  silent: true,
});