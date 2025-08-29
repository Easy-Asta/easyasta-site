# EasyAster (EasyASTA) — Assisted Secure Travel Applications

This is the MVP for www.easyasta.com (not affiliated with any government). It provides:
- Marketing pages (Home, How it works, Pricing, Contact, Legal).
- Application flow (Apply → Submit → Track → Approve).
- Status lookup via email + reference.
- Basic admin queue (token-protected) with resend-email action.
- Stripe Checkout (service fee) + separate official ESTA fee notice.
- Resend transactional emails.
- i18n scaffolding (EN, ES, FR, AR, UR).
- SEO (sitemap, robots, OpenGraph) and strong security headers (CSP, HSTS).

> **Important**: Configure `.env` before deploying. Do not collect PII until storage and DPA are in place.
