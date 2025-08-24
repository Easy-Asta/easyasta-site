/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr'],
  },
};

module.exports = nextConfig;