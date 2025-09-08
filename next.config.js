/**
 * Next.js configuration for the EasyASTA project.
 * Removed Sentry integration because the @sentry/nextjs module is not installed.
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['en', 'es', 'fr', 'ar', 'ur'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
