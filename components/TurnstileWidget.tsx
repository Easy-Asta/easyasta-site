// TurnstileWidget is a reusable component that embeds Cloudflare Turnstile on your page.
// It loads the Turnstile script and renders a div placeholder for the widget. When a token
// is generated, the provided onVerify callback is called with the token. This helper
// allows you to drop bot protection into any form without cluttering your page code.

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export type TurnstileWidgetProps = {
  siteKey: string;
  onVerify?: (token: string) => void;
};

export default function TurnstileWidget({ siteKey, onVerify }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!siteKey || typeof window === 'undefined') return;
    function renderWidget() {
      // @ts-ignore: turnstile is loaded globally by the script tag
      if (window.turnstile && containerRef.current) {
        // @ts-ignore
        window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: onVerify,
          theme: 'light',
        });
      }
    }
    if (typeof (window as any).turnstile !== 'undefined') {
      renderWidget();
    } else {
      const interval = setInterval(() => {
        // @ts-ignore
        if (typeof window.turnstile !== 'undefined') {
          clearInterval(interval);
          renderWidget();
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, [siteKey, onVerify]);

  return (
    <>
      {/* Load Turnstile script. Use strategy="lazyOnload" to defer loading until page idle */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
        strategy="lazyOnload"
      />
      <div ref={containerRef} />
    </>
  );
}