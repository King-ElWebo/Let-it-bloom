'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { GA4_MEASUREMENT_ID } from '@/src/lib/consent/config';
import type { ConsentPreferences } from '@/src/lib/consent/types';

type GtagConsentState = 'granted' | 'denied';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function toGtagState(isGranted: boolean): GtagConsentState {
  return isGranted ? 'granted' : 'denied';
}

function updateGaConsent(consent: ConsentPreferences) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('consent', 'update', {
    analytics_storage: toGtagState(consent.analytics),
    ad_storage: toGtagState(consent.marketing),
    ad_user_data: toGtagState(consent.marketing),
    ad_personalization: toGtagState(consent.marketing),
  });
}

export function ConsentManagedScripts({ consent }: Readonly<{ consent: ConsentPreferences }>) {
  useEffect(() => {
    if (typeof window === 'undefined' || !GA4_MEASUREMENT_ID) return;

    // Stops GA requests when analytics consent is not granted.
    const disableKey = `ga-disable-${GA4_MEASUREMENT_ID}`;
    (window as unknown as Record<string, unknown>)[disableKey] = !consent.analytics;

    updateGaConsent(consent);
  }, [consent]);

  if (!GA4_MEASUREMENT_ID || !consent.analytics) return null;

  return (
    <>
      <Script
        id="ga4-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('config', '${GA4_MEASUREMENT_ID}', {
            anonymize_ip: true,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
