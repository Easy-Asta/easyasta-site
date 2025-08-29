export async function verifyTurnstile(token: string): Promise<boolean>{
  const secret = process.env.TURNSTILE_SECRET
  if(!secret){ 
    // In dev, allow empty verification
    return true
  }
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
      cache: 'no-store'
    })
    const data = await res.json()
    return !!data.success
  } catch {
    return false
  }
}
