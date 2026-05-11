'use client';

import { CookieBanner } from '@/src/components/cookies/CookieBanner';
import { CookiePreferencesModal } from '@/src/components/cookies/CookiePreferencesModal';

export function CookieConsentRoot() {
  return (
    <>
      <CookieBanner />
      <CookiePreferencesModal />
    </>
  );
}
