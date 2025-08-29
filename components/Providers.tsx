/*
 * Global providers component.
 * At the moment this file sets up Google Analytics if a GA ID is present. You can add
 * additional providers here such as SessionProvider from NextAuth, React Query Provider,
 * ThemeProvider, etc.
 */

import { ReactNode, useEffect } from 'react';
import Script from 'next/script';

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <>
      {/* Conditionally include GA script after user consent (handled separately via cookie banner). */}
      {gaId && (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />
      )}
      {gaId && (
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { anonymize_ip: true });
          `}
        </Script>
      )}
      {children}
    </>
  );
}