import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const pages = ['', '/how-it-works', '/pricing', '/apply', '/status', '/contact',
    '/legal/terms', '/legal/privacy', '/legal/cookies', '/legal/accessibility', '/legal/non-affiliation']
  const now = new Date().toISOString()
  return pages.map(p => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7
  }))
}
