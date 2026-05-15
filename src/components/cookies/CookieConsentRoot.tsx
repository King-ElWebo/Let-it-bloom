'use client';

import dynamic from 'next/dynamic';
import { CookieBanner } from '@/src/components/cookies/CookieBanner';
import { useConsent } from '@/src/hooks/useConsent';

const CookiePreferencesModal = dynamic(
  () =>
    import('@/src/components/cookies/CookiePreferencesModal').then(
      (mod) => mod.CookiePreferencesModal
    ),
  { ssr: false }
);

export function CookieConsentRoot() {
  const { isPreferencesOpen } = useConsent();

  return (
    <>
      <CookieBanner />
      {isPreferencesOpen && <CookiePreferencesModal />}
    </>
  );
}
