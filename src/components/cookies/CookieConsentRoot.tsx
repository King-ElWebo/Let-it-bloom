'use client';

import { CookieBanner } from '@/src/components/cookies/CookieBanner';
import { CookiePreferencesModal } from '@/src/components/cookies/CookiePreferencesModal';
import { ConsentManagedScripts } from '@/src/components/cookies/ConsentManagedScripts';
import { useConsent } from '@/src/hooks/useConsent';

export function CookieConsentRoot() {
  const { consent } = useConsent();

  return (
    <>
      <ConsentManagedScripts consent={consent} />
      <CookieBanner />
      <CookiePreferencesModal />
    </>
  );
}
