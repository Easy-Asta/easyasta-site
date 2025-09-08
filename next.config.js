/ Next.js configuration for the EasyASTA project.
// We wrap the configuration with Sentry so that errors are captured
// both during build and at runtime. If you modify this file,
// ensure that the Sentry wrapper remains applied.



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
  // Internationalisation: define locales and default locale. This works in
  // conjunction with next-intl. The default locale is English, and
  // additional locales are Spanish, French, Arabic and Urdu.
  i18n: {
    locales: ['en', 'es', 'fr', 'ar', 'ur'],
    defaultLocale: 'en',
  },
};

}
modl.exports = nextConfig;
