export default function robots(){
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`
  }
}
