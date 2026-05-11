'use client';

import dynamic from 'next/dynamic';
import { CookieBanner } from '@/src/components/cookies/CookieBanner';

const CookiePreferencesModal = dynamic(
  () =>
    import('@/src/components/cookies/CookiePreferencesModal').then(
      (mod) => mod.CookiePreferencesModal
    ),
  { ssr: false }
);

export function CookieConsentRoot() {
  return (
    <>
      <CookieBanner />
      <CookiePreferencesModal />
    </>
  );
}
